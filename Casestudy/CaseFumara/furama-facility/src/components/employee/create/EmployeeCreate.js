import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from "formik";
import {useEffect, useState} from "react";
import {departmentApi, educationApi, positionApi} from "../../../service/api_connection";
import {useNavigate} from "react-router-dom";
import axios from "axios";
export default function EmployeeCreate(){
    const [education, setEducation] = useState([]);
    const [position, setPosition] = useState([]);
    const [department, setDepartment] = useState([]);
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
        salary: Yup.number()
            .required("Please enter the Salary")
            .min(5000000, "The salary over than 5,000,000"),
        education: Yup.number()
            .min(1,"Please choose Education"),
        position: Yup.number()
            .min(1,"Please choose Position"),
        department: Yup.number()
            .min(1,"Please choose Department"),
    })
    const dataEducation = async () => {
        try {
            const data = await educationApi();
            setEducation(data.data);
        } catch (err) {
            console.log(err);
        }
    }
    const dataPosition = async () => {
        try {
            const data = await positionApi();
            setPosition(data.data);
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }
    const dataDepartment = async () => {
        try {
            const data = await departmentApi();
            setDepartment(data.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        dataEducation();
        dataPosition();
        dataDepartment();
    }, []);

    const handleSubmit = async (values) => {
        const newEmployee = {
            name: values.name,
            birthday: values.birthday,
            idCard: values.idCard,
            phone: values.phone,
            email: values.email,
            salary: values.salary,
            education: {
                id: values.education
            },
            position: {
                id: values.position
            },
            department: {
                id: values.department
            }
        }
        try {
            const response = await axios.post('http://localhost:8080/api/create/employee/', newEmployee);
            navigate("/employee");
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
        salary: 0,
        education: 0,
        position: 0,
        department: 0
    }
    if (position.length == 0 || education.length == 0 || department.length == 0) {
        return null;
    } else {
        return (
            <div>
                <h1 className="titleCreateForm">Create New Employee</h1>
                <Formik
                    initialValues={initialValue}
                    onSubmit={handleSubmit}
                    validationSchema={validation}>
                    <Form className="formCustomerCreate color1 filler">
                        <div className="inputCreateCustomer">
                            <label htmlFor="name">Employee Name</label><br/>
                            <Field type="text" name="name"/><br/>
                            <ErrorMessage name="name" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="birthday">Employee Birthday</label><br/>
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
                            <label htmlFor="salary">Employee Salary</label><br/>
                            <Field type="text" name="salary"/><br/>
                            <ErrorMessage name="salary" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="education">Employee Education</label><br/>
                            <Field as="select" name="education">
                                <option value="0" label="--select--" selected={true}></option>
                                {education.map((e) => {
                                    return <option value={e.id} label={e.educationName}></option>
                                })}
                            </Field>
                            <ErrorMessage name="education" component="small"/>
                            <br/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="position">Employee Position</label><br/>
                            <Field as="select" name="position">
                                <option value="0" label="--select--" selected={true}></option>
                                {position.map((e) => {
                                    return <option value={e.id} label={e.positionName}></option>
                                })}
                            </Field>
                            <ErrorMessage name="position" component="small"/>
                            <br/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="department">Employee Department</label><br/>
                            <Field as="select" name="department">
                                <option value="0" label="--select--" selected={true}></option>
                                {department.map((e) => {
                                    return <option value={e.id} label={e.departmentName}></option>
                                })}
                            </Field>
                            <ErrorMessage name="department" component="small"/>
                            <br/>
                        </div>

                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="buttonFormCreate">
                            <div></div>
                            <button className="filler hover color3" type="button"
                                    onClick={() => {
                                        navigate("/employee")
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