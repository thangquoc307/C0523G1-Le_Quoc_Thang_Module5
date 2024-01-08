import {useEffect, useState} from "react";
import {DelProductApi, ProductApi, TypeApi} from "../service/Connect-Api";
import {toast} from "react-toastify";
import {useNavigate, useNavigation} from "react-router-dom";
import {dateStandard, moneyStandard} from "../service/Standard";

export default function Products() {
    const [productList, setProductList] = useState([]);
    const [typeList, setTypeList] = useState();
    const [nameSearch, setNameSearch] = useState("");
    const [typeSearch, setTypeSearch] = useState("");
    const [isModal, setIsModal] = useState(false);
    const [idDel, setIdDel] = useState(-1);
    const [nameDel, setNameDel] = useState("");
    const navigate = useNavigate();
    const getProduct = async () => {
        try {
            const data = await ProductApi(nameSearch,typeSearch);
            setProductList(data);
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
    const handleDel = async () => {
        const res = await DelProductApi(idDel);
        toast.success("Xóa thành công");
        setIsModal(false);
        setNameDel("");
        setIdDel(-1);
    }

    useEffect(() => {
        getProduct();
        getType();
    },[nameSearch,typeSearch,isModal]);
    if (!typeList) {return null}
    else {
        return (
            <>
                <div className="display">
                    {isModal &&
                        <div className="modal">
                            <p>Bạn có muốn xóa<br/><span className="targetText">{nameDel}</span></p>
                            <div className="modalButton">
                                <button onClick={() => setIsModal(false)}
                                    className="modalButtonCancel">Hủy</button>
                                <button onClick={handleDel}
                                    className="modalButtonConfirm">Xóa</button>
                            </div>
                        </div>
                    }

                    <h2 className="title">Danh sách sản phẩm</h2>
                    <div className="buttonOption">
                        <button className="buttonAdd"
                                onClick={() => {navigate("/create")}}
                        >Thêm</button>
                        <select onChange={(e) => {setTypeSearch(e.target.value)}}
                            className="searchSelect">
                            <option value="">--Loại sản phẩm--</option>
                            {
                                typeList &&
                                    typeList.map((e) => {
                                        return (
                                            <option value={e.name}>{e.name}</option>
                                        )
                                })
                            }
                        </select>
                        <input
                            className="searchInput"
                            placeholder="name search"
                            onChange={(e) => {setNameSearch(e.target.value)}}
                        />
                    </div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Thể loại</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Ngày nhâp</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {productList.length ?
                            productList.map((e, index) => {
                                return (
                                    <tr key={e.id}>
                                        <td>{index + 1}</td>
                                        <td>{e.code}</td>
                                        <td>{e.name}</td>
                                        <td>{e.pharmacyType.name}</td>
                                        <td>{e.quatity}</td>
                                        <td>{moneyStandard(e.price)}</td>
                                        <td>{dateStandard(e.date)}</td>
                                        <td>
                                            <button className="buttonEdit"
                                            onClick={() => {navigate("/edit/" + e.id)}}>Sửa</button>
                                            <button className="buttonDel"
                                            onClick={() => {
                                                setIdDel(e.id);
                                                setIsModal(true);
                                                setNameDel(e.name);
                                            }}
                                            >Xóa</button>
                                        </td>
                                    </tr>
                                )
                            })

                        : <h3>Không tìm thấy kết quả (_ _!!)</h3>
                        }
                        </tbody>

                    </table>

                </div>
            </>
        )
    }
}