// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PokemonList from './components/PokemonList';
import AddPokemon from './components/AddPokemon';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={< Login />}/>
        
          <Route exact path="/pokemon-list" element={ <PokemonList/>} />
          <Route exact path="/add-pokemon" element={<AddPokemon/>} />
          <Route exact path="/pokemon/:pokemonID" element={<PokemonDetails/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
