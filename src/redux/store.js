import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"
import rootReducer from "./root-reducer";
import logger from "redux-logger";


const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger)
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store)

export { store, persistor };