import React from "react";
// @ts-ignore
import advertisement1 from "@/assets/images/meetaccountinfo/advertisement1.svg";
// @ts-ignore
import bankbook from "@/assets/images/meetaccountinfo/bankbook.svg";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import { useNavigate } from "react-router-dom";

function MacComplete() {
  const navigate = useNavigate();

  const completeParams = {
    btnText: "메인화면으로",
    btnBelowText: "만든 계좌 바로 확인하러 가기",
    onClick: () => navigate(`/memberhome`)
  };

  return (
    <>
      <div>
        <img src={advertisement1} alt="ad" />
        <div className="maccountCompleteTitle">계좌 개설이 완료되었어요!</div>
        <img src={bankbook} alt="bankbook" className="maccountCompleteImg" />
      </div>
      <VerificationBtn params={completeParams} />
    </>
  );
}

export default MacComplete;
