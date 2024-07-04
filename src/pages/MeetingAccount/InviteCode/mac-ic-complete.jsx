import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import smile from "@/assets/images/smile.svg";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import completedialog from "@/assets/images/meetaccountic/completedialog.svg";

function MacIcComplete() {
  const qc = useQueryClient();
  const navigate = useNavigate();

  // @ts-ignore
  // const inviteMacInfo = qc.getQueryData(["invite-mac-info"]).data;
  const inviteMacInfo = "럭키비키다이노스";

  const btnProp = {
    btnText: "메인화면으로",
    onClick: () => navigate("/memberhome")
  };

  return (
    <div className="macIcCompleteDiv">
      {/* 말풍선 */}
      <img
        src={completedialog}
        alt="completeDialog"
        className="completeDialog"
      />
      {/* 스마일 그림 */}
      <img src={smile} alt="smile" />
      {/* 반가워요 */}
      <div className="detail">
        {/* {inviteMacInfo.accountName} 모임통장에 <br /> */}
        {inviteMacInfo}
        <br /> 모임통장에 <br />
        정상적으로 가입되었습니다!
      </div>
      {/* btn */}
      <VerificationBtn params={btnProp} />
    </div>
  );
}

export default MacIcComplete;
