import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import categoriesReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  main: mainReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  products: productsReducer
});

export default rootReducer;
