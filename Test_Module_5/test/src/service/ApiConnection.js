import axios from "axios";

export const StudentApi = async () => {
    try {
        const data = await axios.get("http://localhost:3000/student");
        return data.data;
    } catch (e) {
        console.log(e);
    }
}
export const ClassApi = async () => {
    try {
        const data = await axios.get("http://localhost:3000/class");
        return data.data;
    } catch (e) {
        console.log(e);
    }
}
export const StudentDetailApi = async (id) => {
    try {
        const data = await axios.get("http://localhost:3000/student/" + id);
        return data.data;
    } catch (e) {
        console.log(e);
    }
}
export const CreateStudent = async (value) => {
    try {
        const data = await axios.post("http://localhost:3000/student/", value);
        return data.status;
    } catch (e) {
        console.log(e);
    }
}
export const EditStudent = async (value) => {
    try {
        const data = await axios.patch("http://localhost:3000/student/" + value.id, value);
        return data.status;
    } catch (e) {
        console.log(e);
    }
}