import React from "react";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

function VerificationBtn({ params }) {
  const navigate = useNavigate();
  const { btnText, btnBelowText, onClick } = params;

  return (
    <div className="userinfobtnLocation">
      <Button onClick={onClick} className="idVerification btn">
        {btnText}
      </Button>
      {btnBelowText && (
        <div className="idVerification below">{btnBelowText}</div>
      )}
    </div>
  );
}

export default VerificationBtn;
