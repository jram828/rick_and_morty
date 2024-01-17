import React, { useState } from "react";
import { validar } from "../../utils/validacion";

const Form = ({login}) => {
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
  
  console.log(errores);

  const submitHandler = (e) => {
    e.preventDefault();
    login(userData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <img
          src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"
          alt="" style={
            {height:'350px'}
          }
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="text"
          placeholder="Ingrese su Email"
          value={userData.email}
          onChange={handleChange}
        />
        <span>{errores.email}</span>
        <br />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input
          name="password"
          type="password"
          placeholder="Ingrese su contraseña"
          value={userData.password}
          onChange={handleChange}
        />
        <span>{errores.password}</span>
        {errores.email || errores.password ? null : (
          <input type="submit" value="Enviar" />
        )}
      </form>
    </div>
  );
  };
export default Form;