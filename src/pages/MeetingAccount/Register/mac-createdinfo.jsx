import React, { useState } from "react";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
import BottomPopupInfo from "@/components/MeetingAccount/AgreeTerms/bottompopupinfo";
// @ts-ignore
import sinhantransparent from "@/assets/images/systemEvent/main/sinhantransparent.svg";
// @ts-ignore
import person2 from "@/assets/images/meetaccountinfo/person2.svg";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { deviceTokenAtom, maccountAtom } from "@/stores";
import { useQuery } from "@tanstack/react-query";

function MacCreatedInfo() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [macInfo, setmacInfo] = useAtom(maccountAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deviceToken] = useAtom(deviceTokenAtom);

  const navigate = useNavigate();

  // const accountName = "럭키비키 다이노스";
  const accountHolder = "이상민";
  const accountCreateDate = "2024. 06. 20";

  const createdInfoParams = {
    btnText: "계좌 개설하기",
    btnBelowText: "다시 입력하기",
    onClick: () => createMAccount()
  };

  const bottomPopupInfoParams = {
    buttonProp: {
      btnText: "네, 생성할게요",
      btnBelowText: "다시 한번 생각해볼게요",
      onClick: () => navigate(`/maccount/register/complete`)
    },
    img: person2,
    title: "해당 정보로 계좌를 생성할까요?",
    content: `모임통장 계좌 개설 후 1달 이내에 신규 계좌 발급이<br />
        불가하오니, 신중하게 결정해주세요`
  };

  const createMAccount = () => {
    setIsSubmitting(true);
    setIsPopupOpen(!isPopupOpen);
  };

  const maccountCreate = useQuery({
    queryKey: ["mac-create"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8080/sharing-account/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${deviceToken}`
          },
          body: JSON.stringify(macInfo)
        }
      );
    },
    enabled: isSubmitting
  });

  return (
    <>
      <div className="setAccountNameMain">
        <div className="setAccountNameTitle createdInfo">계좌 생성정보</div>
        <div className="userInfoInputText">계좌 이름</div>
        <input
          className="userInfoInput address"
          value={macInfo.accountName}
          disabled
        />
        <div className="userInfoInputText">소유주</div>
        <input
          className="userInfoInput address"
          value={accountHolder}
          disabled
        />
        <div className="userInfoInputText">계좌 생성일자</div>
        <input
          className="userInfoInput address"
          value={accountCreateDate}
          disabled
        />
        <img src={sinhantransparent} alt="logo" className="accountTypeLogo" />
      </div>
      <VerificationBtn params={createdInfoParams} />
      {/* 계좌 생성정보 한번 더 확인 */}
      <ModalBottomUp
        isPopupOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        snapPoints={[450]}
        content={<BottomPopupInfo params={bottomPopupInfoParams} />}
      />
    </>
  );
}

export default MacCreatedInfo;
