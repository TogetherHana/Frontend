import React from "react";
// @ts-ignore
import smile from "@/assets/images/smile.svg";
// @ts-ignore
import arrow from "@/assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";

function JoinIntro() {
  const navigate = useNavigate();

  return (
    <div className="joinIntroDiv">
      {/* title */}
      <div>
        <div className="joinIntroSquare">함께, 하나</div>
        <div className="joinIntroBasic">가입하고</div>
        <div className="joinIntroSquare large">
          스포츠 이벤트와
          <br />
          마일리지 혜택
        </div>
        <div className="joinIntroBasic">누리자!</div>
      </div>
      {/* image */}
      <img src={smile} alt="smile" className="joinIntroSmile" />
      {/* button */}
      <div
        className="joinIntroNextDiv"
        onClick={() => navigate(`/platform/join/idverification`)}
      >
        <div>함께, 하기</div>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
}

export default JoinIntro;
