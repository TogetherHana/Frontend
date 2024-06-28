import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import smile from "@/assets/images/smile.svg";
import React from "react";

function MacIcComplete() {
  const btnProp = {
    btnText: "메인화면으로"
  };

  return (
    <div className="macIcCompleteDiv">
      {/* 말풍선 */}

      {/* 스마일 그림 */}
      <img src={smile} alt="smile" />
      {/* 반가워요 */}
      <div>
        정찬수님의 모임통장에 <br />
        정상적으로 가입되었습니다!
      </div>
      {/* btn */}
      <VerificationBtn params={btnProp} />
    </div>
  );
}

export default MacIcComplete;
