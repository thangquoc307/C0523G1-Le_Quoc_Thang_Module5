import "./Modal.css";
import {useState} from "react";
export default function Modal({setIsModalOpen,modalContent,modalType}){
    const closeModal = () => {
        setIsModalOpen(false);
    }
     switch (modalType){
         case "confirm":
             return (
                 <div className="modal filler boxshadow-outset border">
                     <p className="modalContent">Are you sure about<br/><br/>
                         <span className="targetText">{modalContent}</span></p>
                     <div onClick={closeModal} className="button hover buttonModalClose color3">Close</div>
                     <div className="button hover buttonModalConfirm color4">Confirm</div>
                </div>
             );
         case "alert":
             return (
                 <div className="modal filler boxshadow-outset border">
                     <p className="modalContent">{modalContent}</p>
                     <div onClick={closeModal} className="buttonModalOk color3">Ok</div>
                 </div>
             );
     }
}