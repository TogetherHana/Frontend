import React from "react";
// @ts-ignore
import advertisement1 from "@/assets/images/advertisement1.svg";
// @ts-ignore
import bankbook from "@/assets/images/bankbook.svg";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";

function MAccountComplete() {
  const completeParams = {
    btnText: "메인화면으로",
    btnBelowText: "만든 계좌 바로 확인하러 가기"
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

export default MAccountComplete;
