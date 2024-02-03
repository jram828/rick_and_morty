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
        <h2>Species:{character.species}</h2>
        <h2>Gender:{character.gender}</h2>
        {character.origin && <h2>Origin:{character.origin.name}</h2>}
      </div>
    </div>
  ); 
}

export default Detail