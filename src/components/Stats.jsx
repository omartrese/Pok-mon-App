function Stats(statsDisplay) {
  return statsDisplay ? (
    <article className="bg-white fixed top-0 bottom-0 right-0 left-0 m-12">
      <h1>STATS</h1>

      <div>
        <h3>Weight: </h3>
        <h3>Height: </h3>
      </div>
      
      <div>
        <h3>Types:</h3>
        <ul>
          
        </ul>
      </div>

      <div>
        <h3>HP: </h3>
        <h3>Attack: </h3>
        <h3>Defense: </h3>
        <h3>Special Attack: </h3>
        <h3>Special Defense: </h3>
        <h3>Speed: </h3>
      </div>
    </article>
  ) : null
}

export default Stats