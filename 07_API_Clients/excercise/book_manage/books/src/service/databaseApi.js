import axios from "axios";
export const getAll = async () => {
    try {
        const reponse = await axios.get("http://localhost:3000/books/");
        return reponse.data;
    } catch (e) {
        console.log(e);
    }

}
export const getBookById = async (id) => {
    try {
        const reponse = await axios.get("http://localhost:3000/books/" + id);
        return reponse.data;
    } catch (e) {
        console.log(e);
    }
}
export const createBook = async (value) => {
    try {
        const reponse = await axios.post("http://localhost:3000/books/", value);
    } catch (e) {
        console.log(e);
    }
}
export const editBook = async (value) => {
    try {
        const reponse = await axios.put("http://localhost:3000/books/" + value.id, value);
    } catch (e) {
        console.log(e);
    }
}
export const deleteBook = async (id) => {
    try {
        const reponse = await axios.delete("http://localhost:3000/books/" + id);
    } catch (e) {
        console.log(e);
    }
}