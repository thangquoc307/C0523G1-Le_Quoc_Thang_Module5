import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {DeletePigs, GetManufacturer, GetPigs} from "../service/api-Connect";
import {toast} from "react-toastify";

export function Pigs() {
    const navigate = useNavigate();
    const [pigs, setPigs] = useState();
    const [nationList, setNationList] = useState();
    const [maxPage, setMaxPage] = useState();

    const [page, setPage] = useState(1);
    const [code, setCode] = useState("");
    const [manufacturer, setManufacturer] = useState("");

    const [deleteId, setDeleteId] = useState(-1);
    const [deleteName, setDeleteName] = useState("");
    const [isModal, setIsModal] = useState(false);
    const getPigs = async () => {
        const data = await GetPigs(page, code, manufacturer);
        setPigs(data.data);
        let max = Math.ceil(data.headers['x-total-count'] / 5);
        setMaxPage(max);
    }
    const getNation = async () => {
        const data = await GetManufacturer();
        setNationList(data);
    }
    const handleDelete = async () => {
        try {
            await DeletePigs(deleteId);
            setDeleteName("");
            setDeleteId(-1);
            toast.success("Delete success");
            setIsModal(false);
        } catch (e) {
            toast.error("Cannot Delete");
        }

    }
    useEffect(() => {
        getNation();
    }, [])
    useEffect(() => {
        getPigs();
    }, [page, code, manufacturer, deleteId, deleteName]);

    if (!nationList) {
        return null;
    } else {
        return (
            <div className="display">
                {isModal &&
                    <div className="modal">
                        <p>Are you sure about delete<br/><span className="targetText">{deleteName}</span></p>
                        <div className="modalButton">
                            <button onClick={() => {setIsModal(false)}} className="modalButtonCancel">Cancel</button>
                            <button onClick={handleDelete} className="modalButtonConfirm">Confirm</button>
                        </div>
                    </div>
                }
                <h2 className="title">Super Pig Manage</h2>
                <div className="buttonOption">
                    <button className="buttonAdd" onClick={() => {navigate("/create")}}>+Add</button>

                    <select className="searchSelect"
                            onChange={(e) => {setManufacturer(e.target.value)}}>
                        <option value="">--Manufacturer--</option>
                        {nationList.map((e) => {
                            return (
                                <option style={{textAlign: "left"}} value={e.nation}>{e.nation}</option>
                            )
                        })}
                    </select>

                    <input onChange={(e) => {setCode(e.target.value)}}
                           className="searchInput"
                           placeholder="code search"/>

                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Code</th>
                        <th>Enter Date</th>
                        <th>Enter Weight</th>
                        <th>Leave Date</th>
                        <th>Leave Weight</th>
                        <th>Manufacturer</th>
                        <th></th>
                    </tr>
                    </thead>
                    {pigs &&
                        <tbody>
                        {pigs.map((e, index) => {
                            return (
                                <tr key={e.id}>
                                    <td>{index + 1}</td>
                                    <td>{e.code}</td>
                                    <td>{e.enterDate}</td>
                                    <td>{e.enterWeight}</td>
                                    <td>{e.leaseDate}</td>
                                    <td>{e.leaseWeight}</td>
                                    <td>{e.manufacturer.nation}</td>
                                    <td>
                                        <button
                                            onClick={() => {navigate("edit/" + e.id)}}
                                            className="buttonEdit">edit</button>
                                        <button
                                            onClick={() => {
                                                setIsModal(true);
                                                setDeleteId(e.id);
                                                setDeleteName(e.code);
                                            }}
                                            className="buttonDel">delete</button>
                                    </td>
                                </tr>
                                )
                        })}
                        </tbody>
                    }
                </table>
                {maxPage ?
                    <div className="page">
                        {page != 1 && <button
                            className="prev"
                            onClick={() => {setPage(page - 1)}}
                        >Previos</button>}
                        <div className="pageDisplay">{page + "/" + maxPage}</div>
                        {page != maxPage && <button
                            className="next"
                            onClick={() => {setPage(page + 1)}}
                        >Next</button>}
                    </div> :
                    <h3>No result Matching (_ _!!)</h3>
                }
            </div>
        )
    }





}