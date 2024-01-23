import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect} from "react";

const Card=(props)=> {
  // console.log('Props:',props);
  const { name, image, id } = props.character;
const { addFav,removeFav} = props;

  const [isFav,setIsFav] = useState(false);
 

  const handleFavorite = () => {
    
    if (isFav === false) {
        setIsFav(true);
        // console.log("Fav 1:", isFav);
        addFav(props.character);
     } else if (isFav === true) {
        setIsFav(false);
        // console.log("Fav 2:", isFav);
        removeFav(props.character.id);
    }
  }





  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

    return (
      <div className="container">
        <div className="card" key={id}>
          {/* {console.log('FAV:', isFav)} */}
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}> 🤍</button>
          )}

          <button
            className="boton"
            onClick={() => {
              props.onClose(id);
            }}
          >
            X
          </button>
          <img className="photo" src={image} alt="Imagen del personaje" />
          <Link to={`/detail/${id}`}>
            <h1
              style={{
                backgroundColor: "yellowgreen",
                fontSize: 16,
              }}
            >
              Name:{name}
            </h1>
          </Link>
         
        </div>
      </div>
    );
};

  var mapStateToProps = (state) => {
    return { myFavorites: state.myFavorites };
  };


export default connect(mapStateToProps, {addFav,removeFav})(Card);

// export default Card