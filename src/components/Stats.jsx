/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
function Stats({statsDisplayed, pokemonStats}) {

  if (!statsDisplayed) {
    return null;
  }

  return (
    <article className="bg-white fixed top-0 bottom-0 right-0 left-0 m-12 overflow-hidden ">
      <h1>{pokemonStats.Name.toUpperCase()}</h1>

      <div>
        <h3>Weight: {pokemonStats.Weight / 10}kg</h3>
        <h3>Height: {pokemonStats.Height / 10}m</h3>
      </div>
      
      <div>
        <h3>Types: </h3>
        <ul>
          {pokemonStats.Types.map(Type => <li>{Type.type.name}</li>)}
        </ul>
      </div>

      <div>
        <h3>HP: {pokemonStats.HP}</h3>
        <h3>Attack: {pokemonStats.Attack}</h3>
        <h3>Defense: {pokemonStats.Defense}</h3>
        <h3>Special Attack: {pokemonStats.SpecialAttack}</h3>
        <h3>Special Defense: {pokemonStats.SpecialDefense}</h3>
        <h3>Speed: {pokemonStats.Speed}</h3>
      </div>
    </article>
  )
}

export default Stats