/* This file is just to keep a copy of the connect version of redux for the App.js component  */

import './App.css';
import { Col } from 'antd'
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { useEffect, useState } from 'react';
import { getPokemon } from './api';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions } from './actions'

function App({pokemons, setPokemons}) {
  console.log(pokemons);
  /* const [pokemons,setPokemons] = useState([]) */

  useEffect(()=>{
    const fetchPokemons = async() => { 
    const pokemonRes = await getPokemon(); 
    setPokemons(pokemonRes)
  }    

  fetchPokemons()
  },[])

  if(!pokemons || pokemons.length === 0) return <h1>Loading....</h1>

  
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>      
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);