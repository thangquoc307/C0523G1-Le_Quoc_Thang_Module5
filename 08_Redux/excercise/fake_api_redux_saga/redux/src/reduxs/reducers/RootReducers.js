import {combineReducers} from "redux";
import {UserReducers} from "./UserReducers";

export const rootReducers = combineReducers({
    users: UserReducers
})