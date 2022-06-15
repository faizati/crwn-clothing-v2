import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

// const thunkMiddleware = (store) => (next) => (action) => {
//   if(typeof action === 'function') {
//     action(dispatch)
//   }
// }

const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "categories"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// root reducer
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
