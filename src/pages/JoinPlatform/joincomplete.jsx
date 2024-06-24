import React from "react";
// @ts-ignore
import congratulation from "@/assets/images/congratulation.svg";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";

function JoinComplete() {
  const joinCompleteParams = {
    btnText: "메인화면"
  };

  return (
    <div>
      <div className="joinCompleteTxt first">가입이 완료되었습니다.</div>
      <div className="joinCompleteTxtMain">모임통장</div>
      <div className="joinCompleteTxt second">만들고</div>
      <div className="joinCompleteTxt third">다양한 혜택 누리세요!</div>
      <img
        src={congratulation}
        alt="congratulation"
        className="joinCompleteImg"
      />
      <VerificationBtn params={joinCompleteParams} />
    </div>
  );
}

export default JoinComplete;
