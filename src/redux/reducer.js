import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./actions";


let initialState = {
  myFavorites: [],
  allCharacters: [],
  charactersOrder:[]
};



const rootReducer = (state = initialState, action) => {
  console.log('Action reducer',action)
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload]
      }
    case REMOVE_FAV:
      const myFavoritesFilter = state.myFavorites.filter(
        (character) => character.id !== action.payload
      );
    
      return { ...state, myFavorites: myFavoritesFilter };
    case FILTER_CARDS:

      if (action.payload.toUpperCase() === "ALL") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      } else {
        console.log('Stado filter',state)
        
        return {
          ...state,
          myFavorites: state.allCharacters.filter(
          (character) =>
            character.gender.toUpperCase() === action.payload.toUpperCase()
        ),
        };
      }
            
    case ORDER_CARDS:
      debugger
      console.log('Payload',action.payload)
      if (action.payload.toUpperCase() === 'A') {
        console.log("Payload 2", action.payload);
        return {
          ...state,
          myfavorites: state.allCharacters.sort((a, b) => a.name > b.name ? 1 : -1),
        };
      } else if (action.payload.toUpperCase() === "D") {
        return {
          ...state,
          myfavorites: state.allCharacters.sort((a, b) =>
            a.name < b.name ? 1 : -1
          ),
        };
      }
      return
    default:
      return state;
  }
};

export default rootReducer;