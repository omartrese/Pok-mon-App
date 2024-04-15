/* eslint-disable react/prop-types */
import { useEffect, useCallback } from 'react';
import { types } from '../data/data'
import TypeButton from './TypeButton';

function Explorer({ allPokemonURL, setPokemon, search, setSearch }) {

    const buttonTypes = types.map(type => <TypeButton Image={type.Type} key={type.Id} />);

    const handleChange = useCallback((e) => {
        const value = e.target.value;
        setSearch(value);
    }, [setSearch]);

    const getPokemon = async (url, setPokemon, search) => {
        const response = await fetch(url);
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
    
        setPokemon((await Promise.all(pokemons)).filter(pokemon => pokemon.Name.includes(search.toLowerCase())));
    }
    
    useEffect(() => {
        getPokemon(allPokemonURL, setPokemon, search);
    }, [allPokemonURL, search, setPokemon])

    return (
        <article className='w-screen h-72 bg-white'>

            <div className='w-screen flex justify-center'>
                <input type="text" name="searchPokemon" placeholder='Search Pokémon' className='bg-sky-400 rounded-md m-5 text-2xl text-start placeholder-gray-600' onChange={(e) => handleChange(e)} />
            </div>

            <div className='flex justify-center flex-wrap'>
                {buttonTypes}
            </div>

        </article>
    )
}

export default Explorer