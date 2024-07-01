
import "./fee_send.scss";
import Button from "@/components/Button";
import { useAtom } from "jotai";
import { amountAtom, characterAtom } from "@/stores";
import { useNavigate } from "react-router-dom";


import BankList from "@/components/JoinPlatform/banklist";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
import { atom, useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
// import JoinAuthentication from "./joinauthentication";

export const selectBankAtom = atom(null);

function FeeSend() {
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  //   const [selectBank, setSelectBank] = useState();
  const selectBank = useAtomValue(selectBankAtom);

  useEffect(() => {}, [selectBank, accountNumber]);

  console.log(accountNumber);

  const joinAccountLinkParams = {
    btnText: "인증하기",
    onClick: () => setIsAuthPopupOpen(!isAuthPopupOpen)
  };

  return (
    <>
      <div className="collect-container">
        <div className="header">
          <div className="back" onClick={() => navigate(-1)}>
            &lt;
          </div>
          <div>모임통장 돈 보내기</div>
          <div className="row-dummy"></div>
        </div>

        <div>
      <div className="joinAccountLinkTitle">계좌연동</div>
      {/* 은행선택 */}
      <div
        className="userInfoInput bs"
        onClick={() => setIsPopupOpen(!isPopupOpen)}
      >
        {selectBank === null ? "은행 선택" : selectBank}
      </div>
      {/* 계좌번호 */}
      <input
        className="userInfoInput acnm"
        placeholder="계좌번호 입력"
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <ModalBottomUp
        isPopupOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        snapPoints={[500]}
        content={<BankList />}
      />
      <VerificationBtn params={joinAccountLinkParams} />
      {/* <ModalBottomUp
        isPopupOpen={isAuthPopupOpen}
        onClose={() => setIsAuthPopupOpen(false)}
        snapPoints={[500]}
        content={<JoinAuthentication />}
      /> */}
    </div>

        
      </div>
    </>
  );
}

export default FeeSend;
