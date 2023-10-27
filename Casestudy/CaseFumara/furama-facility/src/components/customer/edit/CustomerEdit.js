import {useEffect, useState} from "react";
import {customerByIdApi, customerTypeApi, genderApi} from "../../../service/api_connection";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {customerValidation} from "../../../service/Validation";
import {toast} from "react-toastify";

export default function CustomerEdit(){
    const {id} = useParams();
    const [dataEdit, setDataEdit] = useState();

    const [genderList, setGenderList] = useState([]);
    const [customerType, setCustomerType] = useState([]);
    const navigate = useNavigate();

    const validation = customerValidation;
    const getDataEdit = async () => {
        try {
            const data = await customerByIdApi(id);
            setDataEdit(data.data);
        } catch (err) {
            console.log(err)
        }
    }
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

    useEffect(() => {
        getDataEdit();
        dataGender();
        dataType();
    }, []);
    const handleSubmit = async (values) => {
        try {
            const response = await axios.patch('http://localhost:8080/api/edit/customer/', values);
            toast.success("Edit the Customer Success");
            navigate("/customer");
        } catch (err) {
            toast.error("Edit the Customer Fail");
            console.log(err);
        }
    }

    if (dataEdit == null || genderList.length == 0 || customerType.length == 0) {
        return null;
    } else {
        return (
            <div>
                <h1 className="titleCreateForm">Edit Customer</h1>
                <Formik
                    initialValues={dataEdit}
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
                            <Field type="text" id="email" name="email"/><br/>
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