import { combineReducers } from "redux";
import { countReducer } from "./count/reducer.js"

export const rootReducers = combineReducers({
  count: countReducer
}) 