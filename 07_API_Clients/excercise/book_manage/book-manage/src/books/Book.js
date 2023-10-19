import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function BookManage(){
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const reponse = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books');
                setBookList(reponse.data);
                console.log(reponse);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, []);
    return (
        <>
            <h3>Nhà sách 3 quyển sách</h3>
            <button>Add a new book</button>
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
                                <button>Edit</button>
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