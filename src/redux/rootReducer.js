import { combineReducers } from "redux";
import { cartReducer } from "./Cart/actionReducer";
import { homeReducer } from "./Home/actionReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  cart: cartReducer
})

export default rootReducer;