import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";

import {rootReducers} from "./root-reducer.js"

const middlewares = [logger];



export const store = createStore(rootReducers, applyMiddleware(...middlewares))