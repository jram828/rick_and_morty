export const validar = (input) => {
  let errores = {};
  if (input.password.length < 6||input.password.length>10) {
    errores.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }
  if (input.email.length < 1 || input.email.length > 35) {
    errores.password = "El usuario debe contener entre 1 y 35 caracteres";
  }
  if (
    !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      input.email
    )
  ) {
    errores.email = "Debe ser un email valido";
  }
if (!/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(input.password)) {
  errores.password = "La contraseña debe contener un numero";
}
  ;
  return errores;
};