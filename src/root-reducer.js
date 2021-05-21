import { combineReducers } from "redux";
import { countReducer } from "./count/reducer.js"
import { multiplyReducer } from "./multiply/reducer.js";

export const rootReducers = combineReducers({
  count: countReducer,
  multiply: multiplyReducer
}) 