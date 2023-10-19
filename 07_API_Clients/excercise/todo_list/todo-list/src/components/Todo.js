import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
export default function TodoList() {
    const [list, setList] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reponse = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setList(reponse.data);
                console.log(reponse.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    },[]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const reponse = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                userId: 1,
                    id: 2,
                    title: newTodo,
                    completed: false
            });
            setList([reponse.data, ...list]);
            setNewTodo("");
            alert("Thêm ok rồi nghe")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>

            <table>
                <thead>
                <tr>
                    <th>No.</th>
                    <th>Status</th>
                    <th>Description</th>
                </tr>
                </thead>
                {list.map((e, index) => {
                    return (
                        <tr key={e.id}>
                            <td>{index + 1}</td>
                            <td>{e.completed ? "Done" : ""}</td>
                            <td>{e.title}</td>
                        </tr>
                        )

                })}
            </table>
        </>
    )
}