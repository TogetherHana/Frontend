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
import JoinAuthentication from "../JoinPlatform/join-account-authentication";
// import JoinAuthentication from "./joinauthentication";

export const selectBankAtom = atom(null);

function FeeSend() {
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const selectBank = useAtomValue(selectBankAtom);

  useEffect(() => {}, [selectBank, accountNumber]);

  console.log(accountNumber);


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

        <div className="content">
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="title">어디로 보내시나요?</div>
          <div
            className="toSend"
            onClick={() => setIsPopupOpen(!isPopupOpen)}
          >
            {selectBank === null ? "은행 선택" : selectBank}
          </div>
          <input
            className="toSend"
            placeholder="계좌번호 입력"
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <ModalBottomUp
            isPopupOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            snapPoints={[500]}
            content={<BankList />}
          />
        </div>
      </div>
    </>
  );
}

export default FeeSend;
