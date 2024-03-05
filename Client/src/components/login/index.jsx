import React, { useState } from "react";
import { validar } from "../../utils/validacion";
import "../../App.css";
import logo from "../../assets/RickAndMorty.jpg"
import { Button3 } from "../Mystyles";

const Form = ({ login }) => {
  console.log('Login: ',login)
    const [userData, setUserData] = useState({
      email: "",
      password: "",
    });

  const [errores, setErrores] = useState({
      email: "",
      password: "",
  });
    
  const handleChange=(e)=> {
    setErrores(validar({ ...userData, [e.target.name]: e.target.value }));
    
    setUserData({
      ...userData,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
    
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    login(userData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <img
          src={logo}
          alt="Rick and Morty login"
          style={{ height: "300px", marginBottom: "10px", borderRadius:"18%", borderColor:"black", borderStyle:"solid"}}
        />
          <div className="InputLogin">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            name="email"
            type="text"
            placeholder="Ingrese su Email"
            value={userData.email}
            onChange={handleChange}
          />
          <br />
          {errores.email !== "" && <h5 className="errores">{errores.email}</h5>}
          
          <label className="label" htmlFor="password">
            Contraseña:
          </label>
          <br />
          <input
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            value={userData.password}
            onChange={handleChange}
          />
        
          {errores.password !== "" && (
            <h5 className="errores">{errores.password}</h5>
          )}

          {/* {errores.email || errores.password ? null : (
          <button type="submit" value="Enviar" className="boton" />
        )} */}
          <hr style={{ borderStyle: "none" }} />
          <Button3
            type="submit"
            disabled={
              !userData.email ||
              !userData.password ||
              errores.email ||
              errores.password
            }
          >
            INGRESAR
          </Button3>
        </div>
      </form>
    </div>
  );
  };
export default Form;