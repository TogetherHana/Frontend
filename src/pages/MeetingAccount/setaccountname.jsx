import React from "react";
// @ts-ignore
import chatbot from "@/assets/images/chatbot.svg";
import ChatbotMsg from "@/components/MeetingAccount/SetAccountInfo/chatbotmsg";
import InfoHalfBtn from "@/components/MeetingAccount/SetAccountInfo/infohalfbtn";

function SetAccountName() {
  const msg1 = "계좌 이름에 많이 사용되는 키워드는?";
  const msg2 = "야구와 관련된 계좌 이름 추천해줘";
  return (
    <>
      <div className="setAccountNameMain">
        <div className="setAccountNameTitle">계좌 기본 설정</div>
        <div>
          <div>계좌이름</div>
          <input className="userInfoInput address" />
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
        <InfoHalfBtn content={"이전"} idx={"idx1"} />
        <InfoHalfBtn content={"다음"} idx={"idx2"} />
      </div>
    </>
  );
}

export default SetAccountName;
