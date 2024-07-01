import React from "react";
// @ts-ignore
import coin from "@/assets/images/coin.svg";
// @ts-ignore
import hana2 from "@/assets/images/hana2.svg";

function JoinAuthentication({ params }) {
  return (
    <div className="joinAuthenticationImg">
      <img src={coin} alt="coin" />
      <img src={hana2} alt="hana" className="down" />
      <div className="top">{params.accountNumber}</div>
      <div className="joinAuthenticationDetail">
        {params.name} 님 통장이 맞는지
        <br />
        확인하기 위해
        <br />
        1원을 보내볼게요
      </div>
    </div>
  );
}

export default JoinAuthentication;
