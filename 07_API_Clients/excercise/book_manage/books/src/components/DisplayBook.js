import {useEffect, useState} from "react";
import {deleteBook, getAll} from "../service/databaseApi";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import Modal from 'react-modal';

export default function DisplayBook() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const [idDelete, setDeleteId] = useState(-1);
    const alertSuccess = () => toast.success("Delete success!!!");
    const getBook = async () => {
        const reponse = await getAll();
        setBooks(reponse);
        console.log(reponse)
    };
    const handleDelete = async () => {
        const reponse = await deleteBook(idDelete);
        setDeleteId(-1)
        setModalIsOpen(false);
        alertSuccess();
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (id) => {
        setModalIsOpen(true);
        setDeleteId(id);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }
    useEffect(() => {
        getBook();
    },[idDelete])
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
                                <button onClick={() => openModal(e.id)}>delete</button>
                                <button onClick={() => navigate("/edit/book/" + e.id)}>edit</button>
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Delete"
                    >
                        <h2>Are you sure about delete</h2>
                        <button onClick={closeModal}>Close</button>
                        <button onClick={handleDelete}>Delete</button>
                    </Modal>
                </div>
            </>
        )
    }
}