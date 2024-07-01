import React from "react";
import VerificationBtn from "../IdVerification/verificationbtn";
import parse from "html-react-parser";
import "./style.scss";

function BottomPopupInfo({ params }) {
  const { buttonProp, img, title, content } = params;

  return (
    <div className="checkTermsMain">
      <img src={img} alt="person1" />
      <div className="checkTermsTitle">{title}</div>
      <div className="checkTermsDetail">{parse(content)}</div>
      <VerificationBtn params={buttonProp} />
    </div>
  );
}

export default BottomPopupInfo;
