import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CreateProductApi, EditProductApi, ProductDetailApi, TypeApi} from "../service/Connect-Api";
import {Formik, ErrorMessage, Form, Field} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup"

export default function Edit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [productEdit, setProductEdit] = useState();
    const [typeList, setTypeList] = useState();
    const validation = Yup.object({
        code: Yup.string().required("Không bỏ trống")
            .matches(/^PROD-[0-9]{4}$/, "Sai định dạng PROD-XXXX"),
        name: Yup.string().required("Không bỏ trống"),
        type: Yup.object().shape({
            id: Yup.number().min(1, "Cần phải chọn")
        }),
        price: Yup.number().min(1,"Số phải lớn hơn 0")
            .required("Không bỏ trống"),
        quatity: Yup.number().min(1,"Số phải lớn hơn 0")
            .required("Không bỏ trống"),
        date: Yup.date().required("Không bỏ trống")
            .test({
                test: (date) => {
                    const outdate = new Date(date);
                    const now = new Date();
                    return outdate <= now;
                },
                message: "Không được lớn hơn ngày hiện tại"
            })
    })
    const getProduct = async () => {
        try {
            const data = await ProductDetailApi(id);
            setProductEdit(data)
        } catch (e) {
            console.log(e);
        }
    }
    const getType = async () => {
        try {
            const data = await TypeApi();
            setTypeList(data)
        } catch (e) {
            console.log(e);
        }
    }
    const handleSubmit = async (value) => {
        // let valueId = value.type.id;
        // let newType;
        // for (let i = 0; i < typeList.length; i++){
        //     let typeId = typeList[i].id;
        //     if (typeId == valueId){
        //         newType = typeList[i];
        //     }
        // }
        // let newValue = {
        //     ...value,
        //     type: newType
        // }
        // let data = await EditProductApi(newValue);
        let data = await EditProductApi(value);
        toast.success("Sửa thành công");
        navigate("/");
    }
    useEffect(() => {
        getType();
        getProduct();
    },[]);

    if (!typeList || !productEdit) {return null}
    else {
        return (
            <Formik
                initialValues={productEdit}
                onSubmit={handleSubmit}
                validationSchema={validation}
            >
                <Form>
                    <div className="form">
                        <h2>Sửa sản phẩm : {productEdit.name}</h2>
                        <table className="formTable">
                            <tr>
                                <td>Mã sản phẩm</td>
                                <td>
                                    <Field name={"code"} type={"text"}/>
                                    <ErrorMessage name={"code"} component={"small"}></ErrorMessage>
                                </td>
                            </tr>
                            <tr>
                                <td>Tên sản phẩm</td>
                                <td>
                                    <Field name={"name"} type={"text"}/>
                                    <ErrorMessage name={"name"} component={"small"}></ErrorMessage>
                                </td>
                            </tr>
                            <tr>
                                <td>Thể loại</td>
                                <td>
                                    <Field name={"pharmacyType.id"} as={"select"}>
                                        <option value={0}>--Chọn thể loại--</option>
                                        {typeList.map((e) => {
                                            return(
                                                <option value={e.id}>{e.name}</option>
                                            )
                                        })}
                                    </Field>
                                    <ErrorMessage name={"pharmacyType.id"} component={"small"}></ErrorMessage>
                                </td>
                            </tr>
                            <tr>
                                <td>Giá sản phẩm</td>
                                <td>
                                    <Field name={"price"} type={"number"}/>
                                    <ErrorMessage name={"price"} component={"small"}></ErrorMessage>
                                </td>
                            </tr>
                            <tr>
                                <td>Số lượng sản phẩm</td>
                                <td>
                                    <Field name={"quatity"} type={"number"}/>
                                    <ErrorMessage name={"quatity"} component={"small"}></ErrorMessage>
                                </td>
                            </tr>
                            <tr>
                                <td>Ngày nhập sản phẩm</td>
                                <td>
                                    <Field name={"date"} type={"date"}/>
                                    <ErrorMessage name={"date"} component={"small"}></ErrorMessage>
                                </td>
                            </tr>
                        </table>
                        <div className="buttonList">
                            <button
                                onClick={() => {navigate("/")}}
                                type="button" className="buttonDel">Back</button>
                            <button type="submit" className="buttonAdd">Submit</button>
                        </div>
                    </div>
                </Form>
            </Formik>

        )
    }
}