// import AuthCheckModalContent from "@/components/JoinPlatform/authcheck-modalcontent";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
// import AuthCheckModal from "@/components/Modal/authentication-modal";
import { authCheckAtom, memberAtom, userIdVerifiedAtom } from "@/stores";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function JoinIdVerification() {
  const navigate = useNavigate();
  const [memberInfo, setMemberInfo] = useAtom(memberAtom);
  const [userIdVerified, setUserIdVerified] = useAtom(userIdVerifiedAtom); // global id verification info
  // const [authCheckData, setAuthCheckData] = useAtom(authCheckAtom);

  // number, phone
  const [name, setName] = useState("");
  const [telf, setTelf] = useState(""); // first
  const [tels, setTels] = useState(""); // second
  const [telt, setTelt] = useState(""); // third
  // auth timer
  const [timer, setTimer] = useState(300);
  const [isTimerActive, setIsTimerActive] = useState(false);
  // auth number check
  const [authNumber, setAuthNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const makePhoneNumber = (first, second, third) => {
    return first + "-" + second + "-" + third;
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const sendAuthenticationNumber = () => {
    const phoneNumber = telf + tels + telt;

    fetch(`${import.meta.env.VITE_BE_URI}/auth/sms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        phoneNumber: `${phoneNumber}`
      })
    }).then((response) => console.log(response));

    setIsTimerActive(true);
  };

  const smsCertificationDto = {
    phoneNumber: telf + tels + telt,
    certificationCode: authNumber
  };

  const checkAuthenticationNumber = () => {
    console.log(smsCertificationDto);
    setIsSubmitting(true);
  };

  // 코드 확인 요청 보내기
  const isAuthenticated = useQuery({
    queryKey: ["is-authenticated"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URI}/auth/sms-verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(smsCertificationDto)
        }
      );

      return response.json();
    },
    enabled: isSubmitting
  });

  const joinIdVerificationParams = {
    btnText: "다음",
    onClick: () => {
      setMemberInfo((prev) => ({
        ...prev,
        name: name,
        phoneNumber: makePhoneNumber(telf, tels, telt)
      }));
      navigate(`/platform/join/accountlink`);
      console.log(memberInfo);
    }
  };

  // useEffect -> timer
  useEffect(() => {
    let interval = null;

    if (isTimerActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimerActive]);

  // useEffect -> check authentication
  useEffect(() => {
    if (isAuthenticated.data) {
      if (isAuthenticated.data.isSuccess) {
        setUserIdVerified(true);
        document.querySelector(".authCheckInfo").innerHTML =
          "인증에 성공했습니다";
      } else {
        console.log("인증에 실패했습니다.");
        document.querySelector(".authCheckInfo").innerHTML =
          "인증에 실패했습니다";
      }
      setIsSubmitting(false);
    }
  }, [isAuthenticated.data]);

  return (
    <>
      <div className="joinIdVerificationDiv">
        <div className="title">본인 인증</div>
        <div className="content">
          <div className="userInfoInputText">이름</div>
          <input
            className="userInfoInput"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="userInfoInputText">전화번호</div>
          <div className="flex">
            <input
              className="userInfoInput tel1"
              onChange={(e) => setTelf(e.target.value)}
            />{" "}
            -{" "}
            <input
              className="userInfoInput tel2"
              onChange={(e) => setTels(e.target.value)}
            />{" "}
            -{" "}
            <input
              className="userInfoInput tel2"
              onChange={(e) => setTelt(e.target.value)}
            />
          </div>
          <div className="flex">
            <div className="userInfoInputText">인증번호 입력</div>
            <div
              className="joinNumberCheck"
              onClick={() => sendAuthenticationNumber()}
            >
              인증번호 받기
            </div>
          </div>
          <div className="flex">
            <div>
              <input
                className="userInfoInput vnm"
                onChange={(e) => setAuthNumber(e.target.value)}
                // placeholder="5분이내에 인증번호를 입력해주세요"
              />
              <div className="joinIdVerificationNotify time">
                {formatTime()}
              </div>
              <div className="joinIdVerificationNotify">
                5분 이내에 인증번호를 입력해주세요
              </div>
            </div>

            <div
              className="joinNumberCheck small"
              onClick={() => checkAuthenticationNumber()}
            >
              확인
            </div>
          </div>

          <div className="authCheckInfo"></div>
        </div>
      </div>
      {/* <AuthCheckModal /> */}
      {userIdVerified ? (
        <VerificationBtn params={joinIdVerificationParams} />
      ) : (
        ""
      )}
    </>
  );
}

export default JoinIdVerification;
