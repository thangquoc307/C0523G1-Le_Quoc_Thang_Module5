import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {customerByIdApi, customerTypeApi, genderApi} from "../../../service/api_connection";
import * as Yup from "yup";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";

export default function CustomerEdit(){
    const {id} = useParams();
    // const customerEditedId = useSelector(state => state.customerEdited.customerEditedId);
    const [dataEdit, setDataEdit] = useState({
        id: 1,
        name: "",
        birthday: "",
        idCard: "",
        phone: "",
        email: "",
        address: "",
        gender: {
            id: 2
        },
        customerType: {
            id: 2
        }
    });

    const [genderList, setGenderList] = useState([]);
    const [customerType, setCustomerType] = useState([]);
    const navigate = useNavigate();

    const validation = Yup.object({
        name: Yup.string()
            .required("Please fill the Name")
            .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)+$/, "Error Format"),
        birthday: Yup.date()
            .required("Please choose the Birthday"),
        idCard: Yup.string()
            .required("Please fill the Id Card")
            .matches(/^[0-9]{9}$/, "Id Card has 9 number"),
        phone: Yup.string()
            .required("Please fill the phone number")
            .matches(/^0[0-9]{9}$/, "The phone start by 0 and has 10 number"),
        email: Yup.string()
            .required("Please fill the Email")
            .matches(/^.+@.+\..+$/, "Error email format"),
        address: Yup.string()
            .required("Please fill the address"),
        gender: Yup.string()
            .required("Please choose Gender"),
        customerType: Yup.string()
            .required("Please choose Customer Type"),
    })

    // useEffect(async () => {
    //     try {
    //         const data = await customerByIdApi(id);
    //         setDataEdit(data.data);
    //
    //     } catch (err) {
    //         console.log(err)
    //     }
    //     return ;
    // }, []);
    useEffect(() => {
        const dataGender = async () => {
            try {
                const data = await genderApi();
                setGenderList(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        dataGender();
    }, []);
    useEffect(() => {
        const dataType = async () => {
            try {
                const data = await customerTypeApi();
                setCustomerType(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        dataType();
        console.log("ok")
    }, []);
    const locationHref = (link) => {
        navigate(link);
    };
    const handleSubmit = async (values) => {
        const newCustomer = {
            id: dataEdit.id,
            name: values.name,
            birthday: values.birthday,
            idCard: values.idCard,
            phone: values.phone,
            email: values.email,
            address: values.address,
            gender: {
                id: values.gender
            },
            customerType: {
                id: values.customerType
            }
        }
        try {
            const response = await axios.post('http://localhost:8080/api/edit/customer/', newCustomer);
            navigate("/customer");
        } catch (err) {
            console.log(err);
        }
    }

    // if (dataEdit == null) {
    //     return null;
    // }
    return(
        <div>
            <h1 className="titleCreateForm">Create New Customer</h1>
            <Formik
                initialValues={dataEdit}
                onSubmit={handleSubmit}
                validationSchema={validation}>
                <Form className="formCustomerCreate color1 filler">
                    <div className="inputCreateCustomer">
                        <label htmlFor="name">Customer Name</label><br/>
                        <Field type="text" id="name" name="name" value={dataEdit.name}/><br/>
                        <ErrorMessage name="name" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="birthday">Customer Birthday</label><br/>
                        <Field type="date" id="birthday" name="birthday"  value={dataEdit.birthday}/><br/>
                        <ErrorMessage name="birthday" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="idCard">Citizen Identification</label><br/>
                        <Field type="text" id="idCard" name="idCard"  value={dataEdit.idCard}/><br/>
                        <ErrorMessage name="idCard" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="phone">Telephone Number</label><br/>
                        <Field type="text" id="phone" name="phone"  value={dataEdit.phone}/><br/>
                        <ErrorMessage name="phone" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="email">Email Address</label><br/>
                        <Field type="text" id="email" name="email"  value={dataEdit.email}/><br/>
                        <ErrorMessage name="email" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="address">Customer Address</label><br/>
                        <Field type="text" id="address" name="address"  value={dataEdit.address}/><br/>
                        <ErrorMessage name="address" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="gender">Customer Gender</label><br/>
                        <Field as="select" id="gender" name="gender"  value={dataEdit.gender.id}>
                            <option value="" label="--select--" selected={true}></option>
                            {genderList.map((e) => {
                                return <option value={e.id} label={e.genderName}></option>
                            })}
                        </Field>
                        <ErrorMessage name="gender" component="small" />
                        <br/>
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="customerType">Customer Type</label><br/>
                        <Field as="select" id="customerType" name="customerType" value={dataEdit.customerType.id}>
                            <option value="" label="--select--" selected={true}></option>
                            {customerType.map((e) => {
                                return <option value={e.id} label={e.typeName}></option>
                            })}
                        </Field>
                        <ErrorMessage name="customerType" component="small" />
                        <br/>
                    </div>

                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="buttonFormCreate">
                        <div></div>
                        <button className="filler hover color3" type="button"
                                onClick={() => {locationHref("/customer")}}>Back</button>
                        <button className="filler hover color4" type="submit">Submit</button>
                        <Link to="/customer">back</Link>
                    </div>

                </Form>
            </Formik>

        </div>
    )
}