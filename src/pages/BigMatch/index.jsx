import React, { useEffect, useState } from "react";
import "./style.scss";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Bigmatch() {
  const navigate = useNavigate();
  const [isVotingClosed, setIsVotingClosed] = useState(0);
  const [isVotingMember, setIsVotingMember] = useState(0);
  const [gameOptions, setGameOptions] = useState([]);
  const [gameTitle, setGameTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  console.log("----지금 진행중인 게임 idx는?----");
  console.log(localStorage.getItem("playingGameIdx"));
  const jwtToken = localStorage.getItem("jwtToken");
  console.log("---토큰값 있나?---");
  console.log(jwtToken);

  const ship = async () => {
    const gameIdx = localStorage.getItem("playingGameIdx");

    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/game/${gameIdx}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`
          }
        }
      );

      console.log(response.data.data);
      const data = response.data.data;

      setIsVotingClosed(data.isVotingClosed);
      setIsVotingMember(data.isVotingMember);
      setGameTitle(data.gameTitle);
      setGameOptions(data.gameOptionDtos);
    } catch (error) {
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("No response error:", error.request);
      } else {
        console.error("Axios error:", error.message);
      }
    }
  };

  useEffect(() => {
    ship();
  }, []);

  const handleShipButtonClick = async () => {
    if (selectedOption !== null) {
      const gameIdx = localStorage.getItem("playingGameIdx");
      try {
        const response = await axios.post(
          `http://127.0.0.1:8080/game/option`,
          {
            gameIdx: gameIdx,
            gameOptionIdx: selectedOption
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwtToken}`
            }
          }
        );

        console.log(response.data);
        window.location.reload(); // 페이지 새로고침
      } catch (error) {
        if (error.response) {
          console.error("Response error:", error.response.data);
        } else if (error.request) {
          console.error("No response error:", error.request);
        } else {
          console.error("Axios error:", error.message);
        }
      }
    } else {
      alert("옵션을 선택해주세요.");
    }
  };

  const handleOptionChange = (event) => {
    const gameOptionIdx = parseInt(event.target.id.replace("option-", ""));
    setSelectedOption(gameOptionIdx);

    // setSelectedOption(event.target.value);
  };

  const handleVictoryButtonClick = () => {
    navigate("/match/finish");
  };

  return (
    <>
      <div className="BeforeVote-container">
        <div className="header">
          <div className="back" onClick={() => navigate(-1)}>
            &lt;
          </div>
          <div>빅매치 겨루기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="title-container">
          <div>{gameTitle}</div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid black",
              margin: "10px 0 20px"
            }}
          />
        </div>
        <div className="content-container">
          {gameOptions.map((option, index) => (
            <div
              key={option.gameOptionIdx}
              className={`ship-container ${index % 2 === 0 ? "odd" : "even"}`}
            >
              <div className="choose-info">
                <div className="choose">
                  <label
                    htmlFor={`option-${option.gameOptionIdx}`}
                    className="radio-box"
                  >
                    <input
                      type="radio"
                      id={`option-${option.gameOptionIdx}`}
                      name="option"
                      value={option.optionTitle}
                      onChange={handleOptionChange}
                      checked={selectedOption === option.gameOptionIdx}
                      // @ts-ignore
                      disabled={
                        isVotingMember &&
                        selectedOption !== option.gameOptionIdx
                      } // 투표 멤버인 경우 라디오 버튼을 비활성화
                    />
                    <span className="on"></span>
                    {option.optionTitle}
                  </label>
                </div>
                <div className="choose-container">
                  <div className="ship-img" />
                  <div className="user-names">
                    {isVotingMember && (
                      <>
                        {option.votingMembers.map((member, idx) => (
                          <div className="user-container" key={idx}>
                            <div className="user-profile" />
                            <div className="user-name">{member.nickname}</div>
                          </div>
                        ))}
                      </>
                    )}
                    {!isVotingMember && <div className="non-user-container" />}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!isVotingMember ? (
            <Button
              className="btn"
              onClick={
                !isVotingClosed
                  ? handleShipButtonClick
                  : handleVictoryButtonClick
              }
            >
              {!isVotingClosed ? "한배타기" : "승리호결정"}
            </Button>
          ) : (
            <Button className="btn" onClick={() => navigate("/baseball/home")}>
              홈으로 돌아가기
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Bigmatch;
