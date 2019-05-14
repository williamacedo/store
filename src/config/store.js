import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import Reducers from "../reducers/rootReducer";
import ReduxThunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, Reducers)

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store)

export { store, persistor };
