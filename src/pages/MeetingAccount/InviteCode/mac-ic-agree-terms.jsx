import React, { useEffect, useState } from "react";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import person1 from "@/assets/images/meetaccountinfo/person1.svg";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
import BottomPopupInfo from "@/components/MeetingAccount/AgreeTerms/bottompopupinfo";
import TermsDiv from "@/components/MeetingAccount/AgreeTerms/termsdiv";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { accessTokenATom } from "@/stores";
import { setISODay } from "date-fns";
import MacIcRegistering from "./mac-ic-registering";

function MacIcAgreeTerms() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [accessToken, setAccessToken] = useAtom(accessTokenATom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(true);

  // @ts-ignore
  const inviteMacIdx = qc.getQueryData(["invite-mac-info"]).data
    .sharingAccountIdx;
  // @ts-ignore
  // const inviteCode = qc.getQueryData(["invite-code"]);
  // console.log(inviteCode);
  const inviteCode = localStorage.getItem("invite-code");
  // @ts-ignore
  const accessToken = qc.getQueryData(["is-member"]).data.accessToken;

  const agreeTermsProp = {
    btnText: "약관 동의하기",
    btnBelowText: "나중에",
    onClick: () => setIsPopupOpen(!isPopupOpen)
  };

  const bottomPopupInfoParams = {
    buttonProp: {
      btnText: "네, 충분히 이해했어요",
      btnBelowText: "닫기",
      onClick: () => setIsSubmitting(true),
      cnm: "detail"
    },
    img: person1,
    title: "약관 내용은 충분히 이해하셨나요?",
    content:
      "설명 내용을 제대로 이해하지 못했는데도 이해했다고<br/>확인하는 경우, 추후 해당 내용과 관련한 권리 구제가<br/>어려울 수 있어요"
  };

  const macRegisterInfo = useQuery({
    queryKey: ["mac-register-info"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URI}/invite/participate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            sharingAccountIdx: inviteMacIdx,
            invitationCode: inviteCode
          })
        }
      );
      return response.json();
    },
    enabled: isSubmitting
  });

  useEffect(() => {
    if (macRegisterInfo.data) {
      setIsSubmitting(false);
      if (macRegisterInfo.data.isSuccess) {
        navigate("/maccount/invitecode/processing");
      }
    }
  }, [macRegisterInfo.data]);

  return (
    <div>
      <div className="macIcAgreeTermsDiv">
        모임통장에 참여하려면
        <br />
        동의가 필요해요
        <div className="termsInfoInviteCode">
          <TermsDiv />
        </div>
      </div>

      <VerificationBtn params={agreeTermsProp} />
      <ModalBottomUp
        isPopupOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        snapPoints={[500]}
        content={<BottomPopupInfo params={bottomPopupInfoParams} />}
      />
    </div>
  );
}

export default MacIcAgreeTerms;
