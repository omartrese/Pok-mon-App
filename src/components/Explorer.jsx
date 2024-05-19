/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback } from 'react';
import { types } from '../data/data'
import TypeButton from './TypeButton';

function Explorer({
    allPokemonURL,
    defaultPokemonURL,
    setPokemon,
    search,
    setSearch, }) {

    const [currentType, setType] = useState("none");
    
    const buttonTypes = types.map(type => <TypeButton
        Image={type.Image} //each type icon
        Type={type.Type} //each type identifier
        currentType={currentType} //useState functions to save current Type used
        setType={setType}
        allURL={allPokemonURL} //URL For making request to filter results
        setPokemon={setPokemon} //useState to save results into var for render all pokemon
        key={type.Id} />);


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

        setPokemon((await Promise.all(pokemons)).filter(pokemon => pokemon.Name.includes(search.toLowerCase())));
    }

    useEffect(() => {

        if(!search || !search.trim() || search.length < 1) getPokemon(defaultPokemonURL, setPokemon, search);
            else{
        getPokemon(allPokemonURL, setPokemon, search);
        }
    }, [allPokemonURL, defaultPokemonURL, search, setPokemon])

    return (
        <article className='w-screen h-72 bg-white'>

            <div className='w-screen flex justify-center'>
                <input type="text" name="searchPokemon" placeholder='Search Pokémon' className='bg-sky-400 rounded-md m-5 text-2xl sm:text-4xl max-[290px]:text-xl text-start placeholder-gray-600' onChange={(e) => handleChange(e)} />
            </div>

            <div className='flex justify-center flex-wrap'>
                {buttonTypes}
            </div>

        </article>
    )
}

export default Explorer