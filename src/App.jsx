import { useState, useEffect } from 'react';
import { types } from './data/data'
import PokeCard from './components/PokeCard';
import TypeCard from './components/TypeButton'
import './App.css'

function App() {

  const buttonTypes = types.map(type => <TypeCard Image={type.Type} key={type.Id} />);

  const [pokemon, setPokemon] = useState([]);
  const defaultPokemonURL = 'https://pokeapi.co/api/v2/pokemon/?limit=140';

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(defaultPokemonURL);
      const data = await response.json();
      // console.log(data);

      const { results } = data;
      const pokemons = results.map(async pokemon => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        
        return {
          Id: pokemonData.id,
          Name: pokemonData.name,
          Img: pokemonData.sprites.other.dream_world.front_default
        }
      })

      setPokemon(await Promise.all(pokemons));
    }

    getPokemon();

  }, [])

  console.log(pokemon);


  return (
    <>
      <div className='w-screen h-screen'>
        <header>
          <h1 className='text-center text-5xl m-5'>Pokémon App</h1>
        </header>

        <article className='w-screen h-72 bg-white'>

          <div className='w-screen flex justify-center'>
            <input type="text" name="searchPokemon" placeholder='Search Pokémon' className='bg-sky-400 rounded-md m-5 text-2xl text-start placeholder-gray-600' />
          </div>

          <div className='flex justify-center flex-wrap'>
            {buttonTypes}
          </div>

        </article>

        <section>
          <div>
            <h1 className='text-center m-3 text-3xl'>EXPLORE POKÉMON</h1>
          </div>

          <div className='h-auto grid grid-cols-2 justify-items-center'>

            {
              pokemon.map(pokemon => <PokeCard Name={pokemon.Name} Image={pokemon.Img} key={pokemon.Id} />)
            }

            {/* <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard /> */}
          </div>
        </section>

      </div>
    </>
  )
}

export default App
