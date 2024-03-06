import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { URL } from "../../App";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams()
  useEffect(() => {
    axios(
      `${URL}${id}`
    ).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className="container">
      <div className="detail" key={id}>
        {character.name && <h1> {character.name} </h1>}
        
        <img className="photo" src={character.image} alt={character.name} />
        <h3>Status:{character.status}</h3>
        <h3>Species:{character.species}</h3>
        <h3>Gender:{character.gender}</h3>
        {character.origin && <h3>Origin:{character.origin.name}</h3>}
      </div>
    </div>
  ); 
}

export default Detail