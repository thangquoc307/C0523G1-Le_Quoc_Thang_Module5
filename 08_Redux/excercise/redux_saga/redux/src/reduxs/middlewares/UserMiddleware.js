import * as userService from "../../service/userService";
import { DELETE, GET_ALL } from "../Actions";

export const getAll = () => async (dispatch) => {
    const data = await userService.getAll();
    console.log(data);
    dispatch({
        type: GET_ALL,
        payload: data,
    });
};

export const deleteUser = (id) => async (dispatch) => {
    const res = await userService.deleteUser(id);
    dispatch({
        type: DELETE,
        payload: { status: res, id: id },
    });
};