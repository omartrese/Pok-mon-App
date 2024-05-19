/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import './App.css'
import Explorer from './components/Explorer';
import PokeSection from './components/PokeSection';
import pokemonAppLogo from './assets/pokemonApp.svg';

function App() {

  const DEFAULT_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
  const ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=300';

  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

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
          Img: pokemonData.sprites.other.dream_world.front_default,
          Weight: pokemonData.weight,
          Height: pokemonData.height,
          Types: pokemonData.types,
          HP: pokemonData.stats[0].base_stat,
          Attack: pokemonData.stats[1].base_stat,
          Defense: pokemonData.stats[2].base_stat,
          SpecialAttack: pokemonData.stats[3].base_stat,
          SpecialDefense: pokemonData.stats[4].base_stat,
          Speed: pokemonData.stats[5].base_stat,
        };
      })

      let finalPokemon = await Promise.all(pokemons);
      setPokemon(finalPokemon);

    }

    getPokemon();

  }, [])

  return (
    <>
      <div className='w-screen h-screen'>
        <header className='flex justify-center'>
          {/* <h1 className='text-center text-5xl m-5'>Pokémon App</h1> */}
          <img src={pokemonAppLogo} alt="pokemonApp Logo" style={{ width: 'auto', height: 'auto', margin: '1em' }} />
        </header>

        <Explorer allPokemonURL={ALL_POKEMON_URL} defaultPokemonURL={DEFAULT_POKEMON_URL} setPokemon={setPokemon} setSearch={setSearch} search={search} />

        <PokeSection pokemon={pokemon} />

      </div>
    </>
  )
}

export default App