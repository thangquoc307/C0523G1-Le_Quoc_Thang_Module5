import {Formik, Form, Field, ErrorMessage} from "formik";
import {useEffect, useState} from "react";
import {departmentApi, educationApi, positionApi} from "../../../service/api_connection";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {employeeValidation} from "../../../service/Validation";
import {toast} from "react-toastify";
export default function EmployeeCreate(){
    const [education, setEducation] = useState([]);
    const [position, setPosition] = useState([]);
    const [department, setDepartment] = useState([]);
    const navigate = useNavigate();
    const validation = employeeValidation;
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
        try {
            const response = await axios.post('http://localhost:8080/api/create/employee/', values);
            toast.success("Create New Employee Success");
            navigate("/employee");
        } catch (err) {
            toast.error("Create New Employee Fail");
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
        education: {
            id: 0
        },
        position: {
            id: 0
        },
        department: {
            id: 0
        }
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
                            <label htmlFor="education.id">Employee Education</label><br/>
                            <Field as="select" name="education.id">
                                <option value="0" label="--select--"></option>
                                {education.map((e) => {
                                    return <option value={e.id} label={e.educationName}></option>
                                })}
                            </Field>
                            <ErrorMessage name="education.id" component="small"/>
                            <br/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="position.id">Employee Position</label><br/>
                            <Field as="select" name="position.id">
                                <option value="0" label="--select--"></option>
                                {position.map((e) => {
                                    return <option value={e.id} label={e.positionName}></option>
                                })}
                            </Field>
                            <ErrorMessage name="position.id" component="small"/>
                            <br/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="department.id">Employee Department</label><br/>
                            <Field as="select" name="department.id">
                                <option value="0" label="--select--"></option>
                                {department.map((e) => {
                                    return <option value={e.id} label={e.departmentName}></option>
                                })}
                            </Field>
                            <ErrorMessage name="department.id" component="small"/>
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