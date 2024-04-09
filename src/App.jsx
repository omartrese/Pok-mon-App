import './App.css'
import TypeCard from './components/TypeCard'

function App() {
  return (
    <>
      <div className='w-screen h-screen'>
        <header>
          <h1 className='text-center text-5xl m-5'>Pokémon App</h1>
        </header>

        <article className='w-screen h-48 bg-white'>

          <div className='w-screen flex justify-center'>
            <input type="text" name="searchPokemon" placeholder='Search Pokémon' className='bg-sky-400 rounded-md m-5 text-2xl text-start'/>
          </div>

          <div>
            <TypeCard />
            <TypeCard />
            <TypeCard />
            <TypeCard />
            <TypeCard />
            <TypeCard />
          </div>

        </article>
      </div>
    </>
  )
}

export default App
