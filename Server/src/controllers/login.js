const users = require('../utils/users');

const login = async(req, res) => {
  const { email, password } = req.query;
  console.log('Email: ', email)
  console.log('Password: ', password)
  const user = users.find((user) => (user.email === email && user.password === password));
  
  console.log('USer email', user)
  
  if (user) {
    return res.status(200).json({ access: true });
  } else {
    
    return res.status(400).json({ access: false });
  }
};

module.exports = login;