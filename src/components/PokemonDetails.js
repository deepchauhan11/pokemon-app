// src/components/PokemonDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  styled  from 'styled-components';
import {Link, useParams} from 'react-router-dom';

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState([]);
    const { pokemonID} = useParams();
   
    useEffect(() => {
        axios.get(`http://localhost:8001/pokemon/${pokemonID}`)
          .then(response => {
            if(response.data === "Pokemon not found") {
                alert("pokemon does not exists")
            }
            setPokemon(response.data);
          })
          .catch(error => {
            console.error('Error fetching pokemon data : ', error);
          });
      }, [pokemonID]);

  return (
    <Container>
        <div className='container'>
            <div className='add_restaurant'>
            <Link className='btn_back' to={`/pokemon-list`}>Back</Link>
            <h1 className='res_listing'>Pokemon Details</h1>
            </div>
                <table className='table_det'>
                    <thead>
                    <tr className='head_det'>
                        <th className='heddeta'>Name</th>
                        <th className='heddeta'>Type</th>
                        <th className='heddeta'>Description</th>
                        <th className='heddeta'>Height</th>
                        <th className='heddeta'>Weight</th>
                        <th className='heddeta'>Abilities</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr key={pokemon._id}>
                        <td className='hed_deta'>{pokemon.name}</td>
                        <td className='hed_deta'>{pokemon.type}</td>
                        <td className='hed_deta'>{pokemon.description}</td>
                        <td className='hed_deta'>{pokemon.height}</td>
                        <td className='hed_deta'>{pokemon.weight}</td>
                        <td className='hed_deta'>{pokemon.abilities}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </Container>
  );
};

export default PokemonDetails;


const Container = styled.div`
.container {
  width:100vw;
  height:110vh;
  background-color: #ffe6cc;
}
  .add_restaurant{
    display: flex;
    margin-top: 0;
    align-items: center;
    justify-content: center;
  }
.res_listing{
  display: flex;
  font-size: 3rem;
  margin: auto;
  font-weight: bold;
  color: #990000;
  align-items: center;
  justify-content: center;
}
.btn_back{
  display: flex;
  width: 70px;
  height: 35px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 10px;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid black;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  background-color: #33adff;
  color: black;
}
.table_det{
    width: 1000px;
    font-size: 1.5rem;
    margin-left: 180px;
    border: 1px solid grey;
    text-align: center;
    justify-content: center;
}
.head_det{
    background-color: lightgrey;;
}
.hed_deta{
    border: 1px solid black;
    background-color: #e6ffff;
}
.heddeta{
  border: 1px solid black;
  background-color: lightgrey;;
}
.hed_deta_view{
  text-decoration: none;

}
`;
