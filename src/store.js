import {createStore, applyMiddleware, combineReducers} from "redux";
import {logger} from "redux-logger";

const middlewares = [logger];

export const increaseCountAction = (count) => ({type: "INCREASE_BY_1", payload: count})
export const decreaseCountAction = (count) => ({type: "DECREASE_BY_1", payload: count})

const countReducer = (state=0, actionObj) => {
  switch(actionObj.type){
      case "INCREASE_BY_1":
        state = actionObj.payload + 1;
        return state;
      case "DECREASE_BY_1":
        state = actionObj.payload - 1;
        return state;
      default:
        return state;
  }
}

const rootReducers = combineReducers({
  count: countReducer
}) 

export const store = createStore(rootReducers, applyMiddleware(...middlewares))