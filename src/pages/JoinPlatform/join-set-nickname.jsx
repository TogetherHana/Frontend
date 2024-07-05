import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import { memberAtom } from "@/stores";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function JoinSetNickName() {
  const navigate = useNavigate();
  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const [nickName, setNickName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memberInfo, setMemberInfo] = useAtom(memberAtom);

  const joinSetNickNameParams = {
    btnText: "가입하기",
    onClick: () => {
      console.log(memberInfo);
      navigate("/platform/join/infocheck");
    }
  };

  const nicknameCheck = useQuery({
    queryKey: ["is-nickname-duplicate"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URI}/member/nickname-check?nickname=${nickName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      return response.json();
    },
    enabled: isSubmitting
  });

  const checkNickName = () => {
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (nicknameCheck.data) {
      if (nicknameCheck.data.isSuccess) {
        document.querySelector(".authCheckInfoComplete").innerHTML =
          "사용가능한 닉네임입니다.";
        setDuplicateCheck(true);
        setIsSubmitting(false);
        setMemberInfo((prev) => ({
          ...prev,
          nickname: nickName
        }));
      } else {
        document.querySelector(".authCheckInfoComplete").innerHTML =
          "다른 닉네임을 사용해주세요.";
      }
    }
  }, [nicknameCheck.data]);

  return (
    <div>
      <div className="joinSetNickNameTitle">닉네임 설정</div>
      <div className="joinSetNickNameSub">
        함께, 하나?에서 사용할 닉네임을 입력해주세요
      </div>
      <input
        className="userInfoInput acnm3"
        placeholder="닉네임 입력"
        onChange={(e) => setNickName(e.target.value)}
      />
      <button
        className="joinNumberCheck middle"
        onClick={() => checkNickName()}
      >
        중복 확인
      </button>
      <div className="authCheckInfoComplete"></div>
      {duplicateCheck ? <VerificationBtn params={joinSetNickNameParams} /> : ""}
    </div>
  );
}

export default JoinSetNickName;
