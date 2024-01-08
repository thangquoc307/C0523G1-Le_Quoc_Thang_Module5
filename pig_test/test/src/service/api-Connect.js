import axios from "axios";

export const GetPigs = async (page, code, manufacturer) => {
    try {
        const data = await axios.get(
            "http://localhost:8080/product?_page=" + page +
            "&_limit=5&code_like=" + code + "&manufacturer.nation_like=" + manufacturer);
        console.log(data)
        return data;
    } catch (e) {
        console.log(e);
    }
}
export const GetManufacturer = async () => {
    try {
        const data = await axios.get("http://localhost:8080/manufacturer");
        return data.data;
    } catch (e) {
        console.log(e);
    }
}
export const DeletePigs = async (id) => {
    try {
        const data = await axios.delete("http://localhost:8080/product/" + id)
    } catch (e) {
        console.log(e);
    }
}
export const GetDetail = async (id) => {
    try {
        const data = await axios.get("http://localhost:8080/product/" + id)
        return data.data;
    } catch (e) {
        console.log(e);
    }
}
export const EditDetail = async (value) => {
    try {
        const data = await axios.patch
        ("http://localhost:8080/product/" + value.id, value);
    } catch (e) {
        console.log(e);
    }
}
export const CreateDetail = async (value) => {
    try {
        const data = await axios.post("http://localhost:8080/product/", value);
    } catch (e) {
        console.log(e);
    }
}