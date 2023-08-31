import { actionTypes } from "./actionTypes";

// Dark Mode
export const toggleDarkMode = () => {
  let payload = {};
  return {
    type: actionTypes.TOGGLE_DARK_MODE,
    payload: payload,
  };
};
