import React from "react";
import Spinner from "@/assets/Spin@1x-1.0s-200px-200px.gif";

function MacIcRegistering() {
  return (
    <div className="macIcRegistering">
      <img src={Spinner} alt="spinner" />
      <div>
        가입중입니다
        <br />
        잠시만 기다려주세요!
      </div>
    </div>
  );
}

export default MacIcRegistering;
