import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function Main() {
  //const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSpinner ? (
        <div className="grid h-screen">
          <div className="spinnerContainer">
            {/* <div className="spinner"></div> */}
            <div className="loader">
              <p>함께, </p>
              <div className="words">
                <span className="word"></span>
                <span className="word">야구</span>
                <span className="word">축구</span>
                <span className="word">E-스포츠</span>
                <span className="word">하나!</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
            디바이스 토큰
            <br /> 검증하는 중
          </div>
          <div className="mainSub">
            함께 성장하며
            <br />
            행복을 나누는 금융
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
