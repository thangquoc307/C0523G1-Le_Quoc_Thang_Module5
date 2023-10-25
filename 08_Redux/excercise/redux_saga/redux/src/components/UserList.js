import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAll } from "../reduxs/middlewares/UserMiddleware";
import Modal from 'react-modal';

export function UserList() {
    const users = useSelector((store) => store.users);
    const dispatch = useDispatch();
    const [idDel, setIdDel] = useState(-1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = (id) => {
        setModalIsOpen(true);
        setIdDel(id);
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    useEffect(() => {
        dispatch(getAll());
    }, []);

    const confirmDelete = async () => {
        await dispatch(deleteUser(idDel));
        setIdDel(-1);
        closeModal();
    }

    if (!users) {
        return null;
    }
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2>Are you sure about delete</h2>
                <button onClick={closeModal}>Close</button>
                <button onClick={confirmDelete}>Delete</button>
            </Modal>
            <h1>users List</h1>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Website</th>
                </tr>
                </thead>
                <tbody>
                {users.map((temp, index) => {
                        return (
                            <tr key={index}>
                                <td>{temp.id}</td>
                                <td>{temp.name}</td>
                                <td>{temp.email}</td>
                                <td>{temp.Website}</td>
                                <button onClick={() => openModal(temp.id)}>delete</button>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </>
    );
}