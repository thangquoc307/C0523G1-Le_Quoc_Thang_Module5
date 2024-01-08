import {useNavigate, useParams} from "react-router-dom";
import {EditDetail, GetDetail, GetManufacturer} from "../service/api-Connect";
import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {validation} from "../service/Validation";

export function EditPigs(){
    const {id} = useParams();
    const [dataEdit, setDataEdit] = useState();
    const [nationList, setNationList] = useState();
    const navigate = useNavigate();
    const getDetail = async () => {
        const data = await GetDetail(id);
        setDataEdit(data);
    }
    const getNation = async () => {
        const data = await GetManufacturer();
        setNationList(data);
    }

    useEffect(() => {
        getDetail();
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
        await EditDetail(newvalues);
        toast.success("Edit success");
        navigate("/");
    }

    if (!dataEdit || !nationList) {
        return null;
    } else {
        return (
            <div className="form">
                <h2>Edit {dataEdit.code}</h2>
                <Formik initialValues={dataEdit}
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
                                            return(
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
                                className="buttonDel">Back</button>
                            <button type="submit" className="buttonAdd">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    }
}