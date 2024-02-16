let myFavorites = [];

const postFav = (req,res) => { 
  const { id, name, gender, species, origin, image, status, onClose } = req.body;
  const character = { id, name, gender, species, origin, image, status, onClose };
  myFavorites.push(character);
  res.json(myFavorites);
};

const deleteFav = (req, res) => { 
  
  myFavorites = myFavorites.filter((fav) => { fav.id !== Number(req.params.id) })
  res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };