import MaskingPwArea from "@/components/MeetingAccount/SetAccountInfo/maskingpwarea";
import NumberKeyPad from "@/components/MeetingAccount/SetAccountInfo/numberkeypad";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "@/assets/images/back.svg";
import Button from "@/components/Button";
import { maccountAtom } from "@/stores";
import { useAtom } from "jotai";

function MacSetAccountPW({ title, config }) {
  const navigate = useNavigate();
  const [accountPW, setAccountPW] = useState([]);
  const [macInfo, setMacInfo] = useAtom(maccountAtom);

  // const handleNextPage = (config) => {
  //   return config === "check"
  //     ? () => navigate(`/maccount/register/setaccountpw/check`)
  //     : () => navigate(`/maccount/register/createdinfo`);
  // };

  const handleNumberClick = (number) => {
    if (accountPW.length < 4) {
      setAccountPW([...accountPW, number]);
    }

    console.log(accountPW);
  };

  const handleNumberCancel = () => {
    setAccountPW(accountPW.slice(0, -1));
  };

  const handlePWBtn = () => {
    // setMacInfo((prev) => ({ ...prev, accountName: accountName }));
    setMacInfo((prev) => ({ ...prev, accountPassword: accountPW.join("") }));
    navigate("/maccount/register/setaccountpw/check");
  };

  useEffect(() => {}, [accountPW]);

  return (
    <>
      <div className="setAccountNameMain">
        <div className="setAccountNameTitle">{title}</div>
        {/* 숫자 입력되면 마스킹 처리 */}
        <div className="maskingPWDiv">
          {[0, 1, 2, 3].map((index) => (
            <MaskingPwArea
              key={index}
              digit={accountPW[index] >= 0 ? index : ""}
            />
          ))}
        </div>
      </div>
      {/* 키패드 */}
      <div className="numberKeypad">
        <div className="numberKeypadRow first">
          <div onClick={() => handleNumberClick(1)}>1</div>
          <div onClick={() => handleNumberClick(2)}>2</div>
          <div onClick={() => handleNumberClick(3)}>3</div>
        </div>
        <div className="numberKeypadRow">
          <div onClick={() => handleNumberClick(4)}>4</div>
          <div onClick={() => handleNumberClick(5)}>5</div>
          <div onClick={() => handleNumberClick(6)}>6</div>
        </div>
        <div className="numberKeypadRow">
          <div onClick={() => handleNumberClick(7)}>7</div>
          <div onClick={() => handleNumberClick(8)}>8</div>
          <div onClick={() => handleNumberClick(9)}>9</div>
        </div>
        <div className="numberKeypadRow last">
          <div></div>
          <div onClick={() => handleNumberClick(0)}>0</div>
          <div
            className="grid place-items-center"
            onClick={() => handleNumberCancel()}
          >
            <img src={back} alt="back" />
          </div>
        </div>
        {accountPW.length == 4 ? (
          <Button onClick={() => handlePWBtn()} className="numberKeyPadBtn">
            확인
          </Button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default MacSetAccountPW;
