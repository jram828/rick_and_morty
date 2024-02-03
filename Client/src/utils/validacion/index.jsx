export const validar = (input) => {
  let errores = {};

    if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      input.email
    )
  ) {
    errores.email = "Debe ser un email valido";
  }
  if (!input.email) {
    errores.email = "El usuario no puede estar vacio";
  }

  if (input.email.length > 35) {
    errores.email= "El usuario debe contener menos de 35 caracteres";
  }

  if (!/.\d./.test(input.password)) {
    errores.password = "La contraseña debe contener un numero";
  }

  if (input.password.length < 6) {
    errores.password = "La contraseña debe tener más de 6 caracteres";
  }

  if (input.password.length > 10) {
    errores.password = "La contraseña debe tener maximo 10 caracteres";
  }

  // console.log(errores);
  return errores;
};