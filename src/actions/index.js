import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";
import { getPokemonDetails } from "../api";

//Action creators
export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
})

export const setLoading = (payload) =>({
    type: SET_LOADING,
    payload
})

export const setFavorite = (payload) =>({
    type: SET_FAVORITE,
    payload
})

//Action Creator dependiente de Thunk ya que ejecuta una secuencia Asincrona
//mientras el de arriba es un action creator default de redux solo trabaja con secuencias sincronas
export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonsDetails = await Promise.all(pokemons.map((pokemon)=>getPokemonDetails(pokemon))); 
    dispatch(setPokemons(pokemonsDetails))
}