import React from "react";
// @ts-ignore
import bank from "@/assets/images/meetaccountinfo/bank.svg";
import "./register.scss";

function Register1() {
  return (
    <div className="registerDiv">
      <h2 className="registerIntro">스포츠 모임 통장</h2>
      <div className="registerBasic">
        함께 쓰는 돈, <br /> 함께 모아보세요
      </div>
      <div className="registerImgDiv">
        <img src={bank} alt="bank" />
      </div>
    </div>
  );
}

export default Register1;
