import { connect, useSelector, useDispatch } from "react-redux";
import Card from "../card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = (props) => {
console.log('Fav')
  const [aux, setAux] = useState(false);
  // const myFavorites = useSelector((state) => state.myFavorites);
  // console.log('Fav props:',props)
  // const dispatch = useDispatch();
console.log('FAv 2',props.myFavorites)
  const handleOrder = (e) => {
    console.log('Handle Order:')
    setAux(!aux);
    props.orderCards(e.target.value);

  };

  const handleFilter = (e) => {
    props.filterCards(e.target.value);
  }
  
  return (
    <>
      <div className="favorites">
        <select onChange={handleOrder}>
          <option value="b">Escoge el orden</option>
          <option value="a">Ascendente</option>
          <option value="d">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female"> Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className="favorites">
        {props.myFavorites.map((character) => (
          <Card
            key={character.name}
            character={character}
            onClose={props.onClose}
          />
        ))}
      </div>
    </>
  ); 
}

const mapStateToProps = (state) => {
      return { myFavorites: state.allCharacters };
  };
export default connect(mapStateToProps,{filterCards,orderCards})(Favorites);
