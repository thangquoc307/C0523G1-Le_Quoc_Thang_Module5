import axios from "axios";
export const GetProduct = async (name, type, page) => {
    try {
        const data = await axios.get(
            `http://localhost:8080/product?
            name_like=${name}&type.name_like=${type}&_page=${page}&_limit=5`
        )
        return data;
    } catch (e) {
        console.log(e);
    }
}
export const GetProductType = async () => {
    try {
        const data = await axios.get(`http://localhost:8080/type`)
        return data.data;
    } catch (e) {
        console.log(e);
    }
}
export const GetProductDetail = async (id) => {
    try {
        const data = await axios.get(`http://localhost:8080/product/${id}`)
        return data.data;
    } catch (e) {
        console.log(e);
    }
}
export const CreateProduct = async (value) => {
    try {
        const data = await axios.post(`http://localhost:8080/product/`,value)
    } catch (e) {
        console.log(e);
    }
}
export const EditProduct = async (value) => {
    try {
        const data = await axios.patch(`http://localhost:8080/product/${value.id}`,value)
    } catch (e) {
        console.log(e);
    }
}
export const DeleteProduct = async (id) => {
    try {
        const data = await axios.delete(`http://localhost:8080/product/${id}`)
    } catch (e) {
        console.log(e);
    }
}