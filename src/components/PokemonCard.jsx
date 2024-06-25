import { Card } from "antd";
import StarButton from "./StarButton";
//import { setFavorite } from "../actions";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";


const PokemonCard = ({pokemon,image, types, id, favorite}) => {

    const dispatch = useDispatch();

    const handleOnFavorite = () =>{
      dispatch(setFavorite({ pokemonId: id}));
    }


    const { Meta } = Card; //Destructure Meta from Card component

    const typePokemon = types.map( elem => elem.type.name).join(', ');

  return (
    <Card title={pokemon.name}
    cover={<img src={image} alt={pokemon.name} />}
    extra={<StarButton isFavorite={favorite} onClick={ handleOnFavorite } />}
    >
      <Meta description={typePokemon} />
    </Card>
  );
};

export default PokemonCard;
