import React from "react";
import { useNavigate } from "react-router-dom";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";

function UserInfo() {
  const navigate = useNavigate();

  const btnParams = {
    btnText: "정보를 확인했어요"
  };

  return (
    <>
      <div className="userInfoDiv">
        <div className="userInfo">본인정보확인</div>
        <div className="my-16 mx-5">
          <div className="userInfoInputText">이름</div>
          <input className="userInfoInput" value="이상민" disabled />
          <div className="userInfoInputText">주민등록번호</div>
          <div className="flex">
            <input className="userInfoInput" value="991229" disabled /> -{" "}
            <input className="userInfoInput" value="1******" disabled />
          </div>
          <div className="userInfoInputText">주소</div>
          <div className="grid">
            <input
              className="userInfoInput address"
              value="서울특별시 성동구 성수동"
              disabled
            />
            <input
              className="userInfoInput address"
              value="아차산로 221"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="userinfobtnLocation">
        <VerificationBtn params={btnParams} />
      </div>
    </>
  );
}

export default UserInfo;
