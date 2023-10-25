import { combineReducers } from "redux";
import usersReducer from "../reducers/UserReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
});