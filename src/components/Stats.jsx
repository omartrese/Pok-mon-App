/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import back from '../assets/back.svg';

function Stats({ statsDisplayed, setStatsDisplay, pokemonStats }) {

  if (!statsDisplayed) {
    return null;
  }

  return (
    <article className="bg-white fixed top-0 bottom-0 right-0 left-0 max-w-[800px] text-3xl sm:text-4xl mx-auto p-4 overflow-hidden flex flex-col items-center">

      <h1 className="self-center text-3xl sm:text-5xl font-bold">{pokemonStats.Name.toUpperCase()}</h1>

      <img className="size-24 sm:size-40 m-4 self-center" src={pokemonStats.Image} alt="" />

      <span className="self-center">
        <div className="p-2">
          <h3><em>Weight:</em> <strong>{pokemonStats.Weight / 10}kg</strong></h3>
          <h3><em>Height:</em> <strong>{pokemonStats.Height / 10}m</strong></h3>
        </div>

        <div className="p-2">
          <h3><em>Types:</em> </h3>
          <ul>
            {pokemonStats.Types.map(Type => <li className="px-3 list-inside list-disc">{Type.type.name}</li>)}
          </ul>
        </div>

        <div className="p-2">
          <h3><em>HP:</em> <strong>{pokemonStats.HP}</strong></h3>
          <h3><em>Attack:</em> <strong>{pokemonStats.Attack}</strong></h3>
          <h3><em>Defense:</em> <strong>{pokemonStats.Defense}</strong></h3>
          <h3><em>Special </em>Attack: <strong>{pokemonStats.SpecialAttack}</strong></h3>
          <h3><em>Special </em>Defense: <strong>{pokemonStats.SpecialDefense}</strong></h3>
          <h3><em>Speed:</em> <strong>{pokemonStats.Speed}</strong></h3>
        </div>
      </span>

      <button type="button" onClick={() => setStatsDisplay(false)} className='flex items-center justify-center m-10 size-16 border-solid border-4 rounded-md border-black'><img src={back} alt="" className='size-10' /></button>
    </article>
  )
}

export default Stats