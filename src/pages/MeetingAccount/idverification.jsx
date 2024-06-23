import React from "react";
// @ts-ignore
import idtotal from "@/assets/images/ocr/idtotal.svg";
import "./style.scss";
import Button from "@/components/Button";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";

function IdVerification() {
  const btnParams = {
    btnText: "신분증 촬영하기",
    btnBelowText: "신분증 촬영이 안돼요 😂"
  };
  return (
    <>
      <div className="idVerification main">
        <div className="idVerification">
          주민등록증이나 <br /> 운전면허증을 준비해주세요
        </div>
        <div className="idVerification detail">
          신분증이 제대로 촬영되지 않으면 <br />
          모임 통장 이용이 제한될 수 있어요
        </div>
      </div>
      <img src={idtotal} alt="주민등록증" className="idVerification img" />
      <VerificationBtn params={btnParams} />
    </>
  );
}

export default IdVerification;
