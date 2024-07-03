import React, { useState } from "react";
import "./baseball_home.scss";
import Button from "@/components/Button";
import Friends from "./friends";
import History from "./history";
import BigmatchHistory from "./bigmatch_history";

import { useNavigate } from "react-router-dom";

function BaseballHome() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("입출금"); // 어떤 버튼이 선택되었는지를 나타내는 상태

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

  return (
    <>
      <div className="baseballhome-container">
        <div className="header">
          <div className="back">&lt;</div>
          <div>모임통장 거래내역</div>
          <div className="row-dummy"></div>
        </div>

        <div className="top-container">
          <div className="account-title">
            <div className="baseball-image" />
            <div className="account-name">럭키비키 다이노스</div>
          </div>
          <div className="account-number">하나 748-911260-51507</div>
          <div className="account-amount">30,000원</div>
          <div className="col-dummy" />
          <div className="btns">
            <Button
              style={{
                width: "165px",
                height: "50px",
                marginRight: "15px",
                backgroundColor: "white",
                color: "#44BD91",
                border: "1px solid #44BD91",
                boxShadow: "none"
              }}

              onClick={() => navigate("/fee")}

            >
              회비 걷기
            </Button>
            <Button
              style={{
                width: "165px",
                height: "50px",
                marginLeft: "15px",
                boxShadow: "none"
              }}
              onClick={() => navigate("/send")}
            >
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

          {selectedButton === '입출금' && <History/>}
          {selectedButton === '친구' && <Friends />}
          {selectedButton === '빅매치' && <BigmatchHistory />}
        </div>
      </div>
    </>
  );
}

export default BaseballHome;
