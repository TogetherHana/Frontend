import React, { useEffect, useState } from "react";
// @ts-ignore
import chatbot from "@/assets/images/chatbot.svg";
import ChatbotMsg from "@/components/MeetingAccount/SetAccountInfo/chatbotmsg";
import InfoHalfBtn from "@/components/MeetingAccount/SetAccountInfo/infohalfbtn";
import { useNavigate } from "react-router-dom";
import { maccountAtom } from "@/stores";
import { useAtom } from "jotai";

function MacSetAccountName() {
  const msg1 = "계좌 이름에 많이 사용되는 키워드는?";
  const msg2 = "야구와 관련된 계좌 이름 추천해줘";

  const navigate = useNavigate();
  const [accountName, setAccountName] = useState("");
  const [isSetting, setIsSetting] = useState(false);
  const [macInfo, setMacInfo] = useAtom(maccountAtom);

  useEffect(() => {}, [isSetting]);

  const handleAccountName = (e) => {
    setAccountName(e.target.value);

    if (accountName.length <= 1) {
      setIsSetting(false);
    } else {
      setIsSetting(true);
    }
    // console.log(accountName);
  };

  const handleNext = () => {
    navigate(`/maccount/register/setaccountpw`);
    setMacInfo((prev) => ({ ...prev, accountName: accountName }));
    console.log(macInfo);
  };

  return (
    <>
      <div className="setAccountNameMain">
        <div className="title">계좌 기본 설정</div>
        <div>
          <div>계좌이름</div>
          <input
            className="userInfoInput address"
            onChange={(e) => handleAccountName(e)}
          />
        </div>
        {/* 계좌 이름 추천 */}
      </div>
      <div className="setAccountNameChatbot">
        <img src={chatbot} alt="chatbotcharacter" />
        <ChatbotMsg content={msg1} loc={"loc1"} />
        <ChatbotMsg content={msg2} loc={"loc2"} />
        <ChatbotMsg content={""} loc={"loc3"} />
      </div>
      <div className="setAccountNameBtn">
        <InfoHalfBtn
          content={"이전"}
          idx={"idx1"}
          onClick={() => navigate(`/maccount/register/ideverification`)}
        />
        {isSetting ? (
          <InfoHalfBtn
            content={"다음"}
            idx={"idx2"}
            onClick={() => handleNext()}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default MacSetAccountName;
