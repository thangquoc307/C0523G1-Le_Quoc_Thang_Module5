import {useState} from "react";
import {Formik} from "formik";

export default function ContactForm(){
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\++[0-9]{10,12}$/
    };
    const [form, setForm] = useState({});
    function handleChange(event) {
        setForm({
            ...form, [event.target.name]: event.target.value
        });
    }
    function handleValidate() {
        const errors = {};
        if (!form.email) {
            errors.email = "Email không để trống";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Email không hợp lệ";
        }
        if (!form.phone) {
            errors.phone = "Số điện thoại không để trống";
        } else if (!REGEX.phone.test(form.phone)){
            errors.phone = "Số điện thoại không hợp lệ";
        }
        if (!form.name) {
            errors.name = "Tên không để trống";
        }
        return errors;
    }
    function handleSubmit(){
        alert("Add contact successfully!!!");
    }
    return(
        <div>
            <h1>Contact Form</h1>
            <Formik initialValues={form} onSubmit={handleSubmit} validate={handleValidate}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
                            <label>Name</label>
                            <input
                                type={"text"}
                                name={"name"}
                                value={form.name || ""}
                                onChange={handleChange}
                            />
                            <p className={'error'}>{errors.name}</p>
                        </div>

                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input
                                type={"email"}
                                name={"email"}
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            <p className={'error'}>{errors.email}</p>
                        </div>

                        <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
                            <label>phone</label>
                            <input
                                type={"text"}
                                name={"phone"}
                                value={form.phone || ""}
                                onChange={handleChange}
                            />
                            <p className={'error'}>{errors.phone}</p>
                        </div>

                        <div className={'custom-input'}>
                            <label>Message</label>
                            <textarea/>
                        </div>
                        <button type={"submit"}>Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}