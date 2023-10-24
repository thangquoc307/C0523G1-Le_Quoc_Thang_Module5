import {useEffect, useState} from "react";
import {deleteBook, getAll} from "../service/databaseApi";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export default function DisplayBook() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    let count = 0;
    const alertSuccess = () => toast.success("Delete success!!!");
    const getBook = async () => {
        const reponse = await getAll();
        setBooks(reponse);
        console.log(reponse)
    };
    const handleDelete = async (idDel) => {
        const reponse = await deleteBook(idDel);
        alertSuccess();
        count++;
    }

    useEffect(() => {
        getBook();
    },[count])
    if (books.length == 0) {
        return  null;
    } else {
        return (
            <>
                <h2>Books Manage</h2>
                <button onClick={() => navigate("/create")}>+Add</button>
                <table>
                    <thead>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                    </thead>
                    <tbody>
                    {books.map((e, index) => {
                        return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{e.title}</td>
                            <td>{e.quantity}</td>
                            <td>
                                <button onClick={() => navigate("/edit/book/" + e.id)}>edit</button>
                                <button onClick={() => handleDelete(e.id)}>delete</button>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>

            </>
        )
    }
}