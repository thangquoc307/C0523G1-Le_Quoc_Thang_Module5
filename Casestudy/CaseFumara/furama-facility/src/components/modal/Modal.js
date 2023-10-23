import "./Modal.css";
import axios from "axios";
export default function Modal({setIsModalOpen,modalContent,modalType,objectId}){
    const closeModal = () => {
        setIsModalOpen(false);
    }
    const handleConfirm = async () => {
        const objectDelete = {
            id: objectId,
            objectType: modalType
        }
        try {
            console.log(objectDelete)
            const reponse = await axios.post('http://localhost:8080/api/delete/', objectDelete);
        } catch (err) {
            console.log(err);
        }
        closeModal();
    }
     return (
         <div className="modal filler boxshadow-outset border">
             <p className="modalContent">Are you sure about Delete<br/><br/>
                 <span className="targetText">{modalContent}</span></p>
             <div onClick={closeModal} className="button hover buttonModalClose color3">Close</div>
             <div onClick={handleConfirm} className="button hover buttonModalConfirm color4">Confirm</div>
        </div>
     );

}