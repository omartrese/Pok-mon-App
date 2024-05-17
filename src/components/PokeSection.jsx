/* eslint-disable react/prop-types */
import PokeCard from "./PokeCard"
import Stats from "./Stats";

function PokeSection(props) {
    return (
        <section>
            <div>
                <h1 className='text-center m-3 text-3xl font-bold'>EXPLORE POKÉMON</h1>
            </div>

            {
                props.pokemon.length > 0 ?
                <div className="flex justify-around">
                    <div className='h-auto grid grid-cols-2 justify-items-center max-w-screen-xl'>

                        {
                            props.pokemon.map(pokemon => <PokeCard Name={pokemon.Name} Image={pokemon.Img} key={pokemon.Id} />)
                        }

                    </div>
                </div>
                    : <div className="w-screen flex justify-center flex-wrap">
                        <h2>
                            Oops! Not found pokemon..
                        </h2>
                    </div>
            }

            <Stats />

        </section>
    )
}

export default PokeSection