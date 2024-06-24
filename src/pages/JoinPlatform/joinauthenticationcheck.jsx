import React from "react";
// @ts-ignore
import authenticationex from "@/assets/images/joinmembership/authenticationex.svg";

function JoinAuthenticationCheck() {
  return (
    <div>
      <div className="joinAuthenticationCheckTitle">
        거래내역 확인 후<br />
        3자리 숫자를 입력해주세요
      </div>
      <img
        src={authenticationex}
        alt="1원인증"
        className="joinAuthenticationCheckImg"
      />
      <div className="flex">
        <input className="userInfoInput acnm2" placeholder="숫자코드 입력" />
        <div className="joinAuthenticationCheckBtn auth">확인</div>
      </div>
    </div>
  );
}

export default JoinAuthenticationCheck;
