import {useEffect, useState} from "react";
import {CreateProduct, DeleteProduct, EditProduct, GetProduct, GetProductType} from "../service/ApiConnection";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Validate} from "../service/Validation";

export default function Vegatable() {
    const [searchName, setSearchName] = useState("");
    const [searchType, setSearchType] = useState("");
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState();

    const [products, setProducts] = useState();
    const [types, setTypes] = useState();

    const [isModal, setIsModal] = useState(false);
    const [idDelete, setIdDelete] = useState(-1);
    const [idEdit, setIdEdit] = useState(-1);
    const [nameDelete, setNameDelete] = useState("");
    const [isCreate, setIsCreate] = useState(false);

    const getProducts = async () => {
        const data = await GetProduct(searchName, searchType, page);
        setProducts(data.data);
        setMaxPage(Math.ceil(data.headers["x-total-count"] / 5));
    }
    const getType = async () => {
        const data = await GetProductType();
        setTypes(data);
    }
    const handleDel = async () => {
        try {
            const data = await DeleteProduct(idDelete);
            toast.success("Xóa thành công")
            setIsModal(false);
            setIdDelete(-1);
        } catch (e) {
            toast.error("Xóa không được gòi");
        }

    }

    useEffect(() => {
        getProducts();
    }, [page,idDelete,searchName,searchType,isCreate,idEdit])
    useEffect(() => {
        getType();
    }, []);

    const initialValue = {
        id: "",
        code: "",
        name: "",
        unit: "",
        price: 0,
        date: "",
        type: {
            id: 0
        }
    }

    const handleSubmit = async (value) => {
        let newValue;
        let typeFound = false;
        for (let i = 0; i < types.length; i++) {
            let currentType = types[0];
            if (value.type.id == currentType.id) {
                newValue = {
                    ...value,
                    type: currentType
                }
                typeFound = true;
                break;
            }
        }
        if (typeFound) {
            const data = await CreateProduct(newValue);
            toast.success("Tạo sản phẩm thành công")
            setIsCreate(false);
        } else {
            toast.error("Ông nào hack đấy")
        }
    }

    const handleEdit = async (value) => {
        let newValue;
        let typeFound = false;
        for (let i = 0; i < types.length; i++) {
            let currentType = types[0];
            if (value.type.id == currentType.id) {
                newValue = {
                    ...value,
                    type: currentType
                }
                typeFound = true;
                break;
            }
        }
        if (typeFound) {
            const data = await EditProduct(newValue);
            toast.success("Chỉnh sửa sản phẩm thành công")
            setIdEdit(-1);
        } else {
            toast.error("Ông nào hack đấy")
        }
    }

    if (!types) {
        return null;
    } else {
        return (
            <div className="display">

                {isModal &&
                    <div className="modal">
                        <p>Are you sure about delete<br/><span className="targetText">{nameDelete}</span></p>
                        <div className="modalButton">
                            <button className="modalButtonCancel"
                                onClick={() => setIsModal(false)}>Cancel</button>
                            <button className="modalButtonConfirm"
                                onClick={handleDel}>Confirm</button>
                        </div>
                    </div>
                }

                <h2 className="title">CHĂN RAU - BUÔN CỦ - BÁN QUẢ</h2>
                <div className="buttonOption">
                    <button className="buttonAdd" onClick={() => {setIsCreate(true)}}>Thêm mới</button>
                    <select className="searchSelect"
                            onChange={(e) => {setSearchType(e.target.value)}}>
                        <option value="">-- Loại hàng --</option>
                        {types.map((e) => {
                            return (
                                <option value={e.name} label={e.name}/>
                            )
                        })}
                    </select>

                    <input onChange={(e) => {setSearchName(e.target.value)}}
                        className="searchInput"
                        placeholder="Tìm kiếm theo tên"/>
                </div>

                <div className="table">
                    <div className="tableGrid headerLine">
                        <div>Mã hàng</div>
                        <div>Tên hàng</div>
                        <div>Đơn vị</div>
                        <div>Giá cả</div>
                        <div>Ngày thu hoạch</div>
                        <div>Loại hàng</div>
                        <div></div>
                        <div></div>
                    </div>
                    {isCreate &&
                        <Formik
                            initialValues={initialValue}
                            onSubmit={handleSubmit}
                            validationSchema={Validate}>
                            <Form className="tableGrid formAdd">
                                <div>
                                    <Field name="code" type="text"/><br/>
                                    <ErrorMessage name="code" component="small"/>
                                </div>
                                <div>
                                    <Field name="name" type="text"/><br/>
                                    <ErrorMessage name="name" component="small"/>
                                </div>
                                <div>
                                    <Field name="unit" as="select">
                                        <option value="">--đơn vị--</option>
                                        <option value="kg">kg</option>
                                        <option value="bó">bó</option>
                                    </Field>
                                    <ErrorMessage name="unit" component="small"/>
                                </div>
                                <div>
                                    <Field name="price" type="number"/><br/>
                                    <ErrorMessage name="price" component="small"/>
                                </div>
                                <div>
                                    <Field name="date" type="date"/><br/>
                                    <ErrorMessage name="date" component="small"/>
                                </div>
                                <div>

                                    <Field name="type.id" as="select">
                                        <option value="0" label="--loại hàng--"/>
                                        {
                                            types.map((e) => {
                                                return (
                                                    <option value={e.id}>{e.name}</option>
                                                )
                                            })
                                        }
                                    </Field>
                                    <ErrorMessage name="type.id" component="small"/>
                                </div>
                                <div>
                                    <button className="buttonAddConfirm">Thêm</button>
                                </div>
                                <div>

                                    <button className="buttonCancel"
                                            onClick={() => {setIsCreate(false)}}>Hủy</button>
                                </div>
                            </Form>
                        </Formik>
                    }
                    {
                        products && products.map((e, index) => {
                            if (idEdit != e.id) {
                                return (
                                    <div className={`tableGrid ${index % 2 == 0 ? 'gridEven' : 'gridOdd'}`}>
                                        <div>{e.code}</div>
                                        <div>{e.name}</div>
                                        <div>{e.unit}</div>
                                        <div>{e.price}</div>
                                        <div>{e.date}</div>
                                        <div>{e.type.name}</div>
                                        <div>
                                            <button
                                                onClick={() => {setIdEdit(e.id)}}
                                                className="buttonEdit">Sửa</button>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setIsModal(true);
                                                    setIdDelete(e.id);
                                                    setNameDelete(e.name);
                                                }}
                                                className="buttonDel">Xóa</button>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <Formik
                                        initialValues={e}
                                        onSubmit={handleEdit}
                                        validationSchema={Validate}>
                                        <Form className="tableGrid formAdd">
                                            <div>
                                                <Field name="code" type="text"/><br/>
                                                <ErrorMessage name="code" component="small"/>
                                            </div>
                                            <div>
                                                <Field name="name" type="text"/><br/>
                                                <ErrorMessage name="name" component="small"/>
                                            </div>
                                            <div>
                                                <Field name="unit" as="select">
                                                    <option value="">--đơn vị--</option>
                                                    <option value="kg">kg</option>
                                                    <option value="bó">bó</option>
                                                </Field>
                                                <ErrorMessage name="unit" component="small"/>
                                            </div>
                                            <div>
                                                <Field name="price" type="number"/><br/>
                                                <ErrorMessage name="price" component="small"/>
                                            </div>
                                            <div>
                                                <Field name="date" type="date"/><br/>
                                                <ErrorMessage name="date" component="small"/>
                                            </div>
                                            <div>

                                                <Field name="type.id" as="select">
                                                    <option value="0" label="--loại hàng--"/>
                                                    {
                                                        types.map((e) => {
                                                            return (
                                                                <option value={e.id}>{e.name}</option>
                                                            )
                                                        })
                                                    }
                                                </Field>
                                                <ErrorMessage name="type.id" component="small"/>
                                            </div>
                                            <div>
                                                <button className="buttonAddConfirm">Sửa đổi</button>
                                            </div>
                                            <div>

                                                <button className="buttonCancel"
                                                        onClick={() => {setIdEdit(-1)}}>Hủy</button>
                                            </div>
                                        </Form>
                                    </Formik>
                                )
                            }
                        })
                    }
                </div>

                {
                    maxPage ?
                    <div className="page">
                        {page != 1 && <button className="prev"
                                              onClick={() => {setPage(page - 1)}}>Trước</button>}
                        <div className="pageDisplay">{page + "/" + maxPage}</div>
                        {page != maxPage && <button className="next"
                                                    onClick={() => {setPage(page + 1)}}>Sau</button>}
                    </div> : <h3>Không kiếm ra bạn ới (_ _!!)</h3>
                }
            </div>
            )

    }


}