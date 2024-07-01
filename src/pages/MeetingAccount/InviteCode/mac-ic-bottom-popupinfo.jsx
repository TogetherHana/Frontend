import React from "react";
import parse from "html-react-parser";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";

function MacIcBottomUpInfo({ params }) {
  return (
    <div className="macIcBottomUpInfoDiv">
      <img src={params.img} alt="img" />
      <div className="title">{parse(params.title)}</div>
      <VerificationBtn params={params.buttonProp} />
    </div>
  );
}

export default MacIcBottomUpInfo;
