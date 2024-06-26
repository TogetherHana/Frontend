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

  // const onClickConfirmButton = () => {
  //   if (inviteModalData.onClickConfirm) inviteModalData.onClickConfirm();
  //   else closeModal(setInviteModalData);
  // };
  return (
    <Modal
      isOpen={inviteModalData.isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => closeModal(setInviteModalData)}
      // @ts-ignore
      // style={customStyles}
      overlayClassName={"invite-link-modal-overlay"}
    >
      {/* <Button
        color="default"
        className="right close-btn"
        onClick={() => closeModal(setInviteModalData)}
      >
        x
      </Button> */}
      <div className="center">
        {inviteModalData.children ? (
          inviteModalData.children
        ) : (
          // <span>{inviteModalData.content}</span>
          // <div>{parse(inviteModalData.content)}</div>
          <>{inviteModalData.content}</>
        )}
      </div>
      {/* <Button
        className="global-modal-button"
        shape="rect"
        onClick={() => onClickConfirmButton()}
      >
        {inviteModalData.confirmButtonText
          ? inviteModalData.confirmButtonText
          : "확인"}
      </Button> */}
    </Modal>
  );
}

export default InviteLinkModal;
