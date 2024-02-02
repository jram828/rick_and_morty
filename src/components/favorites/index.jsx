import { connect, useSelector, useDispatch } from "react-redux";
import Card from "../card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {

  const [aux, setAux] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  console.log('Fav state:', myFavorites)
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(orderCards(e.target.value));

  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
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
        {myFavorites.map((character) => (
          <Card
            key={character.id}
            character={character}
            // onClose={props.onClose}
          />
        ))}
      </div>
    </>
  ); 
}

// const mapStateToProps = (state) => {
//       return { myFavorites: state.allCharacters };
// };
  
export default Favorites
// export default connect(mapStateToProps,{filterCards,orderCards})(Favorites);
