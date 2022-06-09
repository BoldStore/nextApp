import { combineReducers, Reducer } from "redux";
import addressReducer from "./address";
import codeReducer from "./code";
import orderReducer from "./order";
import pagesReducer from "./pages";
import profileReducer from "./profile";
import storeReducer from "./store";
import testReducer from "./test";
import userReducer from "./user";

const rootReducer: Reducer<any> = combineReducers({
  store: storeReducer,
  user: userReducer,
  orders: orderReducer,
  code: codeReducer,
  addresses: addressReducer,
  pages: pagesReducer,
  profile: profileReducer,
  test: testReducer,
});

export default rootReducer;
