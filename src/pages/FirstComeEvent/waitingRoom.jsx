import React, { useState, forwardRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "@/assets/images/firstComeEvent/firstComeEventBanner.svg";
import ticketImg from "@/assets/images/firstComeEvent/ticket.svg";
import Button from "@/components/Button";

import axios from "axios";
import "./waitingRoom.scss";
import { WhiteFooter } from "@/layouts";

const WaitingRoom = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    console.log("ff");
    navigate("/firstComeEvent/play");
    // try {
    //   const response = await axios.post("/api/event/participate", {
    //     userId: "yourUserId"
    //   });
    //   if (response.data.success) {
    //     setResponseMessage("참여 성공!");
    //   } else {
    //     setResponseMessage("참여 실패!");
    //   }
    // } catch (error) {
    //   console.error("Error participating in event:", error);
    //   setResponseMessage("오류 발생!");
    // }
  };

  return (
    <>
      <div className="waitingRoom-container">
        <div className="header">
          <div className="back">&lt;</div>
          <div>선착순 이벤트</div>
          <div className="row-dummy"></div>
        </div>
        <div className="content">
          <div className="banner-image-container">
            <img src={bannerImg} alt="배너 이미지" />
          </div>
          <div className="highlight-text">
            <div>빠르게 달려!</div>
            <div>티켓을 잡아라!</div>
          </div>
          <div className="ticket-image-container">
            <img src={ticketImg} alt="배너 이미지" />
          </div>
          <div className="button-container">
            <Button
              style={{
                backgroundColor: "#FFFFFF",
                position: "absolute",
                bottom: "10px",
                color: "black"
              }}
              onClick={handleButtonClick}
            >
              입장하기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingRoom;
