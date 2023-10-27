import axios from "axios";
export const contractApi = async () => {
    try {
        const reponse = await axios.get("http://localhost:8080/api/contract/");
        return reponse;
    } catch (err) {
        console.log(err);
    }
}
export const buildingApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/building/");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const rentTypeApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/renttype/");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const roomTypeApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/roomtype/");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const serviceApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/service/");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const customerApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/customer");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const customerSearchApi = async (searchName, type, page) => {
    try {
        const response = await axios.get("http://localhost:8080/api/customer/search?name=" + searchName + "&type=" + type + "&page=" + page);
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const customerTypeApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/customertype/");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const genderApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/gender/");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const departmentApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/department/");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const educationApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/education/");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const employeeApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/employee/");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const positionApi = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/position/");
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const employeeByIdApi = async (elementId) => {
    try {
        const response = await axios.get("http://localhost:8080/api/employee/" + elementId);
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const customerByIdApi = async (elementId) => {
    try {
        const response = await axios.get("http://localhost:8080/api/customer/" + elementId);
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const buildingByIdApi = async (elementId) => {
    try {
        const response = await axios.get("http://localhost:8080/api/building/" + elementId);
        return response;
    } catch (err) {
        console.log(err);
    }
}
export const contractByIdApi = async (elementId) => {
    try {
        const response = await axios.get("http://localhost:8080/api/contract/" + elementId);
        return response;
    } catch (err) {
        console.log(err);
    }
}
