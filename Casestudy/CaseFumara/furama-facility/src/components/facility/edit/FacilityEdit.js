import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {facilityValidation} from "../../../service/Validation";
import {buildingByIdApi, rentTypeApi, roomTypeApi} from "../../../service/api_connection";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export default function FacilityEdit() {
    const {id} = useParams();
    const [buildingSelect,setBuildingSelect] = useState(1);
    const [dataEdit, setDataEdit] = useState();
    // const [validation, setValidation] = useState();
    const validation = Yup.object({
        name: Yup.string()
            .required("Please fill the Name")
            .matches(/^[A-Z]*( [A-Z]*)+$/, "Error Format"),
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
        level: (buildingSelect == 1 || buildingSelect == 2) ?
            Yup.number()
                .required("Please fill number of Level")
                .min(1, "Level over than 1")
                .max(10, "Level less than 10") :
            Yup.number().notRequired(),
        poolArea: (buildingSelect == 1) ?
            Yup.number()
                .required("Please fill the Pool Area")
                .min(20, "Pool Area over than 20 m2")
                .max(1000, "Pool Area less than 1000 m2") :
            Yup.number().notRequired(),
        rentType: Yup.object().shape({
            id : Yup.number().min(1,"Please choose Rent Type")
        }),
        roomType: (buildingSelect == 1 || buildingSelect == 2) ?
            Yup.object().shape({
                id: Yup.number().min(1,"Please choose Room Type")
            }) : Yup.object().notRequired(),
    })

    const [rentTypeList, setRentTypeList] = useState([]);
    const [roomTypeList, setRoomTypeList] = useState([]);
    const navigate = useNavigate();
    const getDataEdit = async () => {
        try {
            const data = await buildingByIdApi(id);
            await setDataEdit(data.data);
            if (data.data.poolArea) {
                await setBuildingSelect(1);
            } else if (data.data.level) {
                await setBuildingSelect(2);
            } else {
                await setBuildingSelect(3);
            }
            // setValidation(() => {facilityValidation(buildingSelect)});

            // console.log(validation)
        } catch (err) {
            console.log(err);
        }
    }
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
        getDataEdit();
    },[]);

    const handleSubmit = async (values) => {
        try {
            const reponse = await axios.patch('http://localhost:8080/api/edit/building/', values);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    if (rentTypeList.length == 0 || roomTypeList.length == 0 || !dataEdit || !validation) {
        return null;
    } else {
        console.log(validation)
        console.log(rentTypeList)
        console.log(roomTypeList)
        console.log(dataEdit)
        return (
            <div>
                <h1 className="titleCreateForm">Edit Building</h1>
                <Formik
                    initialValues={dataEdit}
                    onSubmit={handleSubmit}
                    validationSchema={validation}>
                    <Form className="formBuildEdit color1 filler">
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