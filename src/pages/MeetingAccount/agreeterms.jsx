import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
// @ts-ignore
import person1 from "@/assets/images/meetaccountinfo/person1.svg";
import React, { useState } from "react";
import BottomPopupInfo from "@/components/MeetingAccount/AgreeTerms/bottompopupinfo";

function AgreeTerms() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const termsParams = {
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
    <>
      <div>
        <div className="termsInfo1">함께모아 함께쓰는</div>
        <div className="termsInfo2">모임통장 시작하기</div>
        <div className="termsInfo3">
          모임 통장 개설을 위해 약관에 동의해주세요
        </div>
        {/* 약관 동의 화면 */}
        <div className="termsDiv">개인정보 이용 동의</div>
      </div>
      {/* 약관 동의하기 버튼 */}
      <VerificationBtn params={termsParams} />
      {/* 약관 동의하기 확인 컴포넌트 */}
      <ModalBottomUp
        isPopupOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        snapPoints={[500]}
        content={<BottomPopupInfo params={bottomPopupInfoParams} />}
      />
    </>
  );
}

export default AgreeTerms;
