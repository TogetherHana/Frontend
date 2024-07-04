import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function JoinRegisterProcessing() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => navigate("/platform/join/complete"), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>
      <div className="mainTitle">
        회원가입 처리중입니다
        <br /> 잠시만 기다려주세요
      </div>
      <div className="mainSub">
        함께 성장하며
        <br />
        행복을 나누는 금융
      </div>
    </div>
  );
}

export default JoinRegisterProcessing;
