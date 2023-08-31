import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  // add other reducers as needed
});

export default rootReducer;
