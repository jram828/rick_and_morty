import axios from "axios";

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER_CARDS = 'FILTER_CARDS';
export const ORDER_CARDS = 'ORDER_CARDS';

// export const addFav = (character) => {
  
//   return {
//     type: ADD_FAV,
//   payload:character}
// }



// ACTION | addFav
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    const { data } = await axios.post(endpoint, character)
    try{
      
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (erorr){
       throw new TypeError('El favorito no ha sido agregado')
    };
  };
};
// export const removeFav = (id) => {
//   return {
//     type: REMOVE_FAV,
//     payload:id
//   }
// }

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    const { data } = await axios.delete(endpoint)
    try{
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {
      throw new TypeError("El favorito no se ha borrado");
    };
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER_CARDS,
    payload: gender
  }
}

export const orderCards = (order) => {
  console.log('Order Action:', order)
  return {
    
    type: ORDER_CARDS,
    payload: order
  }
}