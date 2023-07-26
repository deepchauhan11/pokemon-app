import React, { useState } from 'react';
import {Link,  useNavigate } from 'react-router-dom';
import axios from 'axios';
import  styled  from 'styled-components';

const AddPokemon = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [abilities, setAbilities] = useState('');
  const history=useNavigate();


  const createPokemon = (event) => {
    event.preventDefault();


    // Make an API request to update the food item
    axios
      .post(`http://localhost:8001/pokemon`,  {
        name,
        type,
        description,
        height,
        weight,
        abilities
      })
      .then((response) => {
        // Handle the successful update, e.g., show a success message or navigate back to the listing page
        console.log('pokemon updated successfully');
        history(`/pokemon-list`)
      })
      .catch((error) => {
        // Handle the error, e.g., show an error message
        console.error('Error updating pokemon:', error);
      });
  };

  return (
    <Container>
      <div>
      <Link className='btn_back' to={`/pokemon-list`}>Back</Link>
        <h1 className='food_items'>Add Pokemon</h1>
          <form onSubmit={createPokemon} className='table_det'>
            <div className='form_container'>
            <label>
              Name:
              <input className='inp_det_1' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
              Type:
              <input className='inp_det_2' type="text" value={type} onChange={(e) => setType(e.target.value)} />
            </label>
            <br />
            <label>
              Description:
              <input className='inp_det_3' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <label>
              Height:
              <input className='inp_det_4' type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </label>
            <br />
            <label>
              Weight:
              <input className='inp_det_5' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <br />
            <label>
            Abilities:
              <input className='inp_det_6' type="text" value={abilities} onChange={(e) => setAbilities(e.target.value)} />
            </label>
            <br />
            <button className='btn' type="submit">Create Pokemon</button>
            </div>
          </form>
      </div>
    </Container>
  );
};

export default AddPokemon;


const Container = styled.div`
body {
  background-color: #fafafa;
}
.food_items{
  display: flex;
  margin: 15px;
  font-size: 3rem;
  font-weight: bold;
  color: #990000;
  justify-content: center;
}
.form_container{
  margin-top: 15px;
  text-align: center;
  justify-content: center;
}
.btn_back{
  display: flex;
  width: 70px;
  height: 35px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 70px;
  margin-top: 10px;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid black;
  align-items: center;
  border-radius: 7px;
  justify-content: center;
  background-color: #33adff;
  color: black;
}
.table_det{
  width: 570px;
  height: 350px;
  font-size: 1.5rem;
  margin-top: 30px;
  margin-left: 400px;
  align-items: center;
  border-radius: 7px;
  justify-content: center;
  border: 1px solid grey;
  text-align: center;
  
  background-color: #e6ffff;
  justify-content: center;
}

.inp_det_1{
  width: 250px;
  margin-left: 87px;
  padding: 5px;
}
.inp_det_2{
  width: 250px;
  margin-left: 101px;
  padding: 5px;
}
.inp_det_3{
  width: 250px;
  margin-left: 30px;
  padding: 5px;
}
.inp_det_4{
  width: 250px;
  margin-left: 80px;
  padding: 5px;
}
.inp_det_5{
  width: 250px;
  margin-left: 75px;
  padding: 5px;
}
.inp_det_6{
  width: 250px;
  margin-left: 70px;
  padding: 5px;
}
.btn{
  width: 250px;
  font-weight: bold;
  margin-left : 5px;
  cursor: pointer;
  margin-top : 25px;
  background-color: #99e699;
  border-radius: 7px;
  padding: 5px;
}
`;