import MaskingPwArea from "@/components/MeetingAccount/SetAccountInfo/maskingpwarea";
import NumberKeyPad from "@/components/MeetingAccount/SetAccountInfo/numberkeypad";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "@/assets/images/back.svg";
import Button from "@/components/Button";
import { maccountAtom } from "@/stores";
import { useAtom } from "jotai";

function MacSetAccountPWCheck({ title, config }) {
  const navigate = useNavigate();
  const [accountPW, setAccountPW] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [macInfo, setMacInfo] = useAtom(maccountAtom);

  // const handleNextPage = (config) => {
  //   return config === "check"
  //     ? () => navigate(`/maccount/register/setaccountpw/check`)
  //     : () => navigate(`/maccount/register/createdinfo`);
  // };

  console.log(macInfo);
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
    navigate("/maccount/register/createdInfo");
  };

  useEffect(() => {
    console.log(isChecked);
    if (accountPW.length == 4) {
      if (accountPW.join("") === macInfo.accountPassword) {
        setIsChecked(true);
        console.log(typeof accountPW.join(""));
        console.log(typeof macInfo.accountPassword);
      }
    }
  }, [accountPW]);

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
          isChecked ? (
            <Button onClick={() => handlePWBtn()} className="numberKeyPadBtn">
              다음
            </Button>
          ) : (
            <div className="checkedFalse">
              비밀번호가 일치하지 않습니다
              <br /> 다시 입력해주세요
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default MacSetAccountPWCheck;
