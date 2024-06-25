import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";


const initialState = {
    pokemons: [],    
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetcjPokemonWithDetails',
    async (_,{dispatch}) =>{
        //dispatch loader
        //fetch
        //dispatch loader
    dispatch(setLoading(true));
    const pokemonRes = await getPokemon();    
    const pokemonsDetails = await Promise.all(pokemonRes.map((pokemon)=>getPokemonDetails(pokemon))); 
    dispatch(setPokemons(pokemonsDetails));
    dispatch(setLoading(false));    
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        setPokemons: (state, action) =>{
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) =>{          
            const currentPokemonIndex = state.pokemons.findIndex((pokemon)=>{ //buscamos el index del pokemon actual al que queremos modificar
                return pokemon.id === action.payload.pokemonId;
            })

            if(currentPokemonIndex >= 0){ 
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;                
            }
    
        }
    }
})

export const { setFavorite, setPokemons} = dataSlice.actions;

export default dataSlice.reducer;
