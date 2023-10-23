import "./FacilityCreate.css";
import {useEffect, useState} from "react";
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from "formik";
import {useNavigate} from "react-router-dom";
import {rentTypeApi, roomTypeApi} from "../../../service/api_connection";
import axios from "axios";
export default function FacilityCreate(){
    const validationVilla = Yup.object({
        name: Yup.string()
            .required("Please fill the Name")
            .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)+$/, "Error Format"),
        area: Yup.number()
            .required("Please fill the Area")
            .min(70, "Building over than 70m2")
            .max(3000, "Building less than 3000m2"),
        price: Yup.number()
            .required("Please fill the Price")
            .min(1000000, "Price over than 1,000,000")
            .max(100000000, "Price less than 100,000,000"),
        capacity: Yup.number()
            .required("Please fill the Capacity")
            .min(2, "Capacity over than 2 persons")
            .max(10, "Capacity less than 10 person"),
        img: Yup.string()
            .required("Please fill the Image Link"),
        level: Yup.number()
            .required("Please fill number of Level")
            .min(1, "Level over than 1")
            .max(10, "Level less than 10"),
        poolArea: Yup.number()
            .required("Please fill the Pool Area")
            .min(20, "Pool Area over than 20 m2")
            .max(1000, "Pool Area less than 1000 m2"),
        rentType: Yup.string()
            .required("Please choose Rent Type"),
        roomType: Yup.string()
            .required("Please choose Room Type"),
    })
    const validationHouse = Yup.object({
        name: Yup.string()
            .required("Please fill the Name")
            .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)+$/, "Error Format"),
        area: Yup.number()
            .required("Please fill the Area")
            .min(70, "Building over than 70m2")
            .max(3000, "Building less than 3000m2"),
        price: Yup.number()
            .required("Please fill the Price")
            .min(1000000, "Price over than 1,000,000")
            .max(100000000, "Price less than 100,000,000"),
        capacity: Yup.number()
            .required("Please fill the Capacity")
            .min(2, "Capacity over than 2 persons")
            .max(10, "Capacity less than 10 person"),
        img: Yup.string()
            .required("Please fill the Image Link"),
        level: Yup.number()
            .required("Please fill number of Level")
            .min(1, "Level over than 1")
            .max(10, "Level less than 10"),
        rentType: Yup.string()
            .required("Please choose Rent Type"),
        roomType: Yup.string()
            .required("Please choose Room Type"),
    })
    const validationRoom = Yup.object({
        name: Yup.string()
            .required("Please fill the Name")
            .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)+$/, "Error Format"),
        area: Yup.number()
            .required("Please fill the Area")
            .min(70, "Building over than 70m2")
            .max(3000, "Building less than 3000m2"),
        price: Yup.number()
            .required("Please fill the Price")
            .min(1000000, "Price over than 1,000,000")
            .max(100000000, "Price less than 100,000,000"),
        capacity: Yup.number()
            .required("Please fill the Capacity")
            .min(2, "Capacity over than 2 persons")
            .max(10, "Capacity less than 10 person"),
        img: Yup.string()
            .required("Please fill the Image Link"),
        rentType: Yup.string()
            .required("Please choose Rent Type"),
    })
    const [rentTypeList, setRentTypeList] = useState([]);
    const [roomTypeList, setRoomTypeList] = useState([]);
    const [formVilla, setFormVilla] = useState(<></>);
    const [formHouse, setFormHouse] = useState(<></>);
    const [formRoom, setFormRoom] = useState(<></>);

    const initialVilla = {
        name: "",
        area: 0,
        price: 0,
        capacity: 0,
        img: "",
        level: 0,
        poolArea: 0,
        rentType: 0,
        roomType: 0
    }
    const initialHouse = {
        name: "",
        area: 0,
        price: 0,
        capacity: 0,
        img: "",
        level: 0,
        rentType: 0
    }
    const initialRoom = {
        name: "",
        area: 0,
        price: 0,
        capacity: 0,
        img: "",
        rentType: 0
    }
    const navigate = useNavigate();
    const [formTitle,setFormTitle] = useState("Create New Villa");
    const [validation, setValidation] = useState(validationVilla);

    const [initialValue, setInitialValue] = useState(initialVilla);
    const dataRentType = async () => {
        try {
            const data = await rentTypeApi();
            setRentTypeList(data.data);
        } catch (err) {
            console.log(err);
        }
    }
    const dataRoomType = async () => {
        try {
            const data = await roomTypeApi();
            setRoomTypeList(data.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(async () => {
        await dataRentType();
        await dataRoomType();
        await setFormVilla(<div className="formInputBuilding">
            <div className="inputCreateBuilding">
                <label htmlFor="name">Building Name</label><br/>
                <Field type="text" name="name" /><br/>
                <ErrorMessage name="name" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="area">Building Area</label><br/>
                <Field type="number" name="area" /><br/>
                <ErrorMessage name="area" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="price">Service Price</label><br/>
                <Field type="number" name="price" /><br/>
                <ErrorMessage name="price" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="capacity">Building Capacity</label><br/>
                <Field type="number" name="capacity" /><br/>
                <ErrorMessage name="capacity" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="img">Image Link</label><br/>
                <Field type="text" name="img" /><br/>
                <ErrorMessage name="img" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="level">Building Level</label><br/>
                <Field type="number" name="level" /><br/>
                <ErrorMessage name="level" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="poolArea">Pool Area</label><br/>
                <Field type="number" name="poolArea" /><br/>
                <ErrorMessage name="poolArea" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="rentType">Rent Type</label><br/>
                <Field as="select" name="rentType">
                    <option value="" label="--select--" selected={true}></option>
                    {rentTypeList.map((e) => {
                        return <option value={e.id} label={e.typeName}></option>
                    })}
                </Field>
                <ErrorMessage name="rentType" component="small" />
                <br/>
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="roomType">Room Type</label><br/>
                <Field as="select" name="roomType">
                    <option value="" label="--select--" selected={true}></option>
                    {roomTypeList.map((e) => {
                        return <option value={e.id} label={e.typeName}></option>
                    })}
                </Field>
                <ErrorMessage name="roomType" component="small" />
                <br/>
            </div>
        </div>);
        await setFormHouse(<div className="formInputBuilding">
            <div className="inputCreateBuilding">
                <label htmlFor="name">Building Name</label><br/>
                <Field type="text" name="name" /><br/>
                <ErrorMessage name="name" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="area">Building Area</label><br/>
                <Field type="number" name="area" /><br/>
                <ErrorMessage name="area" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="price">Service Price</label><br/>
                <Field type="number" name="price" /><br/>
                <ErrorMessage name="price" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="capacity">Building Capacity</label><br/>
                <Field type="number" name="capacity" /><br/>
                <ErrorMessage name="capacity" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="img">Image Link</label><br/>
                <Field type="text" name="img" /><br/>
                <ErrorMessage name="img" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="level">Building Level</label><br/>
                <Field type="number" name="level" /><br/>
                <ErrorMessage name="level" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="rentType">Rent Type</label><br/>
                <Field as="select" name="rentType">
                    <option value="" label="--select--" selected={true}></option>
                    {rentTypeList.map((e) => {
                        return <option value={e.id} label={e.typeName}></option>
                    })}
                </Field>
                <ErrorMessage name="rentType" component="small" />
                <br/>
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="roomType">Room Type</label><br/>
                <Field as="select" name="roomType">
                    <option value="" label="--select--" selected={true}></option>
                    {roomTypeList.map((e) => {
                        return <option value={e.id} label={e.typeName}></option>
                    })}
                </Field>
                <ErrorMessage name="roomType" component="small" />
                <br/>
            </div>
        </div>);
        await setFormRoom(<div className="formInputBuilding">
            <div className="inputCreateBuilding">
                <label htmlFor="name">Building Name</label><br/>
                <Field type="text" name="name" /><br/>
                <ErrorMessage name="name" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="area">Building Area</label><br/>
                <Field type="number" name="area" /><br/>
                <ErrorMessage name="area" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="price">Service Price</label><br/>
                <Field type="number" name="price" /><br/>
                <ErrorMessage name="price" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="capacity">Building Capacity</label><br/>
                <Field type="number" name="capacity" /><br/>
                <ErrorMessage name="capacity" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="img">Image Link</label><br/>
                <Field type="text" name="img" /><br/>
                <ErrorMessage name="img" component="small" />
            </div>
            <div className="inputCreateBuilding">
                <label htmlFor="rentType">Rent Type</label><br/>
                <Field as="select" name="rentType">
                    <option value="" label="--select--" selected={true}></option>
                    {rentTypeList.map((e) => {
                        return <option value={e.id} label={e.typeName}></option>
                    })}
                </Field>
                <ErrorMessage name="rentType" component="small" />
                <br/>
            </div>
        </div>);

    },[]);
    const [formInput, setFormInput] = useState(formVilla);
    const handleForm = (action) => {
        let villaDiv = document.getElementById("villaDiv");
        let houseDiv = document.getElementById("houseDiv");
        let roomDiv = document.getElementById("roomDiv");
        switch (action) {
            case "villa":
                villaDiv.className = "color1";
                houseDiv.className = "hover";
                roomDiv.className = "hover";

                setFormTitle("Create New Villa");
                setFormInput(formVilla);
                setInitialValue(initialVilla);
                break;
            case "house":
                villaDiv.className = "hover";
                houseDiv.className = "color1";
                roomDiv.className = "hover";

                setFormTitle("Create New House");
                setFormInput(formHouse);
                setInitialValue(initialHouse);
                break;
            case "room":
                villaDiv.className = "hover";
                houseDiv.className = "hover";
                roomDiv.className = "color1";

                setFormTitle("Create New Room");
                setFormInput(formRoom);
                setInitialValue(initialRoom);
                break;
        }
    }

    const handleSubmit = async (values) => {
        let newBuilding = {}
        switch (formTitle){
            case "Create New Villa":
                newBuilding = {
                    name: values.name,
                    area: values.area,
                    price: values.price,
                    capacity: values.capacity,
                    img: values.img,
                    level: values.level,
                    poolArea: values.poolArea,
                    rentType: {
                        id: values.rentType
                    },
                    roomType: {
                        id: values.roomType
                    }
                }
                break;
            case "Create New House":
                newBuilding = {
                    name: values.name,
                    area: values.area,
                    price: values.price,
                    capacity: values.capacity,
                    img: values.img,
                    level: values.level,
                    rentType: {
                        id: values.rentType
                    }
                }
                break;
            case "Create New Room":
                newBuilding = {
                    name: values.name,
                    area: values.area,
                    price: values.price,
                    capacity: values.capacity,
                    img: values.img,
                    rentType: {
                        id: values.rentType
                    },
                }
                break;
        }
        try {
            const reponse = await axios.post('http://localhost:8080/api/create/building/', newBuilding);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }
    if (roomTypeList.length == 0 || rentTypeList.length == 0) {
        return null;
    } else {
        return (
            <div>
                <h1 className="titleCreateForm">{formTitle}</h1>
                <Formik
                    initialValues={initialValue}
                    onSubmit={handleSubmit}
                    validationSchema={validation}>
                    <Form className="formBuildCreate color1 filler">
                        <div className="formBuildCreateHeader color3">
                            <div id="villaDiv" className="color1" onClick={() => handleForm("villa")}>Villa</div>
                            <div id="houseDiv" className="hover" onClick={() => handleForm("house")}>House</div>
                            <div id="roomDiv" className="hover" onClick={() => handleForm("room")}>Room</div>
                        </div>
                        {formInput}
                        <div className="buttonFormCreateBuilding">
                            <div></div>
                            <button className="filler hover color3" type="button"
                                    onClick={() => {
                                        navigate("/")
                                    }}>Back
                            </button>
                            <button className="filler hover color4" type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    }
}