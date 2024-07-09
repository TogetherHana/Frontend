import React from "react";
import "./style.scss";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import hana6060 from "@/assets/images/hana6060.svg";
import { useNavigate } from "react-router-dom";

function MacIdCertification() {
  const navigate = useNavigate();

  const btnParams = {
    btnText: "확인",
    btnBelowText: "다시 조회하기 😂",
    onClick: () =>
      navigate("/maccount/register/processing", {
        state: {
          url: "/maccount/register/userinfo",
          text: "확인중입니다"
        }
      })
  };
  return (
    <>
      <div className="idVerification main">
        <div className="idVerification">
          보유하고 계신 <br /> 하나인증서로 인증할게요
        </div>
        <div className="idVerification detail">
          인증서가 조회되지 않았다면 <br />
          다시 조회하기를 클릭해주세요
        </div>
      </div>
      {/* <img src={idtotal} alt="주민등록증" className="idVerification img" /> */}
      <div className="hanaCertifyDiv">
        <img src={hana6060} alt="hanalogo" />
        <div className="title">정찬수님의 인증서</div>
        <div className="sub">유효기간 2026.01.31</div>
        {/* <div>인증서 정보</div> */}
      </div>
      <VerificationBtn params={btnParams} />
    </>
  );
}

export default MacIdCertification;
