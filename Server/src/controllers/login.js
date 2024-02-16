const users = require('../utils/users');

const login = async(req, res) => {
  const { email, password } = req.query;
  const user = users.find((user) => (user.email === email && user.password === password));
  
  if (user) {
    return res.status(200).json({ access: true });
  } else {
    //      window.alert("Usuario o contraseña incorrectos");
    return res.status(200).json({ access: false });
  }
};

module.exports = login;