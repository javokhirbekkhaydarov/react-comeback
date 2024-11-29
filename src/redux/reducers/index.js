import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
const allReducers = combineReducers({
  isLogged: loggedReducer,
  counter: counterReducer
});

export default allReducers;
