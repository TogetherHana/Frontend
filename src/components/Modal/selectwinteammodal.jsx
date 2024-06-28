import { initialModalState, selectWinTeamAtom } from "@/stores";
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

export const closeModal = (setSelectWinTeamData) => {
  setSelectWinTeamData(initialModalState);
};

function SelectWinTeamModal() {
  const [selectWinTeamData, setSelectWinTeamData] = useAtom(selectWinTeamAtom);

  // const onClickConfirmButton = () => {
  //   if (inviteModalData.onClickConfirm) inviteModalData.onClickConfirm();
  //   else closeModal(setInviteModalData);
  // };
  return (
    <Modal
      isOpen={selectWinTeamData.isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => closeModal(setSelectWinTeamData)}
      // @ts-ignore
      // style={customStyles}
      overlayClassName={"select-winteam-modal-overlay"}
    >
      {/* <Button
        color="default"
        className="right close-btn"
        onClick={() => closeModal(setInviteModalData)}
      >
        x
      </Button> */}
      <div className="center">
        {selectWinTeamData.children ? (
          selectWinTeamData.children
        ) : (
          // <span>{inviteModalData.content}</span>
          // <div>{parse(inviteModalData.content)}</div>
          <>{selectWinTeamData.content}</>
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

export default SelectWinTeamModal;
