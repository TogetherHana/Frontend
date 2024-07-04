import { initialModalState, sendFeeCheckModalAtom } from "@/stores";
import { useAtom } from "jotai";
import React from "react";
import Modal from "react-modal";
import Button from "../Button";
import "./style.scss";
import { useNavigate } from "react-router-dom";
const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    minWidth: "406px",
    minHeight: "328px",
    borderRadius: "22px"
  }
};

export const closeModal = (setModalData) => {
  setModalData(initialModalState);
};

function SendFeeCheckModal() { 
  const [modalData, setModalData] = useAtom(sendFeeCheckModalAtom);

  const onClickConfirmButton = () => {
    if (modalData.onClickConfirm) modalData.onClickConfirm();
    else closeModal(setModalData);
  };

  return (
    <Modal
      isOpen={modalData.isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => closeModal(setModalData)}
      // @ts-ignore
      style={customStyles}
      overlayClassName={"send-fee-modal-overlay"}
    >
      <div className="checking">
        <div className="check-receiver">{modalData.title}</div>
        <div className="check-bank">{modalData.content}</div>      
      </div>

      <div className="buttons-position">
        <Button
          className="cancel-modal-button"
          onClick={() => closeModal(setModalData)}
        >
          {modalData.cancelButtonText ? modalData.cancelButtonText : "취소"}
        </Button>
        <Button
          className="confirm-modal-button"
          // shape="rect"
          onClick={() => onClickConfirmButton()}
        >
          {modalData.confirmButtonText ? modalData.confirmButtonText : "확인"}
        </Button>
      </div>
    </Modal>
  );
}

export default SendFeeCheckModal;
