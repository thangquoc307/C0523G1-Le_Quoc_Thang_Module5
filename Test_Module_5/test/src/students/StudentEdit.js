import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ValidationStudent} from "../service/Validation";
import {ClassApi, EditStudent, StudentDetailApi} from "../service/ApiConnection";

export default function StudentEdit(){
    const {id} = useParams();
    const [dataEdit, setDataEdit] = useState();
    const [classList, setClassList] = useState();
    const validation = ValidationStudent;
    const navigate = useNavigate();
    const getDataEdit = async () => {
        const data = await StudentDetailApi(id);
        setDataEdit(data);
    }
    const getClassList = async () => {
        const data = await ClassApi();
        setClassList(data);
    }
    useEffect(() => {
        getDataEdit();
        getClassList();
    }, []);

    const handleSubmit = async (value) => {

        //chữa cháy
        const classId = value.class.id;
        console.log(classId)
        let classRep = "";
        for (let i = 0; i < classList.length; i++){
            let classObject = classList[i];
            if (classObject.id == classId) {
                classRep = {...classObject}
                break;
            }
        }

        let sValue = {
            ...value,
            class: {
                ...classRep
            }
        }
        console.log(sValue)
        //chữa cháy


        const data = await EditStudent(sValue);
        if (data == 200){
            alert("ok")
            navigate("/");
        } else {
            alert("toang")
        }

    }
    if (!dataEdit || !classList || !validation) {
        return null;
    } else {
        return (
            <>
                <h2>Edit Student</h2>
                <Formik
                    initialValues={dataEdit}
                    onSubmit={handleSubmit}
                    validationSchema={validation}>
                    <Form>
                        <div className="inputDiv">
                            <label htmlFor="name">Student Name</label><br/>
                            <Field name="name" type="text"/><br/>
                            <ErrorMessage name="name" component="small"/>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="class.id">Class</label><br/>
                            <Field as="select" name="class.id"><br/>
                                <option value="0" label="--select class--"/>
                                {classList.map((e) => {
                                    return (
                                        <option value={e.id} label={e.className}/>
                                    )
                                })}
                            </Field><br/>
                            <ErrorMessage name="class.id" component="small"/>
                        </div>
                        <button className="button back" type="button" onClick={() => navigate("/")}>Back</button>
                        <button className="button submit" type="submit">Submit</button>
                    </Form>
                </Formik>
            </>
        )
    }
}