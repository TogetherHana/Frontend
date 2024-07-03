import React from "react";
import VerificationBtn from "../MeetingAccount/IdVerification/verificationbtn";

function AuthCheckModalContent({ params }) {
  return (
    <div>
      <div>{params.content}</div>
      {/* <VerificationBtn params={btnProp} /> */}
      <div className="nextBtn" onClick={params.onClick}>
        {params.content2}
      </div>
    </div>
  );
}

export default AuthCheckModalContent;
