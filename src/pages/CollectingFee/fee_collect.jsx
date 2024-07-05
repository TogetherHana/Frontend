import React from "react";
import "./fee_collect.scss";
import Button from "@/components/Button";
import { useAtom } from "jotai";
import {
  accessTokenATom,
  amountAtom,
  characterAtom,
  sportSharingAccountFriendsAtom,
  sportSharingAccountIdxAtom
} from "@/stores";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

const images = {
  Hanwha: ["Hanwha_second"],
  Kia: ["Kia_second"],
  Kiwoom: ["Kiwoom_second"],
  KT: ["KT_second"],
  LG: ["LG_second"],
  Lions: ["Lions_second"],
  Lotte: ["Lotte_second"],
  nc: ["Nc_second"],
  ssg: ["Ssg_second"],
  Doosan: ["Ssg_second"]
};

const getRandomImage = (key) => {
  return images[key];
};

function FeeCollect() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useAtom(amountAtom);
  const [randomImageKey, setRandomImageKey] = useAtom(characterAtom);
  const [sportSharingAccountIdx] = useAtom(sportSharingAccountIdxAtom); // 모임통장 인덱스
  const [sportSharingAccountFriends] = useAtom(sportSharingAccountFriendsAtom); // 모임통장 모임원수
  // const jwtToken = useAtom(accessTokenATom);

  const goBack = () => {
    setInputValue("");
    navigate("/fee");
  };

  // 쉼표와 '원' 제거
  const sanitizedInputValue = inputValue.replace(/,/g, "");
  // Integer로 변환
  const numericInputValue = Number(sanitizedInputValue);
  // 나눗셈 연산
  // @ts-ignore
  const calculate = numericInputValue / sportSharingAccountFriends;
  console.log("---걷을 전체 회비는?---");
  console.log(numericInputValue);
  console.log("---모임원의 수는?---");
  console.log(sportSharingAccountFriends);
  console.log("---그럼 인당 걷을 회비는?---");
  console.log(calculate);
  const stringCalculate = calculate.toString();

  const handleCollect = async () => {
    const taxCollectRequest = {
      sharingAccountId: sportSharingAccountIdx,
      collectingAmount: numericInputValue
    };

    const jwtToken = localStorage.getItem("jwtToken");
    console.log("---토큰값 있나?---");
    console.log(jwtToken);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BE_URI}/sharing-account/collect`,
        taxCollectRequest,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`
          }
        }
      );

      console.log(response.data);
      navigate("/baseball/home");
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("No response error:", error.request);
      } else {
        console.error("Axios error:", error.message);
      }
    }
  };

  return (
    <>
      <div className="collect-container">
        <div className="header">
          <div className="back" onClick={goBack}>
            &lt;
          </div>
          <div>모임통장 회비걷기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="collect-content">
          <div className="collect-title">총 얼마 걷을래요?</div>
          <div className={`character ${getRandomImage(randomImageKey)}`} />
          <div className="collect-title">{inputValue}원</div>
          <div className="collect-sub">
            인당 {stringCalculate}원씩 회비걷기 요청을 보냅니다.
          </div>
          <div className="col-dummy2" />
        </div>

        <Button
          onClick={handleCollect}
          style={{
            alignSelf: "center",
            marginBottom: "54px"
          }}
        >
          수금요청
        </Button>
      </div>
    </>
  );
}

export default FeeCollect;
