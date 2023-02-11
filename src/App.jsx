import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import './App.css'

function App() {
  const[characters, setCharacters] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);

    }
    fetchData()
  }, []);

    return (
      <ContainerAll>
        <h1>
        Boutique en ligne
        </h1>
        {characters.map(item => (
            <div key={item.id}>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.origin.name}</p>
          </div> ))}
      </ContainerAll>
    )
  }


const ContainerAll = styled.section`
  width:100%;
  max-width: 1200px;
  margin: 30px auto;
  
  h1{
    width:100%;
    color: red;
    font-size: 58px;
    text-align: center;
  }
  div{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow: column wrap;
    padding:50px;
    gap: 20px;
    img{
      max-width:250px;
      object-fit:cover;
    }
    h2{
      text-transform: uppercase;
      font-size: 25px;
    }
    p{
      font-size: 18px;
    }
  }
  `;
export default App
