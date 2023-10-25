import { DELETE, GET_ALL } from "../ActionType";

export const UserReducers = (users = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL:
            return payload;
        case DELETE:
            return users.filter((user) => user.id !== payload);
        default:
            return users;
    }
};