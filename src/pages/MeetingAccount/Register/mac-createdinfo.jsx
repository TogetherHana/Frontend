import React, { useEffect, useState } from "react";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
import BottomPopupInfo from "@/components/MeetingAccount/AgreeTerms/bottompopupinfo";
// @ts-ignore
import sinhantransparent from "@/assets/images/systemEvent/main/sinhantransparent.svg";
// @ts-ignore
import person2 from "@/assets/images/meetaccountinfo/person2.svg";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { accessTokenATom, maccountAtom } from "@/stores";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function MacCreatedInfo() {
  const navigate = useNavigate();

  const qc = useQueryClient();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [macInfo, setmacInfo] = useAtom(maccountAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [accessToken, setAccessToken] = useAtom(accessTokenATom);

  // @ts-ignore
  const accountHolder = qc.getQueryData(["user-info"]).data.nickname;
  // @ts-ignore
  const accessToken = qc.getQueryData(["is-member"]).data.accessToken;

  const createdInfoParams = {
    btnText: "계좌 개설하기",
    btnBelowText: "다시 입력하기",
    onClick: () => setIsPopupOpen(!isPopupOpen)
  };

  const formedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}. ${month}. ${day}`;
  };

  const date = new Date();
  const accountCreateDate = formedDate(date);

  const bottomPopupInfoParams = {
    buttonProp: {
      btnText: "네, 생성할게요",
      btnBelowText: "다시 한번 생각해볼게요",
      onClick: () => createMAccount(),
      cnm: "detail"
    },
    img: person2,
    title: "해당 정보로 계좌를 생성할까요?",
    content: `모임통장 계좌 개설 후 1달 이내에 신규 계좌 발급이<br />
        불가하오니, 신중하게 결정해주세요`
  };

  const createMAccount = () => {
    console.log("click");
    setIsSubmitting(true);
  };

  const maccountCreate = useQuery({
    queryKey: ["mac-create"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URI}/sharing-account/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify(macInfo)
        }
      );

      return response.json();
    },
    enabled: isSubmitting
  });

  useEffect(() => {
    if (maccountCreate.data) {
      setIsSubmitting(false);
      if (maccountCreate.data.isSuccess) {
        // console.log("성공");
        navigate("/maccount/register/processing", {
          state: {
            url: "/maccount/register/complete",
            text: "모임통장을 생성중입니다"
          }
        });
      }
    }
  }, [maccountCreate.data]);

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
