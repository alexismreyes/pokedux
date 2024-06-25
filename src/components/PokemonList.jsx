import PokemonCard from "./PokemonCard";
import "./PokemonList.css"

const PokemonList = ({ pokemons }) => { 
    
    console.log(pokemons);

    return (     
        <>       
        <div className="PokemonList">
            {pokemons.map((pokemon)=>{
                return <PokemonCard 
                pokemon={pokemon} 
                key={pokemon.name}
                image={pokemon.sprites.front_default}
                types={pokemon.types}
                id={pokemon.id}
                favorite={pokemon.favorite} //esta propiedad no existe en el API practicamente se agrega inicialmente como undefined
                />
            })}
        </div>
        
        </>   
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), //crea un arreglo de 10 posiciones con valor ''
}

export default PokemonList