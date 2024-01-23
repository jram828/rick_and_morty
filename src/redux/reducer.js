import { ADD_FAV, REMOVE_FAV } from "./actions";
let initialState = { myFavorites: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: [...state.myFavorites,action.payload ]}
    case REMOVE_FAV:
      const myFavoritesFilter = state.myFavorites.filter(
        (character) => character.id !== action.payload
      );
      return { myFavorites:myFavoritesFilter};
      
    default:
      return state;
  }
}

export default rootReducer;