import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import cartReducer from "./cartSlice";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  counter: counterReducer,
  cart: cartReducer
});

export default allReducers;
