import axios from "axios"


export const getPokemon = ()=>
{
    return (
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    //.then(res=>console.log(res))
    .then(res=>res.data.results)
    .catch(e=>console.log(e))
    )

}

export const getPokemonDetails = (pokemon) => {
    return axios.get(pokemon.url)
    .then(res => res.data)
    .catch(e=>console.log(e))
}

