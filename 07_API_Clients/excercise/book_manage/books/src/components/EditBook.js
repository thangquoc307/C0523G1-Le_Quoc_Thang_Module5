import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {editBook, getBookById} from "../service/databaseApi";
import {Formik,Form,ErrorMessage,Field} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";

export default function EditBook(){
    const {id} = useParams();
    const [bookEdited, setBookEdited] = useState();
    const navigation = useNavigate();
    const alertSuccess = () => toast.success("success!!!")
    const getDataEdit = async () => {
        const reponse = await getBookById(id);
        setBookEdited(reponse);
        console.log(reponse);
    }
    const validation = Yup.object({
        title: Yup.string().required("Please fill the book name"),
        quantity: Yup.number().required("Please enter the book quantity")
                                .min(1, "The quantity over than 0")
    })
    const handleSubmit = async (value) => {
        const reponse = await editBook(value);
        navigation("/");
        alertSuccess();
    }
    useEffect(() => {
        getDataEdit()
    },[])
    if (!bookEdited){
        return null;
    } else {
        return (
            <>
            <h2>Edit {bookEdited.title}</h2>
            <Formik
                initialValues={bookEdited}
                onSubmit={handleSubmit}
                validationSchema={validation}>
                <Form>
                    <div className="input">
                        <label htmlFor="title">Title</label><br/>
                        <Field type="text" name="title"/><br/>
                        <ErrorMessage name="title" component="small"/>
                    </div>
                    <div className="input">
                        <label htmlFor="quantity">Title</label><br/>
                        <Field type="number" name="quantity"/><br/>
                        <ErrorMessage name="quantity" component="small"/>
                    </div>
                    <button type="button" onClick={() => {navigation("/")}}>MainPage</button>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            </>
        )
    }
}