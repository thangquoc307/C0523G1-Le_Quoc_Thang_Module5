import axios from "axios";
export const getAll = async() =>{
    try {
        const respone = await axios.get("https://jsonplaceholder.typicode.com/users");
        return respone.data;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async(id) =>{
    try {
        const respone = await axios.delete("https://jsonplaceholder.typicode.com/users" + id);
        return respone.status;
    } catch (error) {
        console.log(error);
    }
}