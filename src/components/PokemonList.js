// src/components/PokemonList.js

import React, { useEffect, useState } from 'react';
import fetchPokemons from '../services/pokemonService';
import { Link } from 'react-router-dom';
import  styled  from 'styled-components';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons().then((data) => setPokemons(data));
  }, []);

  return (
    <Container>
       <div className='container'>
        <div className='add_food'>
      <h1 className='res_listing'>Pokémon List</h1>
      <Link className='btn_pokemon' to="/add-pokemon">Add Pokemon</Link>

      </div>
                <table className='table_det'>
                    <thead>
                    <tr className='head_det'>
                        <th className='heddeta'>Name</th>
                        <th className='heddeta'>Type</th>
                        <th className="heddeta">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pokemons.length === 0 ? (
                      <tr>
                        <td colSpan="3">No record found</td>
                      </tr>
                    ) : (
                    pokemons.map(pokemon => (
                        <tr key={pokemon._id}>
                          <td className='hed_deta'>{pokemon.name}</td>
                          <td className='hed_deta'>{pokemon.type}</td>
                          <td className='hed_deta_link'>
                            <Link className='btn_view' to={`/pokemon/${pokemon._id}`}>View</Link>
                          </td>
                        </tr>
                    )))}
                    </tbody>
                </table>
        </div>
    </Container>
  );
};

export default PokemonList;

const Container = styled.div`
.container {
  width:100vw;
  height:110vh;
  background-color: #ffe6cc;
}
  .add_food{
    display: flex;
    align-items: center;
    justify-content: center;
  }
.res_listing{
    display: flex;
    margin-left: 400px;
    font-size: 3rem;
    font-weight: bold;
    color: #990000;
    align-items: center;
    justify-content: center;
}
.btn_pokemon{
  display: flex;
  margin-left: 290px;
  width: 130px;
  height: 35px;
  text-decoration: none;
  cursor: pointer;
  float: right;
  font-weight: bold;
  border: 1px solid black;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  background-color: #80ff80;
  color: black;
}
.table_det{
    width: 1000px;
    font-size: 1.5rem;
    margin-top: 25px;
    
    margin-left: 190px;
    border: 1px solid grey;
    text-align: center;
    justify-content: center;
}
.head_det{
    background-color: lightgrey;;
}
.hed_deta{
    border: 1px solid black;
}
.btn_view{
    width: 80px;
    height: 35px;
    font-size: 1.2rem;
    padding: 3px;
    border: 1px solid black;
    text-decoration: none;
    font-weight: bold;
    margin: 2px 2px 2px 2px;
    background-color: skyblue;
    color: black;
    text-align: center;
    border-radius: 10px;
    justify-content: center;
}
.heddeta{
  border: 1px solid black;
  background-color: lightgrey;;
}
.hed_deta_link{
    height: 55px;
      border: 1px solid black;
      background-color: #e6ffff;
      margin: 2px 2px 2px 2px;
      justify-content: center;
  }
.hed_deta{
  border: 1px solid black;
  background-color: #e6ffff;
}
`;