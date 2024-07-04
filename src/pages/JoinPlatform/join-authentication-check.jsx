import React, { useEffect, useState } from "react";
// @ts-ignore
import authenticationex from "@/assets/images/joinmembership/authenticationex.svg";
import { authCheckAtom, memberAtom } from "@/stores";
import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import AuthCheckModal from "@/components/Modal/authenticationmodal";
import AuthCheckModalContent from "@/components/JoinPlatform/authcheck-modalcontent";
import { useNavigate } from "react-router-dom";

function JoinAuthenticationCheck() {
  const navigate = useNavigate();

  const [numberCode, setNumberCode] = useState("");
  const [memberInfo, setMemberInfo] = useAtom(memberAtom);
  const [authCheckData, setAuthCheckData] = useAtom(authCheckAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accountCertificationDto = {
    accountNumber: memberInfo.accountNumber,
    certificationNumber: numberCode
    // accountNumber: memberInfo.accountNumber
  };

  const isAccountAuthentication = useQuery({
    queryKey: ["is-accountauthentication"],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8080/auth/account-verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(accountCertificationDto)
        }
      );
      return response.json();
    },
    enabled: isSubmitting
  });

  const checkNumberCode = () => {
    setIsSubmitting(true);
    // 숫자코드 입력 인증 -> 모달 다음 or 닫기
    if (isAccountAuthentication.data) {
      if (isAccountAuthentication.data.isSuccess) {
        const contentParams = {
          content: "인증되었습니다",
          content2: "다음",
          onClick: () => {
            setIsSubmitting(false);
            navigate("/platform/join/setnickname");
          }
        };

        setAuthCheckData((prev) => ({
          ...prev,
          isOpen: !prev.isOpen,
          content: <AuthCheckModalContent params={contentParams} />
        }));
      } else {
        const contentParams = {
          content: "인증번호를 다시 입력해주세요",
          content2: "닫기",
          onClick: () => {
            // useQuery
            setIsSubmitting(false);
            setAuthCheckData((prev) => ({
              ...prev,
              isOpen: !prev.isOpen
            }));
          }
        };

        setAuthCheckData((prev) => ({
          ...prev,
          isOpen: !prev.isOpen,
          content: <AuthCheckModalContent params={contentParams} />
        }));
      }
    }
  };

  return (
    <div>
      <div className="joinAuthenticationCheckTitle">
        거래내역 확인 후<br />
        3자리 숫자를 입력해주세요
      </div>
      <img
        src={authenticationex}
        alt="1원인증"
        className="joinAuthenticationCheckImg"
      />
      <div className="flex">
        <input
          className="userInfoInput acnm2"
          placeholder="숫자코드 입력"
          onChange={(e) => setNumberCode(e.target.value)}
        />
        <div
          className="joinAuthenticationCheckBtn auth"
          onClick={() => checkNumberCode()}
        >
          확인
        </div>
      </div>
      <AuthCheckModal />
    </div>
  );
}

export default JoinAuthenticationCheck;
