import './App.css'
import Type from './components/Type'

function App() {
  return (
    <>
      <div className='w-screen h-screen'>
        <header>
          <h1 className='text-center text-5xl m-5'>Pokémon App</h1>
        </header>

        <article className='w-screen h-96 bg-white'>
          
          <input type="text" name="searchPokemon" placeholder='Search Pokémon'/>

          <Type type="Agua"/>
          <Type type="Fuego"/>
          <Type type="Planta"/>
          <Type type="Veneno"/>
          <Type type="Eléctrico"/>
          

        </article>
      </div>
    </>
  )
}

export default App
