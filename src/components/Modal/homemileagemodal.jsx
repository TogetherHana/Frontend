import {
  authCheckAtom,
  globalModalAtom,
  initialModalState,
  inviteLinkAtom,
  mileageModalAtom
} from "@/stores";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import Modal from "react-modal";
import Button from "../Button";
import "./style.scss";
import "../../common/styles/scss/base.scss";
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

export const closeModal = (setMileageModalData) => {
  setMileageModalData(initialModalState);
};

function HomeMileageModal() {
  const [mileageModalData, setMileageModalData] = useAtom(mileageModalAtom);

  return (
    <Modal
      isOpen={mileageModalData.isOpen}
      onRequestClose={() => closeModal(setMileageModalData)}
      overlayClassName={"home-mileage-modal-overlay"}
    >
      <div className="center">
        {mileageModalData.children ? (
          mileageModalData.children
        ) : (
          <>{mileageModalData.content}</>
        )}
      </div>
    </Modal>
  );
}

export default HomeMileageModal;
