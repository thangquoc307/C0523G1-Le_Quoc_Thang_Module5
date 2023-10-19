import "./Mainpage.css";
import {useState, useEffect} from "react";
import axios from "axios";
export default function Mainpage() {
    const [roomList, setRoomList] = useState([]);
    const [houseList, setHouseList] = useState([]);
    const [villaList, setVillaList] = useState([]);
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
    return (
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
                                <div className="button hover color4">Delete</div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="buildDiv color1">
                <div className="addBuild"></div>
                <div className="addText">Add new Building</div>
            </div>
        </div>
    )


}