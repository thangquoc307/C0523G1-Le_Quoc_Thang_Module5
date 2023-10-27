import "./FacilityCreate.css";
import {useEffect, useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {useNavigate} from "react-router-dom";
import {rentTypeApi, roomTypeApi} from "../../../service/api_connection";
import axios from "axios";
import {facilityValidation} from "../../../service/Validation";
import {toast} from "react-toastify";
export default function FacilityCreate(){
    const [buildingSelect, setBuildingSelect] = useState(1);
    const [validation, setValidation] = useState(() => facilityValidation(1));
    const [rentTypeList, setRentTypeList] = useState([]);
    const [roomTypeList, setRoomTypeList] = useState([]);
    const navigate = useNavigate();
    const [formTitle,setFormTitle] = useState("Create New Villa");

    const initialValue = {
        name: "",
        area: 0,
        price: 0,
        capacity: 0,
        img: "",
        level: 0,
        poolArea: 0,
        rentType: {
            id: 0
        },
        roomType: {
            id: 0
        }
    };
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
    useEffect(() => {
        dataRentType();
        dataRoomType();
    },[]);
    const handleForm = (action) => {
        let villaDiv = document.getElementById("villaDiv");
        let houseDiv = document.getElementById("houseDiv");
        let roomDiv = document.getElementById("roomDiv");
        switch (action) {
            case "villa":
                villaDiv.className = "color1";
                houseDiv.className = "hover";
                roomDiv.className = "hover";

                setValidation(() => facilityValidation(1));
                setFormTitle("Create New Villa");
                setBuildingSelect(1);

                break;
            case "house":
                villaDiv.className = "hover";
                houseDiv.className = "color1";
                roomDiv.className = "hover";

                setValidation(() => facilityValidation(2));
                setFormTitle("Create New House");
                setBuildingSelect(2);
                break;
            case "room":
                villaDiv.className = "hover";
                houseDiv.className = "hover";
                roomDiv.className = "color1";

                setValidation(() => facilityValidation(3));
                setFormTitle("Create New Room");
                setBuildingSelect(3);
                break;
        }
    }

    const handleSubmit = async (values) => {
        let newBuilding = {}
        switch (buildingSelect){
            case 1:
                newBuilding = {
                    name: values.name,
                    area: values.area,
                    price: values.price,
                    capacity: values.capacity,
                    img: values.img,
                    level: values.level,
                    poolArea: values.poolArea,
                    rentType: {
                        id: +values.rentType
                    },
                    roomType: {
                        id: +values.roomType
                    }
                }
                break;
            case 2:
                newBuilding = {
                    name: values.name,
                    area: values.area,
                    price: values.price,
                    capacity: values.capacity,
                    img: values.img,
                    level: values.level,
                    rentType: {
                        id: +values.rentType
                    }
                }
                break;
            case 3:
                newBuilding = {
                    name: values.name,
                    area: values.area,
                    price: values.price,
                    capacity: values.capacity,
                    img: values.img,
                    rentType: {
                        id: +values.rentType
                    },
                }
                break;
        }
        try {
            const reponse = await axios.post('http://localhost:8080/api/create/building/', newBuilding);
            toast.success("Create New Building Success");
            navigate("/");
        } catch (err) {
            toast.error("Create New Building Fail");
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
                        <div className="formInputBuilding">
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
                            {(buildingSelect == 1 || buildingSelect == 2) && <div className="inputCreateBuilding">
                                <label htmlFor="level">Building Level</label><br/>
                                <Field type="number" name="level" /><br/>
                                <ErrorMessage name="level" component="small" />
                            </div>}
                            {(buildingSelect == 1) && <div className="inputCreateBuilding">
                                <label htmlFor="poolArea">Pool Area</label><br/>
                                <Field type="number" name="poolArea" /><br/>
                                <ErrorMessage name="poolArea" component="small" />
                            </div>}
                            <div className="inputCreateBuilding">
                                <label htmlFor="rentType.id">Rent Type</label><br/>
                                <Field as="select" name="rentType.id">
                                    <option value="0" label="--select--" selected={true}></option>
                                    {rentTypeList.map((e) => {
                                        return <option value={e.id} label={e.typeName}></option>
                                    })}
                                </Field>
                                <ErrorMessage name="rentType.id" component="small" />
                                <br/>
                            </div>
                            {(buildingSelect == 1 || buildingSelect == 2) && <div className="inputCreateBuilding">
                                <label htmlFor="roomType.id">Room Type</label><br/>
                                <Field as="select" name="roomType.id">
                                    <option value="0" label="--select--" selected={true}></option>
                                    {roomTypeList.map((e) => {
                                        return <option value={e.id} label={e.typeName}></option>
                                    })}
                                </Field>
                                <ErrorMessage name="roomType.id" component="small" />
                                <br/>
                            </div>}
                        </div>
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