import React, { useEffect } from "react";
import Spinner from "@/assets/Spin@1x-1.0s-200px-200px.gif";
import { useNavigate } from "react-router-dom";

function HomeDataProcessing() {
  return (
    <div className="homeDataProcessing">
      <img src={Spinner} alt="spinner" />
      <div>
        로딩중입니다
        <br />
        잠시만 기다려주세요!
      </div>
    </div>
  );
}

export default HomeDataProcessing;
