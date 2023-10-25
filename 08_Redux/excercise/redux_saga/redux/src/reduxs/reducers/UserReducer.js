import { DELETE, GET_ALL } from "../Actions";

const usersReducer = (users = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL:
            return payload;
        case DELETE:
            console.log(payload);
            if (payload.status === 200) {
                console.log(users.filter((value) => value.id !== payload.id));
                return users.filter((value) => value.id !== payload.id);
            }
            return users;
        default:
            return users;
    }
};
export default usersReducer;