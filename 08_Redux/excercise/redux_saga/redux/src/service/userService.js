import axios from "axios";
const URLBASE = "https://jsonplaceholder.typicode.com/users";
export const getAll = async () => {
    try {
        let temp = await axios.get(URLBASE);
        return temp.data;
    } catch (e) {}
};

export const deleteUser = async (id) => {
    try {
        let temp = await axios.delete(URLBASE + "/" + id);
        console.log(temp);
        return temp.status;
    } catch (e) {}
};