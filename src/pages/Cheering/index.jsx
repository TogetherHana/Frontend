import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function Cheering() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sportstype-container">
        <div className="header">
          <div className="back">&lt;</div>
          <div>종목 선택</div>
          <div className="row-dummy"></div>
        </div>

        <div className="content">
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div>관심있는</div>
          <div>스포츠 종목 선택</div>
          <div className="plus">중복선택가능</div>
          <div className="col-dummy" />
          <button
            className="type-button"
            onClick={() => navigate("/choice/team/baseball")}
          >
            <div className="baseball" />
            <div className="text">야구</div>
          </button>
          <div className="col-dummy" />
          <button className="type-button">
            <div className="soccer" />
            <div className="text">축구</div>
          </button>
          <div className="col-dummy" />
          <button className="type-button">
            <div className="esports" />
            <div className="text">e-sports</div>
          </button>
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="col-dummy" />
        </div>
      </div>
    </>
  );
}

export default Cheering;
