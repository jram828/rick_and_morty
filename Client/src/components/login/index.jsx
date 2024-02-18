import React, { useState } from "react";
import { validar } from "../../utils/validacion";
import "../../App.css";

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
          src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"
          alt=""
          style={{ height: "350px", marginBottom: '50px'}}
        />
        <br />
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          name="email"
          type="text"
          placeholder="Ingrese su Email"
          value={userData.email}
          onChange={handleChange}
        />
        {errores.email !== "" && <h5 className="errores">{errores.email}</h5>}
        <br />
        <label className="label" htmlFor="password">
          Contraseña:
        </label>
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
        {errores.email || errores.password ? null : (
          <input type="submit" value="Enviar" />
        )}
      </form>
    </div>
  );
  };
export default Form;