/* eslint-disable react/prop-types */
import { useState } from "react";
import PokeCard from "./PokeCard"
import { useEffect } from "react";
import Stats from "./Stats";

function PokeSection(props) {

    const [statsDisplay, setStatsDisplay] = useState(false);
    const [clickable, setClickable] = useState(true);
    const [pokemonStats, setPokemonStats] = useState(null);


    useEffect(() => {
        console.log("mostrar pantalla de stats: ", statsDisplay)
        setClickable(!statsDisplay);
    }, [statsDisplay])

    useEffect(() => console.log("botones de pokemon CLICABLES: ", clickable), [clickable])

    return (
        <section className="flex flex-col items-center justify-center">
            <div>
                <h1 className='text-center m-3 text-3xl font-bold'>EXPLORE POKÉMON</h1>
            </div>

            {
                props.pokemon.length > 0 ?
                    <div className="flex justify-around">
                        <div className='h-auto grid grid-cols-2 md:grid-cols-3 justify-items-center max-w-screen-xl'>

                            {
                                props.pokemon.map(pokemon => <PokeCard
                                    Name={pokemon.Name}
                                    Image={pokemon.Img}
                                    Weight={pokemon.Weight}
                                    Height={pokemon.Height}
                                    Types={pokemon.Types}
                                    HP={pokemon.HP}
                                    Attack={pokemon.Attack}
                                    Defense={pokemon.Defense}
                                    SpecialAttack={pokemon.SpecialAttack}
                                    SpecialDefense={pokemon.SpecialDefense}
                                    Speed={pokemon.Speed}
                                    setStatsDisplay={setStatsDisplay}
                                    clickable={clickable}
                                    setPokemonStats={setPokemonStats}
                                    key={pokemon.Id} />)
                            }

                        </div>
                    </div>
                    : <div className="w-screen flex justify-center flex-wrap">
                        <h2>
                            Oops! Not found pokemon..
                        </h2>
                    </div>
            }
            <div >
                <Stats statsDisplayed={statsDisplay} setStatsDisplay={setStatsDisplay} pokemonStats={pokemonStats}/>
            </div>
        </section>

    )
}

export default PokeSection