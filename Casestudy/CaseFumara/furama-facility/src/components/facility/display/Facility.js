import "./Facility.css";
import {useState, useEffect} from "react";
import Modal from "../../modal/Modal";
import {useNavigate} from "react-router-dom";
import {buildingApi} from "../../../service/api_connection";
export default function Facility() {
    const [buildingList, setbuildingList] = useState([]);
    const [modalContent, setModalContent] = useState("");
    const [modalType, setModalType] = useState("");
    const [buildId, setBuildId] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await buildingApi();
                setbuildingList(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    },[isModalOpen]);

    const modalConfirm = (name, content, id) => {
        setBuildId(id);
        setModalType("building");
        setModalContent(name);
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
                    modalType={modalType}
                    objectId={buildId}/>
            }
            <div id="mainBody" className="color2">
                {
                    buildingList.map((e,index) => {
                        return (
                            <div className="buildDiv color1 filler" key={index}>
                                <div className="buildImg filler" style={{backgroundImage: `url(${e.img})`}}></div>
                                <div className="buildInfo">
                                    <div>
                                        <h4>{e.name}</h4>
                                        <p>Area: {e.area}m<sup>2</sup></p>
                                    </div>
                                    <div className="button hover color3"
                                        onClick={() => navigate("/building/edit/" + e.id)}>Edit</div>
                                    <div className="button hover color4"
                                         onClick={() => modalConfirm(e.name, "confirm", e.id)}
                                    >Delete</div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="add buildDiv color1 filler" onClick={() => locationHref("/building/create")}>
                    <div className="addBuild"></div>
                    <div className="addText">Add new Building</div>
                </div>
            </div>
        </>
    )
}