import React, { useEffect, useState } from "react";
import "./baseball_home.scss";
import Button from "@/components/Button";
import Friends from "./friends";
import History from "./history";
import BigmatchHistory from "./bigmatch_history";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import {
  sportSharingAccountIdxAtom,
  sportSharingAccountNameAtom,
  sportSharingAccountNumAtom
} from "@/stores";

function BaseballHome() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("입출금"); // 어떤 버튼이 선택되었는지를 나타내는 상태
  const remainBalance = localStorage.getItem("latestRemainBalance");

  // const [searchParams] = useSearchParams(); // 메인홈에서 받아오는 모임통장 계좌idx랑 계좌이름
  // const account_idx = searchParams.get("idx");
  // const account_name = searchParams.get("name");

  const [sportSharingAccountIdx] = useAtom(sportSharingAccountIdxAtom); // 모임통장 인덱스
  const [sportSharingAccountName] = useAtom(sportSharingAccountNameAtom); // 모임통장 계좌이름
  const [sportSharingAccountNum] = useAtom(sportSharingAccountNumAtom); // 모임통장 계좌번호

  // useEffect(() => {
  //   if (account_idx && account_name) {
  //     // localStorage.setItem('account_idx', account_idx);
  //     localStorage.setItem("account_name", account_name);
  //   }
  // }, [account_idx, account_name]);

  const handleButtonClick = (button) => {
    setSelectedButton(button); // 클릭된 버튼의 이름을 상태로 설정
  };

  const getButtonStyle = (button) => ({
    width: "100%",
    textAlign: "center",
    borderBottom:
      selectedButton === button ? "1px solid #44BD91" : "1px solid #868686",
    margin: "10px 0 20px",
    color: selectedButton === button ? "#44BD91" : "#868686",
    cursor: "pointer"
  });

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  // const memberIdx = 1;

  const collectFee = () => {
    navigate("/fee");
  };

  const sendFee = () => {
    navigate("/send");
  };

  return (
    <>
      <div className="baseballhome-container">
        <div className="header">
          <div className="back" onClick={() => navigate("/memberhome")}>
            &lt;
          </div>
          <div>모임통장 거래내역</div>
          <div className="row-dummy"></div>
        </div>

        <div className="top-container">
          <div className="account-title">
            <div className="baseball-image" />
            <div className="account-name">{sportSharingAccountName}</div>
          </div>
          <div className="account-number">하나 {sportSharingAccountNum}</div>
          <div className="account-amount">{formatNumber(remainBalance)} 원</div>
          <div className="col-dummy" />
          <div className="fee-btns">
            <Button className="fee-collect" onClick={collectFee}>
              회비 걷기
            </Button>
            <Button className="fee-send" onClick={sendFee}>
              보내기
            </Button>
          </div>
        </div>

        <div className="bottom-container">
          <div className="components">
            <div className="component">
              <div
                onClick={() => handleButtonClick("입출금")}
                // @ts-ignore
                style={getButtonStyle("입출금")}
              >
                입출금
              </div>
            </div>
            <div className="component">
              <div
                onClick={() => handleButtonClick("친구")}
                // @ts-ignore
                style={getButtonStyle("친구")}
              >
                친구
              </div>
            </div>
            <div className="component">
              <div
                onClick={() => handleButtonClick("빅매치")}
                // @ts-ignore
                style={getButtonStyle("빅매치")}
              >
                빅매치
              </div>
            </div>
          </div>

          {selectedButton === "입출금" && <History />}
          {selectedButton === "친구" && <Friends />}
          {selectedButton === "빅매치" && <BigmatchHistory />}
        </div>
      </div>
    </>
  );
}

export default BaseballHome;
