import {useEffect, useState} from "react";
import {buildingApi, contractByIdApi, customerApi, employeeApi} from "../../../service/api_connection";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {contractValidation} from "../../../service/Validation";
export default function ContractEdit(){
    const {id} = useParams();
    const [dataEdit, setDataEdit] = useState();
    const [buildingList, setBuildingList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const [employeeList, setEmployeeList] = useState([]);
    const navigate = useNavigate();
    const validation = contractValidation;
    const getDataEdit = async () => {
        try {
            const data = await contractByIdApi(id);
            console.log(data)
            setDataEdit(data.data);
        } catch (err) {
            console.log(err)
        }
    }
    const getBuilding = async () => {
        const data = await buildingApi();
        setBuildingList(data.data);
        console.log(data)
    }
    const getCustomer = async () => {
        const data = await customerApi();
        setCustomerList(data.data);
        console.log(data)

    }
    const getEmployee = async () => {
        const data = await employeeApi();
        setEmployeeList(data.data);
        console.log(data)

    }
    useEffect(() => {
        getBuilding();
        getEmployee();
        getCustomer();
        getDataEdit();
    },[])
    const handleSubmit = async (values) => {
        try {
            const response = await axios.patch('http://localhost:8080/api/edit/contract/', values);
            navigate("/contract");
        } catch (err) {
            console.log(err);
        }
    }
    if (buildingList.length == 0 || customerList.length == 0 || employeeList.length == 0 || dataEdit == null){
        return null;
    } else {
        return (
            <div>
                <h1 className="titleCreateForm">Edit Contract</h1>
                <Formik
                    initialValues={dataEdit}
                    onSubmit={handleSubmit}
                    validationSchema={validation}>
                    <Form className="formCustomerCreate color1 filler">
                        <div className="inputCreateCustomer">
                            <label htmlFor="code">Contract Code</label><br/>
                            <Field type="text" name="code"/><br/>
                            <ErrorMessage name="code" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="checkInDate">Check In</label><br/>
                            <Field type="date" name="checkInDate"/><br/>
                            <ErrorMessage name="checkInDate" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="checkOutDate">Check Out</label><br/>
                            <Field type="date" name="checkOutDate"/><br/>
                            <ErrorMessage name="checkOutDate" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="deposit">Deposit Money</label><br/>
                            <Field type="number" name="deposit"/><br/>
                            <ErrorMessage name="deposit" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="payment">Payment Money</label><br/>
                            <Field type="number" name="payment"/><br/>
                            <ErrorMessage name="payment" component="small"/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="building.id">Building Rent</label><br/>
                            <Field as="select" name="building.id">
                                <option value="0" label="--select--" selected={true}></option>
                                {buildingList.map((e) => {
                                    return <option value={e.id} label={e.name}></option>
                                })}
                            </Field>
                            <ErrorMessage name="building.id" component="small"/>
                            <br/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="customer.id">Customer</label><br/>
                            <Field as="select" name="customer.id">
                                <option value="0" label="--select--" selected={true}></option>
                                {customerList.map((e) => {
                                    return <option value={e.id} label={e.name}></option>
                                })}
                            </Field>
                            <ErrorMessage name="customer.id" component="small"/>
                            <br/>
                        </div>
                        <div className="inputCreateCustomer">
                            <label htmlFor="employee.id">Employee Sale</label><br/>
                            <Field as="select" name="employee.id">
                                <option value="0" label="--select--" selected={true}></option>
                                {employeeList.map((e) => {
                                    return <option value={e.id} label={e.name}></option>
                                })}
                            </Field>
                            <ErrorMessage name="employee.id" component="small"/>
                            <br/>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="buttonFormCreate">
                            <div></div>
                            <button className="filler hover color3" type="button"
                                    onClick={() => {
                                        navigate("/contract")
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