import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ValidationStudent} from "../service/Validation";
import {ClassApi, CreateStudent, EditStudent, StudentDetailApi} from "../service/ApiConnection";

export default function StudentCreate(){
    const [classList, setClassList] = useState();
    const validation = ValidationStudent;
    const navigate = useNavigate();
    const getClassList = async () => {
        const data = await ClassApi();
        setClassList(data);
    }
    useEffect(() => {
        getClassList();
    }, []);

    const handleSubmit = async (value) => {
        const data = await CreateStudent(value);
        if (data == 200){
            alert("ok")
            navigate("/");
        } else {
            alert("toang")
        }

    }
    const initialValue = {
        id: 0,
        class: {
            id: 0,
            className: ""
        }
    }
    if (!classList || !validation) {
        return null;
    } else {
        return (
            <>
                <h2>Create Student</h2>
                <Formik
                    initialValues={initialValue}
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