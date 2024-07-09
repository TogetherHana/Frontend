import React from "react";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

function VerificationBtn({ params }) {
  const navigate = useNavigate();
  const { btnText, btnBelowText, onClick, cnm } = params;

  return (
    <div className={`userinfobtnLocation ${cnm}`}>
      <Button onClick={onClick} className="idVerification btn">
        {btnText}
      </Button>
      {btnBelowText && (
        <div
          className="idVerification below"
          onClick={() =>
            navigate("/maccount/register/processing", {
              state: {
                url: "/maccount/register/idcertification",
                text: "확인중입니다"
              }
            })
          }
        >
          {btnBelowText}
        </div>
      )}
    </div>
  );
}

export default VerificationBtn;
