import './App.css';
import { Col, Spin } from 'antd'
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading} from './actions'
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from './slices/dataSlice';



function App() {

  //const pokemons = useSelector(state => state.pokemons) //forma sin redux toolkit
  //const pokemons = useSelector((state)=>state.get('pokemons')).toJS(); //forma con immutable

  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  //const loading = useSelector(state => state.loading)

  const loading = useSelector((state)=>state.ui.loading);

  const dispatch = useDispatch();

  useEffect(()=>{

    //dispatch(setPokemons(pokemonRes)); //1ra forma usando redux sincrono

    /*const pokemonsDetails = await Promise.all(pokemonRes.map((pokemon)=>getPokemonDetails(pokemon))); 
    dispatch(setPokemons(pokemonsDetails));*/ //2da forma usando asincronismo pero no en un middleware sino aqui mismo en el componente

    //tercera forma usando asincronismo pero en un middleware con thunk
    /* const fetchPokemons = async() => { 
    dispatch(setLoading(true));
    const pokemonRes = await getPokemon();}
    dispatch(getPokemonsWithDetails(pokemonRes)); 
    dispatch(setLoading(false));  */   

    //cuarta forma usando redux toolkit y AsyncThunk
    dispatch(fetchPokemonsWithDetails());     
  }    

  //fetchPokemons()
  ,[])

  /* if(!pokemons || pokemons.length === 0) return <h1>Loading....</h1> */

  
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      { loading ? ( <Col offset={12}>
        <Spin spinning size='large'  />
      </Col>) : (
        <PokemonList pokemons={pokemons} />
      )}        
      
    </div>
  );
}


export default App;
