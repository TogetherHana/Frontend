import React from "react";
// @ts-ignore
import smile from "@/assets/images/smile.svg";
// @ts-ignore
import arrow from "@/assets/images/arrow.svg";

function JoinIntro() {
  return (
    <div className="joinIntroDiv">
      <div className="joinIntroSquare">함께, 하나</div>
      <div className="joinIntroBasic">가입하고</div>
      <div className="joinIntroSquare large">
        스포츠 이벤트와
        <br />
        마일리지 혜택
      </div>
      <div className="joinIntroBasic">누리자!</div>
      <img src={smile} alt="smile" className="joinIntroSmile" />
      <div className="joinIntroNextText">함께, 하기</div>
      <img src={arrow} alt="arrow" className="joinIntroArrow" />
    </div>
  );
}

export default JoinIntro;
