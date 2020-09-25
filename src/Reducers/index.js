import cartReducer from "./cart";
import emailReducer from "./email";
import loggedReducer from "./isLogged";
import usernameReducer from "./username";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cart: cartReducer,
  email: emailReducer,
  isLogged: loggedReducer,
  username: usernameReducer,
});

export default allReducers;
