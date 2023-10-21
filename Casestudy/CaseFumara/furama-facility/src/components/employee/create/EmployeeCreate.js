import "./EmployeeCreate.css";
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from "formik";
import {useEffect, useState} from "react";
import {departmentApi, educationApi, employeeApi, positionApi} from "../../../service/api_connection";
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
        education: Yup.string()
            .required("Please choose Education"),
        position: Yup.string()
            .required("Please choose Position"),
        department: Yup.string()
            .required("Please choose Department"),
    })

    useEffect(() => {
        const dataEducation = async () => {
            try {
                const data = await educationApi();
                setEducation(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        dataEducation();
    }, []);
    useEffect(() => {
        const dataPosition = async () => {
            try {
                const data = await positionApi();
                setPosition(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        dataPosition();
    }, []);
    useEffect(() => {
        const dataDepartment = async () => {
            try {
                const data = await departmentApi();
                setDepartment(data.data);
            } catch (err) {
                console.log(err);
            }
        }
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
        console.log(newEmployee)
        try {
            const response = await axios.post('http://localhost:8080/api/create/employee/', newEmployee);
            navigate("/employee");
        } catch (err) {
            console.log(err);
        }
    }
    const locationHref = (link) => {
        navigate(link);
    }
    return(
        <div>
            <h1 className="titleCreateForm">Create New Employee</h1>
            <Formik
                initialValues={{name: ''}}
                onSubmit={handleSubmit}
                validationSchema={validation}>
                <Form className="formCustomerCreate color1 filler">
                    <div className="inputCreateCustomer">
                        <label htmlFor="name">Employee Name</label><br/>
                        <Field type="text" id="name" name="name" /><br/>
                        <ErrorMessage name="name" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="birthday">Employee Birthday</label><br/>
                        <Field type="date" id="birthday" name="birthday" /><br/>
                        <ErrorMessage name="birthday" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="idCard">Citizen Identification</label><br/>
                        <Field type="text" id="idCard" name="idCard" /><br/>
                        <ErrorMessage name="idCard" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="phone">Telephone Number</label><br/>
                        <Field type="text" id="phone" name="phone" /><br/>
                        <ErrorMessage name="phone" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="email">Email Address</label><br/>
                        <Field type="text" id="email" name="email" /><br/>
                        <ErrorMessage name="email" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="salary">Employee Salary</label><br/>
                        <Field type="text" id="salary" name="salary" /><br/>
                        <ErrorMessage name="salary" component="small" />
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="education">Employee Education</label><br/>
                        <Field as="select" id="education" name="education">
                            {education.map((e) => {
                                return <option value={e.id} label={e.educationName}></option>
                            })}
                        </Field>
                        <br/>
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="position">Employee Position</label><br/>
                        <Field as="select" id="position" name="position">
                            {position.map((e) => {
                                return <option value={e.id} label={e.positionName}></option>
                            })}
                        </Field>
                        <br/>
                    </div>
                    <div className="inputCreateCustomer">
                        <label htmlFor="department">Employee Department</label><br/>
                        <Field as="select" id="department" name="department">
                            {department.map((e) => {
                                return <option value={e.id} label={e.departmentName}></option>
                            })}
                        </Field>
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
                                onClick={() => {locationHref("/employee")}}>Back</button>
                        <button className="filler hover color4" type="submit">Submit</button>
                    </div>

                </Form>
            </Formik>

        </div>
    )
}