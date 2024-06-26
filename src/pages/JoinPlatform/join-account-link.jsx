import BankList from "@/components/JoinPlatform/banklist";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
import { atom, useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import JoinAuthentication from "./join-account-authentication";

export const selectBankAtom = atom(null);

function JoinAccountLink() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  //   const [selectBank, setSelectBank] = useState();
  const selectBank = useAtomValue(selectBankAtom);

  const accountParams = {
    accountNumber: accountNumber,
    name: "김철수"
  };

  useEffect(() => {}, [selectBank, accountNumber]);

  // console.log(accountNumber);

  const joinAccountLinkParams = {
    btnText: "인증하기",
    onClick: () => setIsAuthPopupOpen(!isAuthPopupOpen)
  };

  return (
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
      {/* BankList params -> 선택된 값들로 바뀌어야 함 */}
      <ModalBottomUp
        isPopupOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        snapPoints={[500]}
        content={<BankList />}
      />
      <VerificationBtn params={joinAccountLinkParams} />
      <ModalBottomUp
        isPopupOpen={isAuthPopupOpen}
        onClose={() => setIsAuthPopupOpen(false)}
        snapPoints={[500]}
        content={<JoinAuthentication params={accountParams} />}
      />
    </div>
  );
}

export default JoinAccountLink;
