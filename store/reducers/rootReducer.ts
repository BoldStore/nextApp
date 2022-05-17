import { combineReducers } from "redux";
import addressReducer from "./address";
import codeReducer from "./code";
import orderReducer from "./order";
import pagesReducer from "./pages";
import storeReducer from "./store";
import userReducer from "./user";

const rootReducer = combineReducers({
  store: storeReducer,
  user: userReducer,
  orders: orderReducer,
  code: codeReducer,
  addresses: addressReducer,
  pages: pagesReducer,
});

export default rootReducer;
