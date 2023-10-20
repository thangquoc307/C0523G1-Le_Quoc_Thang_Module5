import {useState} from "react";
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from "formik";
import "./Create.css"

export default function Create() {
    const createVilla =
        <>
            <div className="titleCreate color3">
                <div className="color1" onClick={() => changeForm(0)}>Villa</div>
                <div className="hover" onClick={() => changeForm(1)}>House</div>
                <div className="hover" onClick={() => changeForm(2)}>Room</div>
                <div></div>
            </div>
            <div className="formInput">
                <div className="inputDiv">
                    <label htmlFor="serviceName">Service Name</label><br/>
                    <Field type="text" id="serviceName" name="serviceName"/><br/>
                    <ErrorMessage name="serviceName" component="small"/><br/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="area">Area</label><br/>
                    <Field type="number" id="area" name="area"/><br/>
                    <ErrorMessage name="area" component="small"/><br/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="price">Price</label><br/>
                    <Field type="number" id="price" name="price"/><br/>
                    <ErrorMessage name="price" component="small"/><br/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="capacity">Capacity</label><br/>
                    <Field type="number" id="capacity" name="capacity"/><br/>
                    <ErrorMessage name="capacity" component="small"/><br/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="rentType">Rent Type</label><br/>
                    <Field as="select" id="rentType" name="rentType">
                        <option value="day" label="Day"></option>
                        <option value="month" label="Month"></option>
                        <option value="year" label="Year"></option>
                    </Field>
                    <br/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="roomType">Room Type</label><br/>
                    <Field as="select" id="roomType" name="roomType">
                        <option value="5 star" label="5 Star"></option>
                        <option value="4 star" label="4 Star"></option>
                        <option value="3 star" label="3 Star"></option>
                        <option value="2 star" label="2 Star"></option>
                        <option value="1 star" label="1 Star"></option>
                    </Field>
                    <br/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="level">Level</label><br/>
                    <Field type="text" id="level" name="level"/><br/>
                    <ErrorMessage name="level" component="small"/><br/>
                </div>
            </div>
        </>
    const createHouse =
        <>
            <div className="titleCreate color3">
                <div className="hover" onClick={() => changeForm(0)}>Villa</div>
                <div className="color1" onClick={() => changeForm(1)}>House</div>
                <div className="hover" onClick={() => changeForm(2)}>Room</div>
                <div></div>
            </div>
        </>
    const createRoom =
        <>
            <div className="titleCreate color3">
                <div className="hover" onClick={() => changeForm(0)}>Villa</div>
                <div className="hover" onClick={() => changeForm(1)}>House</div>
                <div className="color1" onClick={() => changeForm(2)}>Room</div>
                <div></div>
            </div>
        </>

    const [formData, setFormData] = useState(createVilla);
    const validation = Yup.object({
        serviceName: Yup.string()
            .required("Please Fill the Service Name"),
        area: Yup.number()
            .required("Please Fill the Building Area")
            .min(30, "Area more than 30 square meter")
            .max(3000, "Area less than 3000 square meter"),
        price: Yup.number()
            .required("Please Fill the Price")
            .min(1000000, "Price more than 100,000")
            .max(100000000, "Price less than 100,000,000"),
        capacity: Yup.number()
            .required("Please Fill the Capacity")
            .min(1, "Capacity more than 1 person")
            .max(10, "Capacity less than 10 persons"),
        img: Yup.string()
            .required("Please Fill the Image"),
        otherService: Yup.string()
            .required("Please Fill the Other Service"),
        level: Yup.number()
            .required("Please Fill the Level")
            .min(1, "Level more than 1")
            .max(6, "Level less than 6"),
        freeService: Yup.string()
            .required("Please Fill the Free Service"),
        poolArea: Yup.number()
            .required("Please Fill the Pool Area")
            .min(30, "Pool Area more than 30 square meter")
            .max(500, "Poor Area less than 500 square meter")
    })
    const changeForm = (value) => {
        switch (value) {
            case 1:
                setFormData(createHouse)
                break;
            case 2:
                setFormData(createRoom)
                break;
            default:
                setFormData(createVilla)
                break;
        }
        console.log(formData)
    }
    const handSubmit = (values) => {
        alert("viết api create nghe")

    }


    return (
        <div className="formCreate color1">
            <Formik
                initialValues={{name: ''}}
                onSubmit={handSubmit}
                validationSchema={validation}>
                <Form>
                    {formData}
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}