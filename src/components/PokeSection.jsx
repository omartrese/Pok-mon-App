/* eslint-disable react/prop-types */
import PokeCard from "./PokeCard"

function PokeSection(props) {
    return (
        <section>
            <div>
                <h1 className='text-center m-3 text-3xl'>EXPLORE POKÉMON</h1>
            </div>

            <div className='h-auto grid grid-cols-2 justify-items-center'>

                {
                    props.pokemons.map(pokemon => <PokeCard Name={pokemon.Name} Image={pokemon.Img} key={pokemon.Id} />)
                }

            </div>
        </section>
    )
}

export default PokeSection