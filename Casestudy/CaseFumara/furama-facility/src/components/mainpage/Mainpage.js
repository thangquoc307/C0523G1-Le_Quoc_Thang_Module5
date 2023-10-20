import "./Mainpage.css";
import {useState, useEffect} from "react";
import axios from "axios";
import Modal from "../modal/Modal";
import {useNavigate} from "react-router-dom";
export default function Mainpage() {
    const [roomList, setRoomList] = useState([]);
    const [houseList, setHouseList] = useState([]);
    const [villaList, setVillaList] = useState([]);

    const [modalContent, setModalContent] = useState("");
    const [modalType, setModalType] = useState("confirm");
    const [buildId, setBuildId] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const villaRes = await axios.get('http://localhost:3000/villas');
                const houseRes = await axios.get('http://localhost:3000/houses');
                const roomRes = await axios.get('http://localhost:3000/rooms');

                setVillaList(villaRes.data);
                setHouseList(houseRes.data);
                setRoomList(roomRes.data);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    },[]);

    const modalConfirm = (id, type, content) => {
        setBuildId(id);
        setModalType(type);
        setModalContent("Are you sure about " + content + " buiding " + id);
        setIsModalOpen(true);
    }
    const locationHref = (link) => {
        navigate(link);
    }

    return (
        <>
        {
            isModalOpen && <Modal
                setIsModalOpen={setIsModalOpen}
                modalContent={modalContent}
                modalType={modalType}/>
        }
        <div id="mainBody" className="color2">

            {
                [...roomList,...houseList,...villaList].map((e,index) => {
                    return (
                        <div className="buildDiv color1" key={index}>
                            <div className="buildImg" style={{backgroundImage: `url(${e.img})`}}></div>
                            <div className="buildInfo">
                                <div>
                                    <h4>{e.serviceName}</h4>
                                    <p>Area: {e.area}m<sup>2</sup></p>
                                </div>
                                <div className="button hover color3">Edit</div>
                                <div className="button hover color4"
                                     onClick={() => modalConfirm(e.id, "confirm", "DELETE")}>Delete</div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="add buildDiv color1" onClick={() => locationHref("/create")}>
                <div className="addBuild"></div>
                <div className="addText">Add new Building</div>
            </div>
        </div>
        </>
    )
}