import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect} from "react";

const Card=(props)=> {
  const { name, image, id } = props.character;
  const { addFav,removeFav} = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    
    if (isFav === false) {
        setIsFav(true);
         addFav(props.character);
     } else if (isFav === true) {
        setIsFav(false);
        removeFav(props.character.id);
    }
  }

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.character.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.character.id]);

    return (
      <div className="container">
        <div className="card" key={id}>
          {isFav ? (
            <button
              onClick={handleFavorite}
              style={{
                backgroundColor: "aqua",
                borderStyle: "none",
                fontSize: "300%",
              }}
            >
              ❤️
            </button>
          ) : (
            <button
              onClick={handleFavorite}
              style={{
                backgroundColor: "aqua",
                borderStyle: "none",
                fontSize: "300%",
              }}
            >
              🤍
            </button>
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
              {name}
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
