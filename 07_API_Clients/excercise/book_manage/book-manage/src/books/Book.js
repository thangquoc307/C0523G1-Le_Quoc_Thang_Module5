import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

export default function BookManage(){
    const [bookList, setBookList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
            try {
                const reponse = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books');
                setBookList(reponse.data);
            } catch (err) {
                console.log(err);
            }
        };

        getData();
    }, []);
    const locationHref = ((link) => {
        navigate(link)
    });

    return (
        <>
            <h3>Nhà sách 3 quyển sách</h3>
            <button onClick={() => locationHref('/create')}>Add a new book</button>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {bookList.map(e => {
                    return (
                        <tr key={e.id}>
                            <td>{e.title}</td>
                            <td>{e.quantity}</td>
                            <td>
                                <button onClick={() => locationHref(`/detail/${e.id}`)}>Detail</button>
                                <button onClick={() => locationHref(`/edit/${e.id}`)}>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}