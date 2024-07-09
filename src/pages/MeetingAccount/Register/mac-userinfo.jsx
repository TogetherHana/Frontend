import React from "react";
import { useNavigate } from "react-router-dom";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";

function MacUserInfo() {
  const navigate = useNavigate();

  const ocrInfo = {
    name: "정찬수",
    idNumberFirst: "991229",
    idNumberSecond: "1******",
    address: "서울특별시 성동구 성수동",
    addressDetail: "아차산로 221"
  };

  const btnParams = {
    btnText: "정보를 확인했어요",
    onClick: () => navigate(`/maccount/register/selectstock`)
  };

  return (
    <>
      <div className="userInfoDiv">
        <div className="userInfo">본인정보확인</div>
        <div className="my-16 mx-5">
          <div className="userInfoInputText">이름</div>
          <input className="userInfoInput" value={ocrInfo.name} disabled />
          <div className="userInfoInputText">주민등록번호</div>
          <div className="flex">
            <input
              className="userInfoInput"
              value={ocrInfo.idNumberFirst}
              disabled
            />{" "}
            -{" "}
            <input
              className="userInfoInput"
              value={ocrInfo.idNumberSecond}
              disabled
            />
          </div>
          <div className="userInfoInputText">주소</div>
          <div className="grid">
            <input
              className="userInfoInput address"
              value={ocrInfo.address}
              disabled
            />
            <input
              className="userInfoInput address"
              value={ocrInfo.addressDetail}
              disabled
            />
          </div>
        </div>
      </div>
      <VerificationBtn params={btnParams} />
    </>
  );
}

export default MacUserInfo;
