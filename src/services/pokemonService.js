// src/services/pokemonService.js

const fetchPokemons = async () => {
    // Add your API endpoint to fetch Pokémon list
    // For simplicity, let's assume the API returns an array of Pokémon objects
    const response = await fetch('http://localhost:8001/pokemons');
    const data = await response.json();
    return data;
  };
  
  export default fetchPokemons;
  