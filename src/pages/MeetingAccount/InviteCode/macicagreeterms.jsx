import React, { useState } from "react";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import person1 from "@/assets/images/meetaccountinfo/person1.svg";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
import BottomPopupInfo from "@/components/MeetingAccount/AgreeTerms/bottompopupinfo";

function MacIcAgreeTerms() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const agreeTermsProp = {
    btnText: "약관 동의하기",
    btnBelowText: "나중에",
    onClick: () => setIsPopupOpen(!isPopupOpen)
  };

  const bottomPopupInfoParams = {
    buttonProp: {
      btnText: "네, 충분히 이해했어요",
      btnBelowText: "닫기"
    },
    img: person1,
    title: "약관 내용은 충분히 이해하셨나요?",
    content:
      "설명 내용을 제대로 이해하지 못했는데도 이해했다고<br/>확인하는 경우, 추후 해당 내용과 괄녀한 권리 구제가<br/>어려울 수 있어요"
  };
  return (
    <div>
      <div className="macIcAgreeTermsDiv">
        모임통장에 참여하려면
        <br />
        동의가 필요해요
      </div>
      <div className="macIcAgreeTerms"></div>
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
