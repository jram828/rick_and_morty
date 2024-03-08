import React, { useState } from "react";

import "../../App.css";
import logo from "../../assets/RickAndMorty.jpg"
import { Button3 } from "../Mystyles";


const CrearUsuario = ({crearUsuario}) => {

  const [userDataCrear, setUserDataCrear] = useState({
    email: "",
    password: "",
  });

  const handleChangeCrear = (e) => {
    setUserDataCrear({
      ...userDataCrear,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitHandlerCrear = (e) => {
    e.preventDefault();
    crearUsuario(userDataCrear)
  };

  return (
    <div>
      <form onSubmit={submitHandlerCrear}>
        <h2
          style={{
            color: "aqua",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
          }}
        >
          CREAR USUARIO{" "}
        </h2>
        <div className="fotoRegistro">
        <img
          src={logo}
          alt="Rick and Morty login"
          style={{
            height: "300px",
            marginBottom: "10px",
            borderRadius: "18%",
            borderColor: "black",
            borderStyle: "solid",
          }}
        />
          
        </div>
        <div className="InputLogin">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            name="email"
            type="text"
            placeholder="Ingrese su Email"
            value={userDataCrear.email}
            onChange={handleChangeCrear}
          />
          <br />
          <label className="label" htmlFor="password">
            Contraseña:
          </label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={userDataCrear.password}
            onChange={handleChangeCrear}
          />
          <hr style={{ borderStyle: "none" }} />
          <Button3
            type="submit"
            disabled={!userDataCrear.email || !userDataCrear.password}
          >
            CREAR
          </Button3>
        </div>
      </form>
    </div>
  );
};
export default CrearUsuario;
