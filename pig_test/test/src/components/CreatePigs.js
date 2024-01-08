import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {CreateDetail, GetManufacturer} from "../service/api-Connect";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {validation} from "../service/Validation";

export function CreatePigs(){
    const [nationList, setNationList] = useState();
    const navigate = useNavigate();
    const getNation = async () => {
        const data = await GetManufacturer();
        setNationList(data);
    }
    useEffect(() => {
        getNation();
    }, [])
    const handleSubmit = async (values) => {
        let newvalues;
        let manu = values.manufacturer.id;
        for (let i = 0; i < nationList.length; i++){
            if (nationList[i].id == manu) {
                newvalues = {
                    ...values,
                    manufacturer: nationList[i]
                }
            }
        }

        await CreateDetail(newvalues);
        toast.success("Create success");
        navigate("/");
    }

    if (!nationList) {
        return null;
    } else {
        return (
            <div className="form">
                <h2>Create new Pig</h2>
                <Formik initialValues={{
                    "code": "",
                    "enterDate": "",
                    "enterWeight": 0,
                    "leaseDate": "",
                    "leaseWeight": 0,
                    "manufacturer": {
                        "id": 0,
                    }
                }}
                        onSubmit={handleSubmit}
                        validationSchema={validation}
                >
                    <Form>
                        <table className="formTable">
                            <tr>
                                <td>Code</td>
                                <td>
                                    <Field name="code" type="text"/>
                                    <ErrorMessage name="code" component="small"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Enter Date</td>
                                <td>
                                    <Field name="enterDate" type="date"/>
                                    <ErrorMessage name="enterDate" component="small"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Enter Weight</td>
                                <td>
                                    <Field name="enterWeight" type="number"/>
                                    <ErrorMessage name="enterWeight" component="small"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Leave Date</td>
                                <td>
                                    <Field name="leaseDate" type="date"/>
                                    <ErrorMessage name="leaseDate" component="small"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Leave Weight</td>
                                <td>
                                    <Field name="leaseWeight" type="text"/>
                                    <ErrorMessage name="leaseWeight" component="small"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Manufacturer</td>
                                <td>
                                    <Field name="manufacturer.id" as="select">
                                        <option value={0}>--select--</option>
                                        {nationList.map((e) => {
                                            return (
                                                <option key={e.id} value={e.id} label={e.nation}/>
                                            )
                                        })}
                                    </Field>
                                    <ErrorMessage name="manufacturer.id" component="small"/>
                                </td>
                            </tr>
                        </table>
                        <div className="buttonList">
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                className="buttonDel">Back
                            </button>
                            <button type="submit" className="buttonAdd">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    }
}