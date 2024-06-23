import React from "react";
import VerificationBtn from "../IdVerification/verificationbtn";
// @ts-ignore
import person2 from "@/assets/images/person2.svg";

function CreatedInfoCheck() {
  const checkTermsProp = {
    btnText: "네, 생성할게요",
    btnBelowText: "다시 한번 생각해볼게요"
  };

  return (
    <div className="checkTermsMain">
      <img src={person2} alt="person1" />
      <div className="checkTermsTitle">해당 정보로 계좌를 생성할까요?</div>
      <div className="checkTermsDetail">
        모임통장 계좌 개설 후 1달 이내에 신규 계좌 발급이
        <br />
        불가하오니, 신중하게 결정해주세요
      </div>
      <VerificationBtn params={checkTermsProp} />
    </div>
  );
}

export default CreatedInfoCheck;
