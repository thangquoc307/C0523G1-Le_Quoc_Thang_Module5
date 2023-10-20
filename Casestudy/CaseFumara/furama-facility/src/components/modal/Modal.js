import "./Modal.css";
import {useState} from "react";
export default function Modal({setIsModalOpen,modalContent,modalType}){
    const closeModal = () => {
        setIsModalOpen(false);
    }
     switch (modalType){
         case "confirm":
             return (
                 <div className="modal">
                     <p className="modalContent">{modalContent}</p>
                     <div onClick={closeModal} className="button hover buttonModalClose color2">Close</div>
                     <div className="button hover buttonModalConfirm color3">Confirm</div>
                </div>
             );
         case "alert":
             return (
                 <div className="modal">
                     <p className="modalContent">{modalContent}</p>
                     <div onClick={closeModal} className="buttonModalOk color2">Ok</div>
                 </div>
             );
     }
}