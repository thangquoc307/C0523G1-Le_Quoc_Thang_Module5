import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducers} from "./reducers/RootReducers";

const initStore  = {};
const middleware = [thunk];
const store = createStore(rootReducers, initStore, applyMiddleware(...middleware));

export default store;