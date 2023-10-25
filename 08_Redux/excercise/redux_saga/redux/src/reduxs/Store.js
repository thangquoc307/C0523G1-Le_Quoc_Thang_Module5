import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/RootReducer";

const initStore = {};
const middleware = [thunk];
const store = createStore(
    rootReducer,
    initStore,
    applyMiddleware(...middleware)
);

export default store;