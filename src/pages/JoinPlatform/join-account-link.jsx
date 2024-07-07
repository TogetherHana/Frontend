import BankList from "@/components/JoinPlatform/banklist";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
import { atom, useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import JoinAuthentication from "./join-account-authentication";
import {
  accountAtom,
  bankSelectAtom,
  initialModalState,
  memberAtom
} from "@/stores";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const selectBankAtom = atom(null);

function JoinAccountLink() {
  const navigate = useNavigate();

  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpenData, setIsPopupOpenData] = useAtom(bankSelectAtom);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  // const [selectBank, setSelectBank] = useState("");
  const [bankSelect, setBankSelect] = useAtom(accountAtom);
  const [memberInfo, setMemberInfo] = useAtom(memberAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const parseAccountNumber = (number) => {
    return (
      number.substring(0, 3) +
      " - " +
      number.substring(3, 9) +
      " - " +
      number.substring(9)
    );
  };

  const accountParams = {
    accountNumber: parseAccountNumber(accountNumber),
    name: memberInfo.name
  };

  const joinAccountLinkParams = {
    btnText: "인증하기",
    onClick: () => {
      setIsSubmitting(true);
    }
  };

  const isAccountValidate = useQuery({
    queryKey: ["is-accountvalidate"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URI}/auth/account-check`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            accountNumber: accountNumber,
            bankName: bankSelect
          })
        }
      );
      return response.json();
    },
    enabled: isSubmitting
  });

  useEffect(() => {}, [bankSelect, accountNumber]);

  useEffect(() => {
    if (isAccountValidate.data) {
      setIsSubmitting(false);
      if (isAccountValidate.data.isSuccess) {
        // console.log("success");
        setMemberInfo((prev) => ({
          ...prev,
          accountNumber: accountNumber
        }));
        setIsAuthPopupOpen(!isAuthPopupOpen);

        const timer = setTimeout(() => {
          setIsAuthPopupOpen(!isAuthPopupOpen);
          navigate("/platform/join/authentication/check");
        }, 3000);

        return () => clearTimeout(timer);
      } else {
        // console.log("failed");
        // setIsAuthPopupOpen(!isAuthPopupOpen);
      }
    }
  }, [isAccountValidate.data]);

  return (
    <div>
      <div className="joinAccountLinkTitle">계좌연동</div>
      {/* 은행선택 */}
      <div
        className="userInfoInput bs"
        onClick={() =>
          setIsPopupOpenData((prev) => ({
            ...prev,
            isOpen: !isPopupOpenData.isOpen
          }))
        }
      >
        {bankSelect === "" ? "은행 선택" : bankSelect}
      </div>
      {/* 계좌번호 */}
      <input
        className="userInfoInput acnm"
        placeholder="계좌번호 입력( - 제외, 14자리)"
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      {/* BankList params -> 선택된 값들로 바뀌어야 함 */}
      <ModalBottomUp
        isPopupOpen={isPopupOpenData.isOpen}
        onClose={() => setIsPopupOpenData(initialModalState)}
        snapPoints={[500]}
        content={<BankList />}
      />
      {bankSelect !== "" && accountNumber.length >= 14 ? (
        <VerificationBtn params={joinAccountLinkParams} />
      ) : (
        ""
      )}
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
