import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'

export default function CreateBook(){
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [validateTitle, setValidateTitle] = useState("");
    const [validateQuantity, setValidateQuantity] = useState("");
    const validation = Yup.object({
        title: Yup.string.required("Title không được để trống"),
        quantity: Yup.string.required("Quantity không được để trống")
            .matches(/^[0-9]+$/, "Số lượng không hợp lệ")
    });
    function handSubmit() {

    }

    const mainpage = () => {navigate("/")};

    return (
        <>
            <button onClick={mainpage}>Cum bách men bây</button>
            <Formik
                initialValues={{name:'', quantity:0}}
                onSubmit={handSubmit}
                validate={validation}>
                <label htmlFor="title">Title:</label>
                <Field type={}></Field>
            </Formik>
            <form>
                <h4>Tilte</h4>
                <input type={"text"}/>
                <span>{validateTitle}</span>
                <br/>
                <br/>
                <h4>Quantity</h4>
                <input type={"number"}/>
                <span>{validateQuantity}</span>
                <br/>
                <br/>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}