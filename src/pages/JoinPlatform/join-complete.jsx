import React, { useEffect, useState } from "react";
// @ts-ignore
import congratulation from "@/assets/images/congratulation.svg";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { deviceTokenAtom, memberAtom } from "@/stores";

function JoinComplete() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  // const [deviceToken, setDeviceToken] = useAtom(deviceTokenAtom);
  const [memberInfo, setMemberInfo] = useAtom(memberAtom);
  const [isSubmitting, setIsSubmitting] = useState(true);

  const joinCompleteParams = {
    btnText: "메인화면",
    onClick: () => navigate("/memberhome")
  };

  // qc.refetchQueries({ queryKey: ["is-member"] });
  const isMember = useQuery({
    queryKey: ["is-member"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URI}/auth/login?deviceToken=${memberInfo.fcmToken}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response);
      return response.json();
    },
    enabled: isSubmitting
  });

  useEffect(() => {
    console.log(memberInfo.fcmToken);
    setIsSubmitting(false);
  }, []);

  return (
    <div>
      <div className="joinCompleteTxt first">가입이 완료되었습니다.</div>
      <div className="joinCompleteTxtMain">모임통장</div>
      <div className="joinCompleteTxt second">만들고</div>
      <div className="joinCompleteTxt third">다양한 혜택 누리세요!</div>
      <img
        src={congratulation}
        alt="congratulation"
        className="joinCompleteImg"
      />
      <VerificationBtn params={joinCompleteParams} />
    </div>
  );
}

export default JoinComplete;
