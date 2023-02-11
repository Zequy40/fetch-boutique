import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css'


function NavBar(props){
return (
  <Header>
    <button onClick={() => props.setPage(props.page + 1)}>Suivant</button>
    <button className='retour' onClick={() => props.setPage(props.page - 1)}>Retour</button>
  </Header>
)
}


function App() {
  const[characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setCharacters(data.results);

    }
    fetchData()
  }, [page]);

    return (
      <ContainerAll>
        <h1>
        Personnage Rick and Morty
        </h1>
        <NavBar page={page} setPage={setPage}/>
        <Cards>
        
        {characters.map(item => (
          <div className='contain'>
            <div key={item.id}>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <p>{item.origin.name}</p>
          </div></div> ))}
          
          </Cards>
      </ContainerAll>
    )
  }


const ContainerAll = styled.section`
  h1{
    width:100%;
    color: red;
    font-size: 58px;
    text-align: center;
    padding:50px;
  }
  
  `;
  const Cards = styled.div`
    display: grid;
gap: 1rem;
grid-auto-flow: dense;
grid-auto-rows: auto;
grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
align-items: center;
margin: 20px;
    .contain{
      width:100%;
      display: flex;
      padding: 25px 0;
      border: 1px solid white;
      border-radius:20px;
    }
   
  div{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow: column wrap;
    gap: 10px;
    
    
    img{
      max-width:250px;
      object-fit:cover;
      border-radius:20px;
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
  const Header = styled.div`
  display: flex;
  width:100%;
  button{
    margin: 10px;
    width:100px;
    border-radius: 5px;
    background:blue;
    padding:10px;
  }
  .retour{
    margin: 10px;
    width:100px;
    border-radius: 5px;
    background:red;
    padding:10px;
  }
  `;
export default App
