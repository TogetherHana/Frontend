import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import React from "react";
import { useNavigate } from "react-router-dom";

function JoinIdVerification() {
  const navigate = useNavigate();

  const joinIdVerificationParams = {
    btnText: "다음",
    onClick: () => navigate(`/platform/join/accountlink`)
  };

  return (
    <div className="joinIdVerificationDiv">
      <div className="title">본인 인증</div>
      <div className="content">
        <div className="userInfoInputText">이름</div>
        <input className="userInfoInput" />
        <div className="userInfoInputText">전화번호</div>
        <div className="flex">
          <input className="userInfoInput tel1" /> -{" "}
          <input className="userInfoInput tel2" /> -{" "}
          <input className="userInfoInput tel2" />
        </div>
        <div className="flex">
          <div className="userInfoInputText">인증번호 입력</div>
          <div className="joinNumberCheck">인증번호 받기</div>
        </div>
        <div className="flex">
          <input className="userInfoInput vnm" />
          <div className="joinIdVerificationNotify time">5:00</div>
          <div className="joinNumberCheck small">확인</div>
        </div>
        <div className="joinIdVerificationNotify">
          5분 이내에 인증번호를 입력해주세요
        </div>
      </div>
      <VerificationBtn params={joinIdVerificationParams} />
    </div>
  );
}

export default JoinIdVerification;
