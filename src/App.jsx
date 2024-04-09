import './App.css'
import TypeCard from './components/TypeCard'
import { types } from './data/data'

function App() {

  const cardTypes = types.map(type => <TypeCard Image={type.Type} key={type.Id}/>);

  return (
    <>
      <div className='w-screen h-screen'>
        <header>
          <h1 className='text-center text-5xl m-5'>Pokémon App</h1>
        </header>

        <article className='w-screen h-72 bg-white'>

          <div className='w-screen flex justify-center'>
            <input type="text" name="searchPokemon" placeholder='Search Pokémon' className='bg-sky-400 rounded-md m-5 text-2xl text-start placeholder-gray-600'/>
          </div>

          <div className='flex justify-center flex-wrap'>
            {cardTypes}
          </div>

        </article>
      </div>
    </>
  )
}

export default App
