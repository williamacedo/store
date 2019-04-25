import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import categoriesReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  main: mainReducer,
  categories: categoriesReducer,
  cart: cartReducer
});

export default rootReducer;
