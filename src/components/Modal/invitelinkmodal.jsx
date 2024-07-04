import { globalModalAtom, initialModalState, inviteLinkAtom } from "@/stores";
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

export const closeModal = (setInviteModalData) => {
  setInviteModalData(initialModalState);
};

function InviteLinkModal() {
  const [inviteModalData, setInviteModalData] = useAtom(inviteLinkAtom);
  return (
    <Modal
      isOpen={inviteModalData.isOpen}
      onRequestClose={() => closeModal(setInviteModalData)}
      overlayClassName={"invite-link-modal-overlay"}
    >
      <div className="center">
        {inviteModalData.children ? (
          inviteModalData.children
        ) : (
          <>{inviteModalData.content}</>
        )}
      </div>
    </Modal>
  );
}

export default InviteLinkModal;
