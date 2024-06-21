import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import React from "react";

function AgreeTerms() {
  const termsParams = {
    btnText: "약관 동의하기",
    btnBelowText: "나중에"
  };

  return (
    <>
      <div>
        <div className="termsInfo1">함께모아 함께쓰는</div>
        <div className="termsInfo2">모임통장 시작하기</div>
        <div className="termsInfo3">
          모임 통장 개설을 위해 약관에 동의해주세요
        </div>
        {/* 약관 동의 화면 */}
      </div>
      {/* 약관 동의하기 버튼 */}
      <VerificationBtn params={termsParams} />
    </>
  );
}

export default AgreeTerms;
