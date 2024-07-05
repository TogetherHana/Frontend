import React, { useState, forwardRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ticketImg from "@/assets/images/firstComeEvent/ticket.svg";
import successImg from "@/assets/images/firstComeEvent/success.svg";
import failImg from "@/assets/images/firstComeEvent/fail.svg";
import Button from "@/components/Button";

import axios from "axios";
import "./play.scss";
import { WhiteFooter } from "@/layouts";

const Play = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  console.log(localStorage.getItem("playingGameIdx"));
  const jwtToken = localStorage.getItem("jwtToken");
  console.log("---토큰값 있나?---");
  console.log(jwtToken);

  const handleTicketClick = async () => {
    setShowModal(true);
    setResponseMessage("success");
    try {
      const response = await axios.post("/event/get-ticket", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`
        }
      });
      if (response.data == true) {
        setResponseMessage("success");
      } else {
        setResponseMessage("fail");
      }
    } catch (error) {
      console.error("서버 연결 에러", error);
      setResponseMessage("error");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="play-container">
        <div className="header">
          <div className="back">&lt;</div>
          <div>선착순 이벤트</div>
          <div className="row-dummy"></div>
        </div>
        <div className="content">
          <div className="highlight-text">
            <div>전광판의</div>
            <div>티켓을 클릭하세요!</div>
          </div>
          <div className="ticket-image-container" onClick={handleTicketClick}>
            <img src={ticketImg} alt="티켓 이미지" />
          </div>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content" onClick={closeModal}>
              &times;
              {responseMessage === "success" && (
                <>
                  <p className="modal-light-text">너무 빠르네요</p>
                  <p className="modal-highlight-text">축하합니다!</p>
                  <img src={successImg} alt="성공 이미지" />
                  <hr />
                  <p>
                    공지된 당첨자 발표일에 이벤트 당첨자 게시판에서 확인하세요.
                  </p>
                  <br />
                  <p>
                    당첨 상품은 가입 시 입력하신 정보(휴대전화)로 발송되오니 꼭
                    확인 바랍니다.
                  </p>
                </>
              )}
              {responseMessage === "fail" && (
                <>
                  <p className="modal-light-text">아쉽네요</p>
                  <p className="modal-highlight-text">다음기회에!</p>
                  <img src={failImg} alt="실패 이미지" />
                  <hr />
                  <p>다음 기회에 다시 참여해주세요.</p>
                </>
              )}
              {responseMessage === "error" && (
                <>
                  <p className="modal-light-text">
                    오류가 발생했습니다. 다시 시도해주세요!
                  </p>
                  <hr />
                  <p>오류가 계속되면 고객센터로 문의 바랍니다.</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Play;
