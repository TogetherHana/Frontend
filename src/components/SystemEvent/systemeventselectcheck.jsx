import React from "react";
import SystemEventCheckBtn from "./systemeventcheckbtn";

function SystemEventSelectCheck({ teamnm, matchnm, img }) {
  return (
    <div className="SystemEventSelectCheckDiv">
      <div>{matchnm}</div>
      <div
        className="content"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5
        }}
      ></div>
      <div className="mt-4">
        {teamnm}의 승리를
        <br /> 예측하시겠습니까?
      </div>
      <div className="btnDiv">
        <SystemEventCheckBtn content={"아니오"} istrue={false} />
        <SystemEventCheckBtn content={"예"} istrue={true} />
      </div>
    </div>
  );
}

export default SystemEventSelectCheck;
