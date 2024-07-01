import React from "react";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function Main() {
  const navigate = useNavigate();

  return (
    <>
      {/* <p>{data.description}</p> */}
      {/* <Button onClick={() => navigate("/")}>버튼</Button>   */}
      {/* <div className="loader">
        <div className="scanner">
          <span>Loading...</span>
        </div>
      </div> */}
      {/* <div id="page">
        <div id="container">
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="h3">함께, 하나</div>
        </div>
      </div> */}
      <div className="loader">
        <span className="loader-text">함께, 하나</span>
      </div>
    </>
  );
}

export default Main;
