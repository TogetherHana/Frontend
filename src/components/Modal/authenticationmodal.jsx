import {
  authCheckAtom,
  globalModalAtom,
  initialModalState,
  inviteLinkAtom
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

export const closeModal = (setAuthCheckData) => {
  setAuthCheckData(initialModalState);
};

function AuthCheckModal() {
  const [authCheckData, setAuthCheckData] = useAtom(authCheckAtom);

  return (
    <Modal
      isOpen={authCheckData.isOpen}
      onRequestClose={() => closeModal(setAuthCheckData)}
      overlayClassName={"auth-check-modal-overlay"}
    >
      <div className="center">
        {authCheckData.children ? (
          authCheckData.children
        ) : (
          <>{authCheckData.content}</>
        )}
      </div>
    </Modal>
  );
}

export default AuthCheckModal;
