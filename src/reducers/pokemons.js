import { fromJS } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
    pokemons: [],
    loading: false,    
};

/* const initialState = fromJS({ //forma con immutable
    pokemons: [],
    loading: false,    
}); */

export const pokemonsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_POKEMONS: 
            return { ...state,pokemons: action.payload};
            //return state.setIn(['pokemons'],fromJS(action.payload)); //forma con immutable

        case SET_LOADING:
            return {...state,loading: action.payload};           


        case SET_FAVORITE:
            const newPokemonList = [...state.pokemons]; 
            // forma con immutable
            /* const currentPokemonIndex = state.get('pokemons').findIndex((
                return pokemon.get('id') === action.payload.pokemonId;
            ))
 */
            const currentPokemonIndex = newPokemonList.findIndex((pokemon)=>{ //buscamos el index del pokemon actual al que queremos modificar
                return pokemon.id === action.payload.pokemonId;
            })

            if(currentPokemonIndex < 0){ //si no encontramos ese pokemon retornamos el estado tal cual estaba
                return state;
            }

            //si se encuentra el pokemon cambiamos el valor de su propiedad favorito por su negacion
            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            return {...state, pokemons:newPokemonList} //retornamos el estado con la lista modificada

            //forma con immutable
            /* const isFavorite = state.getIn(['pokemons',currentPokemonIndex,'favorite']);
            return state.setIn(['pokemons',currentPokemonIndex,'favorite'],!isFavorite); */
            
            
        default:
            return state;
    }
};