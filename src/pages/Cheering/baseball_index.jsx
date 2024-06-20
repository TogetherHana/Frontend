import React from "react";
import "./baseball_style.scss";
import { useNavigate } from "react-router-dom";

function Baseball() {
  const navigate = useNavigate();

  return (
    <>
      <div className="baseballTeam-container">
        <div className="header">
          <div className="back" onClick={() => navigate("/choice/team")}>
            &lt;
          </div>
          <div>My 응원팀 선택</div>
          <div className="row-dummy"></div>
        </div>

        <div className="content">
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="background-logo" />
          <div className="text-overlay">
            <div>2024 KBO리그</div>
            <div>함께, 하나!</div>
            <div className="plus">응원팀을 선택하면 경기 일정, 팀순위,</div>
            <div className="plus">선수순위 등 My팀 맞춤 정보가 제공돼요</div>
          </div>
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="col-dummy" />
        </div>                

        <div className="logo-container">
          <div className="logo-line">
            <div className="nc" />
            <div className="hanwha" />
            <div className="Lions" />
          </div>
          <div className="logo-line">
            <div className="LG" />
            <div className="KT" />
            <div className="Lotte" />
          </div>
          <div className="logo-line">
            <div className="Doosan" />
            <div className="Kia" />
            <div className="Kiwoom" />
          </div>
          <div className="logo-line">
            <div className="SSG" />      
            <div className="dummy" />
            <div className="check" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Baseball;
