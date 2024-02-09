const axios = require('axios');

const URL= 'https://rickandmortyapi.com/api/character/'

const getCharById = async (res, ID) => {
  try {
    const response = await axios(`${URL}${ID}`);

    const { id, name, gender, species, origin, image, status } = response.data;

    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status,
    };

    res.writeHeader(200, { "Content-type": "application/json" });
    return res.end(JSON.stringify(character))
  } catch (error){
    res.writeHeader(500, { "Content-type": "text/plain" });
    return res.end(error.message)
  }
  }
  module.exports = getCharById;