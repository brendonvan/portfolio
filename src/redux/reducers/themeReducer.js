import { actionTypes } from "../actions/actionTypes";

const initialState = {
  isDarkMode: true,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

export default themeReducer;
