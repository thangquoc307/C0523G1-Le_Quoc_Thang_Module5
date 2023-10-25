import * as userService from "../../service/UserService"
import {DELETE, GET_ALL} from "../ActionType";

export const getAll = () => async (dispatch) => {
    const data = await userService.getAll();
    dispatch({
        type: GET_ALL,
        payload: data
    })
};

export const remove = (id) => async (dispatch) => {
    const res = await userService.remove(id);
    if (res.status === 200) {
        dispatch({
            action: DELETE,
            payload: id
        })
    }
}