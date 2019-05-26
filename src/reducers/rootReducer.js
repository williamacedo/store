import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import categoriesReducer from "./categoriesReducer";
import cartStoreReducer from "./cartStoreReducer";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  main: mainReducer,
  categories: categoriesReducer,
  products: productsReducer,
  cartStore: cartStoreReducer,
  auth: authReducer
});

export default rootReducer;
