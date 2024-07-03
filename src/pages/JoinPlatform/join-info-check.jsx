import React, { useState } from "react";
import hana4040 from "@/assets/images/hana4040.svg";
import { useAtom } from "jotai";
import { memberAtom } from "@/stores";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { register } from "@/serviceWorker";

function JoinInfoCheck() {
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useAtom(memberAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log(JSON.stringify(memberInfo));
  const btnProp = {
    btnText: "가입할래요",
    onClick: () => handleMemberRegister()
  };

  const registerProcessing = useQuery({
    queryKey: ["register-processing"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/member/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(memberInfo)
      });
      return response.json();
    },
    enabled: isSubmitting
  });

  const handleMemberRegister = () => {
    setIsSubmitting(true);
    if (registerProcessing.data && registerProcessing.isSuccess) {
      navigate("/platform/join/processing");
    }
    // console.log(registerProcessing.data);
  };

  return (
    <>
      <div className="flipDiv">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="heading_8264">함께, 하나</p>
              <img src={hana4040} alt="img" />
              <p className="number">{memberInfo.name}</p>
              <p className="valid_thru">연동계좌</p>
              {/* <p className="date_8264">1 2 / 2 4</p> */}
              <p className="name">{memberInfo.accountNumber}</p>
            </div>
            <div className="flip-card-back">
              {/* <div className="strip"> </div> */}
              <div className="flip-card-back-nickname">
                {memberInfo.nickName}
              </div>
              <div className="mstrip"></div>
              <div className="flip-card-back-phone">
                {memberInfo.phoneNumber}
              </div>
              {/* <div className="sstrip">
              <p className="code">***</p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <VerificationBtn params={btnProp} />
    </>
  );
}

export default JoinInfoCheck;
