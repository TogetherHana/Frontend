import React, { useEffect, useState } from "react";
import "./finish.scss";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

function Finish() {
  const navigate = useNavigate();
  const [losers, setLosers] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 데이터를 가져와 상태에 저장
    const storedLosers = JSON.parse(localStorage.getItem("losers")) || [];
    setLosers(storedLosers);
  }, []);

  // Calculate height based on the number of losers
  const prisonHeight = Math.max(200, 60 * losers.length); // Minimum height of 200px, increase by 60px for each loser

  return (
    <>
      <div className="finish-container">
        <div className="header">
          <div className="back">&lt;</div>
          <div>빅매치 겨루기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="title-container">
          <div>
            두산 VS 롯데
            <br />
            오늘의 승자는?
          </div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid black",
              margin: "10px 0 20px"
            }}
          />
        </div>

        <div className="content-container">
          <div className="pirate" />
          <div className="col-dummy" />
          <div>
            패배자들에게 벌금 송금
            <br />
            요청을 보냅니다.
          </div>
          <div className="hook" />
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="losers">
            <div className="prison" style={{ height: `${prisonHeight}px` }} />
            <div className="user-names">
              {losers.map((loser, index) => (
                <div className="user-container" key={index}>
                  <div className="user-profile" />
                  <div className="user-name">{loser.nickname}</div>
                </div>
              ))}
            </div>
          </div>          
        </div>
        <div className="col-dummy" />
        <div className="col-dummy" />
        <Button
            className="btn"
            onClick={() => {
              navigate("/baseball/home");
            }}
          >
            확인
          </Button>
      </div>
    </>
  );
}

export default Finish;
