import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://fakestoreapi.com/products')
      .then(res => {
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <ContainerAll>
        <h1>
        Boutique en ligne
        </h1>
        {this.state.data.map(item => (
            <div key={item.id}>
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div> ))}
      </ContainerAll>
    )
  }
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