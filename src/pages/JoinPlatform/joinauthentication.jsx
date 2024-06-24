import React from "react";
// @ts-ignore
import coin from "@/assets/images/coin.svg";
// @ts-ignore
import hana2 from "@/assets/images/hana2.svg";

function JoinAuthentication() {
  return (
    <div>
      <img src={coin} alt="coin" className="joinAuthenticationImg" />
      <img src={hana2} alt="hana" className="joinAuthenticationImg down" />
      <div className="joinAuthenticationDetail top">793-427104-94857</div>
      <div className="joinAuthenticationDetail">
        김철수 님 통장이 맞는지
        <br />
        확인하기 위해
        <br />
        1원을 보내볼게요
      </div>
    </div>
  );
}

export default JoinAuthentication;
