import MaskingPwArea from "@/components/MeetingAccount/SetAccountInfo/maskingpwarea";
import NumberKeyPad from "@/components/MeetingAccount/SetAccountInfo/numberkeypad";
import React from "react";
import { useNavigate } from "react-router-dom";

function MacSetAccountPW({ title, config }) {
  const navigate = useNavigate();

  const handleNextPage = (config) => {
    return config === "check"
      ? () => navigate(`/maccount/register/setaccountpw/check`)
      : () => navigate(`/maccount/register/createdinfo`);
  };

  return (
    <>
      <div className="setAccountNameMain">
        <div className="setAccountNameTitle">{title}</div>
        {/* 숫자 입력되면 마스킹 처리 */}
        <div className="maskingPWDiv">
          <MaskingPwArea />
          <MaskingPwArea />
          <MaskingPwArea />
          <MaskingPwArea />
        </div>
      </div>
      {/* 키패드 */}
      <NumberKeyPad onClick={handleNextPage()} />
    </>
  );
}

export default MacSetAccountPW;
