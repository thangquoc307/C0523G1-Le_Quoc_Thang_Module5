import "./Customer.css"
import {useEffect, useState} from "react";
import {customerApi} from "../../../service/api_connection";
import Modal from "../../modal/Modal";
import {standardDay, standardPhone} from "../../../service/standard_data";
import {useNavigate} from "react-router-dom";
export default function Customer() {
    const [customerList, setCustomerList] = useState([]);
    const [modalContent, setModalContent] = useState("");
    const [modalType, setModalType] = useState("");
    const [customerId, setCustomerId] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await customerApi();
                setCustomerList(data.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    },[isModalOpen]);
    const modalConfirm = (name, content, id) => {
        setCustomerId(id);
        setModalType("customer");
        setModalContent(name);
        setIsModalOpen(true);
    }
    const locationHref = (link) => {
        navigate(link);
    }
    const handleEdit = (id) => {
        navigate("/customer/edit/"+id);
    }

    return (
        <>
            {
                isModalOpen && <Modal
                    setIsModalOpen={setIsModalOpen}
                    modalContent={modalContent}
                    modalType={modalType}
                    objectId={customerId}/>
            }
            <div>
                <div className="createNew color3 hover filler"
                    onClick={() => locationHref("/customer/create")}>+ Customer</div>
                <table id="customerTable" className="color1 filler">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Id Card</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Type</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        customerList.map((e,index) => {
                            return(
                                <tr key={e.id}>
                                    <td>{index + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{standardDay(e.birthday)}</td>
                                    <td>{e.idCard}</td>
                                    <td>{standardPhone(e.phone)}</td>
                                    <td>{e.email}</td>
                                    <td>{e.address}</td>
                                    <td>{e.gender.genderName}</td>
                                    <td>{e.customerType.typeName}</td>
                                    <td>
                                        <div className="buttonEmployee color3 hover filler"
                                            onClick={() => handleEdit(e.id)}>edit</div>
                                        <div className="buttonEmployee color4 hover filler"
                                             onClick={() => modalConfirm(e.name, "confirm", e.id)}
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