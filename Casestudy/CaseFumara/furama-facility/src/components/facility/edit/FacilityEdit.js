import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {facilityValidation} from "../../../service/Validation";
import {buildingByIdApi, rentTypeApi, roomTypeApi} from "../../../service/api_connection";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";

export default function FacilityEdit() {
    const {id} = useParams();
    const [buildingSelect,setBuildingSelect] = useState(1);
    const [dataEdit, setDataEdit] = useState();
    const [validation, setValidation] = useState();
    const [rentTypeList, setRentTypeList] = useState([]);
    const [roomTypeList, setRoomTypeList] = useState([]);
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState();
    const firebaseConfig = {
        apiKey: "AIzaSyCdVT5o76hLZM1RkcEtDeJEfCuYlDK-nEg",
        authDomain: "thangquocproject.firebaseapp.com",
        projectId: "thangquocproject",
        storageBucket: "thangquocproject.appspot.com",
        messagingSenderId: "1056348119656",
        appId: "1:1056348119656:web:19639bc4aa441af953d1dd"
    };
    const storage = getStorage(initializeApp(firebaseConfig));

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
            await setValidation(() => facilityValidation(buildingSelect));
            await setImageUrl(data.data.img);

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
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const storageRef = ref(storage, 'images/' + file.name);
                const snapshot = await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(snapshot.ref);
                document.getElementById("imgDisplay").style.backgroundImage = `url("${downloadURL}")`
                setImageUrl(downloadURL);
            } catch (error) {
                console.error("Error uploading image: ", error);
            }
        }
    };
    const handleSubmit = async (values) => {
        let newBuilding = {
            ...values,
            img: imageUrl
        }
        console.log(newBuilding)
        try {
            const reponse = await axios.patch('http://localhost:8080/api/edit/building/', newBuilding);
            toast.success("Edit the Building Success");
            navigate("/");
        } catch (err) {
            toast.error("Edit the Building Fail");
            console.log(err);
        }
    }
    if (rentTypeList.length == 0 || roomTypeList.length == 0 || !dataEdit || !validation || !imageUrl) {
        return null;
    } else {
        return (
            <div>
                <h1 className="titleCreateForm">Edit Building</h1>
                <Formik
                    initialValues={dataEdit}
                    onSubmit={handleSubmit}
                    validationSchema={validation}>
                    <Form className="formBuildEdit color1 filler">
                        <div className="image">
                            <div id="imgDisplay" style={{backgroundImage: `url(${imageUrl})`}}
                                 onClick={() => {
                                document.getElementById("inputImg").click();
                            }}>
                                <input id="inputImg" hidden={true} type="file"
                                       onChange={(event) =>
                                       {handleImageUpload(event)}}/>
                            </div>
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