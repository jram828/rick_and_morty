import { connect } from "react-redux";
import Card from "../card";
const Favorites = (props) => {
  console.log('Fav props:',props)
  
  
 return (
   <div className="favorites">
     {props.myFavorites.map((character) => (
       <Card key={character.id} character={character} onClose={ props.onClose} />
       
     ))}
   </div>
 ); 
}

const mapStateToProps = (state) => {
      return { myFavorites: state.myFavorites };
  };
export default connect(mapStateToProps,{})(Favorites);
