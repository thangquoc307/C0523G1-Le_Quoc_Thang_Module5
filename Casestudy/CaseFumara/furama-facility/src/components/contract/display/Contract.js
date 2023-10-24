import {useEffect, useState} from "react";
import {contractApi} from "../../../service/api_connection";
import Modal from "../../modal/Modal";
import {useNavigate} from "react-router-dom";
import "./Contract.css";
import {standardDay, standardMoney, standardPhone} from "../../../service/standard_data";

export default function Contract(){
    const [dataContract, setDataContract] = useState([]);
    const [modalContent, setModalContent] = useState("");
    const [modalType, setModalType] = useState("");
    const [contractId, setContractId] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const getContract = async () => {
        const data = await contractApi();
        setDataContract(data.data);

    }
    const modalConfirm = (name, content,id) => {
        setContractId(id);
        setModalType("contract");
        setModalContent(name);
        setIsModalOpen(true);
    }
    useEffect(() => {
        getContract();
    }, [isModalOpen])

    if (dataContract.length == 0) {
        return null;
    } else {
        return (
            <>
                {isModalOpen && <Modal
                    setIsModalOpen={setIsModalOpen}
                    modalContent={modalContent}
                    modalType={modalType}
                    objectId={contractId}/>}
                <div>
                    <div className="createNew color3 hover filler"
                         onClick={() => navigate("/contract/create")}>+ Contract</div>
                    <table id="contractTable" className="color1 filler">
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>Code</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Deposit</th>
                            <th>Payment</th>
                            <th>Building</th>
                            <th>Customer</th>
                            <th>Sale</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            dataContract.map((e,index) => {
                                return(
                                    <tr key={e.id}>
                                        <td>{index + 1}</td>
                                        <td>{e.code}</td>
                                        <td>{standardDay(e.checkInDate)}</td>
                                        <td>{standardDay(e.checkOutDate)}</td>
                                        <td>{standardMoney(e.deposit)}</td>
                                        <td>{standardMoney(e.payment)}</td>
                                        <td>{e.building.name}</td>
                                        <td>{e.customer.name}</td>
                                        <td>{e.employee.name}</td>
                                        <td>
                                            <div className="buttonEmployee color3 hover filler"
                                                 onClick={() => navigate("/contract/edit/" + e.id)}>edit</div>
                                            <div className="buttonEmployee color4 hover filler"
                                                 onClick={() => modalConfirm(e.code, "confirm", e.id)}
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
}