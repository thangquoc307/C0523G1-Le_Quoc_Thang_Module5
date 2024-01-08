import axios from "axios";

export const ProductApi = async (name, type) => {
    try {
        const res = await axios.get(
            // `http://localhost:8080/products?name_like=${name}&type.name_like=${type}&_sort=name`);
            `http://localhost:8080/api/pharmacy?name=${name}&type=${type}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const TypeApi = async () => {
    try {
        const res = await axios.get(
            `http://localhost:8080/api/types/`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const ProductDetailApi = async (id) => {
    try {
        const res = await axios.get(
            `http://localhost:8080/api/pharmacy/${id}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const CreateProductApi = async (value) => {
    try {
        const res = await axios.post(
            `http://localhost:8080/api/create`, value);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const EditProductApi = async (value) => {
    try {
        const res = await axios.patch(
            `http://localhost:8080/api/edit`, value);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const DelProductApi = async (value) => {
    try {
        console.log(111111)
        console.log(value)
        const res = await axios.delete(
            `http://localhost:8080/api/delete/${value}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}