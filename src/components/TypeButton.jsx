/* eslint-disable react/prop-types */
function TypeButton({ Image, Type, setType, currentType, Url, setPokemon }) {
    const filterPokemon = async (url) => {
        
        if(currentType === Type) return; //avoid making infinite requests by clicking the same type
        setType(Type);
        // console.log(Type);
        // console.log(currentType.Type);
        // console.log(Type === currentType);

        const response = await fetch(url);
        const data = await response.json();

        const { results } = data;
        const pokemons = results.map(async pokemon => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();

            return {
                Id: pokemonData.id,
                Name: pokemonData.name,
                Types: pokemonData.types,
                Img: pokemonData.sprites.other.dream_world.front_default
            }
        })

        if (Type != "none")
            setPokemon((await Promise.all(pokemons)).filter(pokemon => {
                const pokemonTypes = pokemon.Types;
                return pokemonTypes.some(pokemonType => pokemonType.type.name === Type);
            }));
        else {
            setPokemon((await Promise.all(pokemons)).splice(0, 100));
        }
    }



    return (
        <div className=" flex size-10 sm:size-16 min-[820px]:size-20  max-[290px]:size-10 justify-center items-center m-2 duration-150 hover:scale-110 active:scale-90">
            <button type="button" className="size-10 sm:size-16 min-[800px]:size-20 max-[290px]:size-10" onClick={() => filterPokemon(Url)}>
                <img src={Image} />
            </button>
        </div>
    )
}

export default TypeButton