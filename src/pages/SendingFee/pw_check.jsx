import MaskingPwArea from "@/components/MeetingAccount/SetAccountInfo/maskingpwarea";
import NumberKeyPad from "@/components/MeetingAccount/SetAccountInfo/numberkeypad";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "@/assets/images/back.svg";
import Button from "@/components/Button";
import { sendFeeAtom, sportSharingAccountIdxAtom } from "@/stores";
import { useAtom } from "jotai";
import axios from "axios";

function SendPWcheck() {
  const navigate = useNavigate();
  const [accountPW, setAccountPW] = useState([]);
  const [sportSharingAccountIdx] = useAtom(sportSharingAccountIdxAtom); // 모임통장 인덱스
  const [sendData, setSendData] = useAtom(sendFeeAtom);

  const handleNumberClick = (number) => {
    if (accountPW.length < 4) {
      setAccountPW([...accountPW, number]);
    }

    console.log(accountPW);
  };

  const handleNumberCancel = () => {
    setAccountPW(accountPW.slice(0, -1));
  };

  const handlePWBtn = async () => {
    setSendData({ ...sendData, accountPassword: accountPW.join("") });

    console.log("---- 자 이제 확인해보자 ----");
    console.log(`모임통장 idx: ${sportSharingAccountIdx}`);
    console.log(`받는 사람의 계좌번호: ${sendData.receiveAccountNumber}`);
    console.log(`받는 사람: ${sendData.receiver}`);
    console.log(`송금할 금액: ${sendData.amount}`);
    console.log(`모임통장 비밀번호: ${accountPW.join("")}`);

    const transferRequest = {
      sharingAccountIdx: sportSharingAccountIdx,
      receiveAccountNumber: sendData.receiveAccountNumber,
      receiver: sendData.receiver,
      amount: parseInt(sendData.amount.replace(/,/g, ""), 10),
      accountPassword: accountPW.join("")
    };

    const jwtToken = localStorage.getItem("jwtToken");
    console.log("---토큰값 있나?---");
    console.log(jwtToken);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BE_URI}/sharing-account/withdraw`,
        transferRequest,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`
          }
        }
      );

      console.log("--------------------------------------");
      console.log(response.data);

      if(!response.data.isSuccess){
        alert(response.data.message);
      }
      else{
        navigate("/baseball/home");
      }      
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Axios error:", error.message);
      }
    }
  };

  useEffect(() => {}, [accountPW]);

  return (
    <>
      <div className="setAccountNameMain">
        <div className="setAccountNameTitle">계좌 비밀번호 확인</div>
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

export default SendPWcheck;
