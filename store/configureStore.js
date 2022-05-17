import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

let middleware = [];
if (process.env.NODE_ENV === "production") {
  middleware = [thunk];
} else {
  middleware = typeof window === "object" ? [thunk] : [thunk];
}

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const makeStore = () => createStore(rootReducer, enhancer);
