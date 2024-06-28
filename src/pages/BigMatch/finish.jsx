import React from "react";
import "./finish.scss";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

function Finish() {
  const navigate = useNavigate();

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
            <div className="prison" />
            <div className="user-names">
              <div className="user-container">
                <div className="user-profile" />
                <div className="user-name">젼</div>               
              </div>
            </div>
          </div>
          <Button className="btn" onClick={() => {}}>
            확인
          </Button>
        </div>
      </div>
    </>
  );
}

export default Finish;
