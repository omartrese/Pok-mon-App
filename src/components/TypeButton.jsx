/* eslint-disable react/prop-types */
function TypeButton({ Image, Type, setType, currentType, allURL, setPokemon }) {
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
                Img: pokemonData.sprites.other.dream_world.front_default,
                Weight: pokemonData.weight,
                Height: pokemonData.height,
                Types: pokemonData.types,
                HP: pokemonData.stats[0].base_stat,
                Attack: pokemonData.stats[1].base_stat,
                Defense: pokemonData.stats[2].base_stat,
                SpecialAttack: pokemonData.stats[3].base_stat,
                SpecialDefense: pokemonData.stats[4].base_stat,
                Speed: pokemonData.stats[5].base_stat,
            };
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
        <div className=" flex size-11 sm:size-16 min-[820px]:size-20  max-[290px]:size-10 justify-center items-center m-2 duration-150 hover:scale-110 active:scale-90">
            <button type="button" className="size-11 sm:size-16 min-[800px]:size-20 max-[290px]:size-10" onClick={() => filterPokemon(allURL)}>
                <img src={Image} />
            </button>
        </div>
    )
}

export default TypeButton