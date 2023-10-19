import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
export default function BookDetail(){
    const id = useParams().id;
    const [detail, setDetail] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const getDetail = async () => {
            try {
                const reponse = await axios.get("https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/" + id);
                setDetail(reponse.data);
                console(reponse);
            } catch (err) {
                console.log(err);
            }
        };
        getDetail()
    },[]);
    const mainpage = (() => navigate("/"));

    return (
        <>
            <h2>Chi tiết sách: {detail.title}</h2>
            <h3>Mã sách: {detail.id}</h3>
            <h3>Số lượng: {detail.quantity}</h3>
            <button onClick={mainpage}>Cum bách men bây</button>
        </>
    )
}