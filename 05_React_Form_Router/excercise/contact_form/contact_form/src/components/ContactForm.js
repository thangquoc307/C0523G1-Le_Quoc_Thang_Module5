import {useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

export default function ContactForm(){
    const validation = Yup.object({
        email: Yup.string().required("Please fill email")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Error Format"),
        phone: Yup.string().required("Please fill the phone")
            .matches(/^\+?[0-9]{10,12}$/, "Error format")
    })
    function handleSubmit(values){
        console.log(values)
        alert("Add contact successfully!!!");
    }
    return(
        <div>
            <h1>Contact Form</h1>
            <Formik
                initialValues={{email: "", phone: ""}}
                onSubmit={handleSubmit}
                validationSchema={validation}>
                    <Form>
                        <div className="custom-input">
                            <label>Email</label>
                            <Field name="email" type="text"/>
                            <ErrorMessage name="email" component="small"/>
                        </div>
                        <div className="custom-input">
                            <label>Phone</label>
                            <Field name="phone" type="text"/>
                            <ErrorMessage name="phone" component="small"/>
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
            </Formik>
        </div>
    )
}