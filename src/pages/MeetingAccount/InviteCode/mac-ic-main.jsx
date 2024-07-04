import React, { useState } from "react";
import "./style.scss";
import invitecodemain from "@/assets/images/meetaccountic/invitecodmain.svg";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
import footballticket from "@/assets/images/ticket/football.svg";
import MacIcBottomUpInfo from "./mac-ic-bottom-popupinfo";

function MacIcMain() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [invitecode, setInvitecode] = useState("");

  const bottomPopupInfoParams = {
    img: footballticket,
    title: "정찬수님의 모임통장에<br/> 참여하시겠습니까?",
    buttonProp: {
      btnText: "모임통장 참여하기",
      btnBelowText: "이 모임통장이 아닌가요?"
    }
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="macIcMainTitle">
        친구에게 받은
        <br />
        초대코드를 입력해주세요
      </div>
      <img src={invitecodemain} alt="invitecode" className="mx-auto mt-11" />
      <div className="macInviteCodeInputDiv">
        <input
          placeholder="초대코드 입력"
          onChange={(e) => setInvitecode(e.target.value)}
        />
        {invitecode !== "" ? (
          <div onClick={() => handlePopupOpen()}>확인</div>
        ) : (
          ""
        )}
      </div>
      <ModalBottomUp
        isPopupOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        snapPoints={[400]}
        content={<MacIcBottomUpInfo params={bottomPopupInfoParams} />}
      />
    </>
  );
}

export default MacIcMain;
