import { ADD_FAV, FILTER_CARDS, ORDER_CARDS, REMOVE_FAV } from "./actions";

let initialState = {
  myFavorites: [],
  allCharacters: []
  };

const rootReducer = (state = initialState, action) => {
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
        const charactersFilter = state.allCharacters.filter(
          (character) =>
            character.gender.toUpperCase() === action.payload.toUpperCase()
        );

        return {
          ...state,
          myFavorites: charactersFilter,
        };
      }
            
    case ORDER_CARDS:
      if (action.payload.toUpperCase() === 'A') {
         return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) => a.name > b.name ? 1 : -1),
        };
      } else  {
          return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) =>
            a.name < b.name ? 1 : -1
          ),
        };
      }
      default:
      return state;
  }
};

export default rootReducer;