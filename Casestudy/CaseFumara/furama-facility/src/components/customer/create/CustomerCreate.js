import "./CustomerCreate.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {useEffect, useState} from "react";
import {customerTypeApi, genderApi} from "../../../service/api_connection";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {customerValidation} from "../../../service/Validation";
export default function CustomerCreate(){
    const [genderList, setGenderList] = useState([]);
    const [customerType, setCustomerType] = useState([]);
    const navigate = useNavigate();

    const validation = customerValidation;

    useEffect(() => {
        const dataGender = async () => {
            try {
                const data = await genderApi();
                setGenderList(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        const dataType = async () => {
            try {
                const data = await customerTypeApi();
                setCustomerType(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        dataGender();
        dataType();
    }, []);

    const handleSubmit = async (values) => {
        try {
            const response = await axios.post('http://localhost:8080/api/create/customer/', values);
            navigate("/customer");
        } catch (err) {
            console.log(err);
        }
    }
    const initialValue = {
        name: "",
        birthday: "",
        idCard: "",
        phone: "",
        email: "",
        address: "",
        gender: {
            id: 0
        },
        customerType: {
            id: 0
        }
    }

    if (genderList.length == 0 || customerType.length == 0) {
        return null;
    } else {
        return (
            <div>
                <h1 className="titleCreateForm">Create New Customer</h1>
                <Formik
                    initialValues={initialValue}
                    onSubmit={handleSubmit}
                    validationSchema={validation}>
                    <Form className="formCustomerCreate color1 filler">
                        <div className="inputCreateCustomer">
                            <label htmlFor="name">Customer Name</label><br/>
                            <Field type="text" name="name"/><br/>
                            <ErrorMessage name="name" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="birthday">Customer Birthday</label><br/>
                            <Field type="date" name="birthday"/><br/>
                            <ErrorMessage name="birthday" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="idCard">Citizen Identification</label><br/>
                            <Field type="text" name="idCard"/><br/>
                            <ErrorMessage name="idCard" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="phone">Telephone Number</label><br/>
                            <Field type="text" name="phone"/><br/>
                            <ErrorMessage name="phone" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="email">Email Address</label><br/>
                            <Field type="text" name="email"/><br/>
                            <ErrorMessage name="email" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="address">Customer Address</label><br/>
                            <Field type="text" name="address"/><br/>
                            <ErrorMessage name="address" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="gender.id">Customer Gender</label><br/>
                            <Field as="select" name="gender.id">
                                <option value="0" label="--select--"></option>
                                {genderList.map((e) => {
                                    return <option value={e.id} label={e.genderName}></option>
                                })}
                            </Field>
                            <ErrorMessage name="gender.id" component="small"/>
                            <br/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="customerType.id">Customer Type</label><br/>
                            <Field as="select" name="customerType.id">
                                <option value="0" label="--select--"></option>
                                {customerType.map((e) => {
                                    return <option value={e.id} label={e.typeName}></option>
                                })}
                            </Field>
                            <ErrorMessage name="customerType.id" component="small"/>
                            <br/>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="buttonFormCreate">
                            <div></div>
                            <button className="filler hover color3" type="button"
                                    onClick={() => {
                                        navigate("/customer")
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