import "./Employee.css"
import {useEffect, useState} from "react";
import {employeeApi} from "../../../service/api_connection";
import Modal from "../../modal/Modal";
import {standardDay, standardPhone} from "../../../service/standard_data";
import {useNavigate} from "react-router-dom";
export default function Employee() {
    const [employeeList, setEmployeeList] = useState([]);
    const [modalContent, setModalContent] = useState("");
    const [modalType, setModalType] = useState("confirm");
    const [employeeId, setEmployeeId] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await employeeApi();
                setEmployeeList(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
        console.log(employeeList)
    },[]);
    const modalConfirm = (id, type, content) => {
        setEmployeeId(id);
        setModalType(type);
        setModalContent(content + " " + id);
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
            <div>
                <div className="createNew color3 hover filler"
                    onClick={() => {locationHref("/employee/create")}}>+ Employee</div>
                <table id="employeeTable" className="color1 filler">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Id Card</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Education</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employeeList.map((e,index) => {
                            return(
                                <tr key={e.id}>
                                    <td>{index}</td>
                                    <td>{e.name}</td>
                                    <td>{standardDay(e.birthday)}</td>
                                    <td>{e.idCard}</td>
                                    <td>{standardPhone(e.phone)}</td>
                                    <td>{e.email}</td>
                                    <td>{e.education.educationName}</td>
                                    <td>{e.position.positionName}</td>
                                    <td>{e.department.departmentName}</td>
                                    <td>
                                        <div className="buttonEmployee color3 hover filler">edit</div>
                                        <div className="buttonEmployee color4 hover filler"
                                             onClick={() => modalConfirm(e.name, "confirm", "Delete")}
                                        >delete</div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )

}