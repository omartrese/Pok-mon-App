import { useState, useEffect } from 'react';
import './App.css'
import Explorer from './components/Explorer';
import PokeSection from './components/PokeSection';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  const DEFAULT_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
  const ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=300';

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(DEFAULT_POKEMON_URL);
      const data = await response.json();

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

  return (
    <>
      <div className='w-screen h-screen'>
        <header>
          <h1 className='text-center text-5xl m-5'>Pokémon App</h1>
        </header>

        <Explorer allPokemonURL={ALL_POKEMON_URL} setPokemon={setPokemon} setSearch={setSearch} search={search} />

        <PokeSection pokemon={pokemon} />

      </div>
    </>
  )
}

export default App