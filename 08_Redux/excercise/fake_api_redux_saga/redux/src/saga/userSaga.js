import axios from "axios";
import {useDispatch} from "react-redux";
import {DELETE_USER, GET_ALL_USER} from "../reduxs/ActionType";
import {getAllUser} from "../service/UserService";

const baseUrl = "https://jsonplaceholder.typicode.com/users/"
export const getUsers = () => async (dispatch) => {
    const data = await getAllUser();
    dispatch({
        type: GET_ALL_USER,
        payload: data
    })
}
export const deleteUser = (id) => async (dispatch) => {
    const res = await deleteUser(id);
    if (res.status == 200){
        dispatch ({
            action: DELETE_USER,
            payload: id
        })
    }
}