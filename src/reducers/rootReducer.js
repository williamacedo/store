import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import categoriesReducer from "./categoriesReducer";
import cartStoreReducer from "./cartStoreReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  main: mainReducer,
  categories: categoriesReducer,
  products: productsReducer,
  cartStore: cartStoreReducer
});

export default rootReducer;
