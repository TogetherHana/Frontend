import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import React from "react";

function JoinSetNickName() {
  const joinSetNickNameParams = {
    btnText: "가입하기"
  };

  return (
    <div className="joinSetNickNameDiv">
      <div>닉네임 설정</div>
      <div className="sub">함께, 하나?에서 사용할 닉네임을 입력해주세요</div>
      <input className="userInfoInput acnm3" placeholder="닉네임 입력" />
      <div className="joinNumberCheck middle">중복확인</div>
      <VerificationBtn params={joinSetNickNameParams} />
    </div>
  );
}

export default JoinSetNickName;
