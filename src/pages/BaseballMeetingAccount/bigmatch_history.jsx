import React, { useEffect, useState } from "react";
import "./bigmatch_history.scss";
import axios from "axios";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function BigmatchHistory() {
  const navigate = useNavigate();

  const sharingAccountIdx = 1; // 모임통장 인덱스 값
  const [data, setData] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/game/history/${sharingAccountIdx}`,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        console.log(response.data.data);
        setData(response.data.data);

        console.log(data.playingGame.gameIdx);
        localStorage.setItem("playingGameIdx", data.playingGame.gameIdx);
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

    fetchData();
  }, [sharingAccountIdx]); // sharingAccountIdx가 변경될 때마다 다시 데이터를 가져옴

  useEffect(() => {
    if (!data || !data.playingGame) return;

    const calculateTimeLeft = () => {
      const deadline = dayjs(data.playingGame.deadline);
      const now = dayjs();
      const diff = deadline.diff(now);

      if (diff <= 0) {
        setTimeLeft("투표마감시간이 지났습니다!");
        setIsDeadlinePassed(true);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다!`
      );
      setIsDeadlinePassed(false);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [data]);

  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Loading...
      </div>
    ); // 데이터를 받아오는 동안 로딩 표시
  }

  const { playingGame, gameHistory } = data;

  const handleClick = () => {
    if (isDeadlinePassed) {
      navigate("/choose/loser");
    } else {
      navigate("/match");
    }
  };

  return (
    <>
      <div className="bigmatchHistory-container">
        <div className="leftTime">{timeLeft}</div>
        <div className="col-dummy" />
        {playingGame ? (
          <>
            <div className="playingGame-container" onClick={handleClick}>
              <div className="punch-img" />
              <div className="playingGame-title">{playingGame.gameTitle}</div>
              <div className="go-bigmatch">판 흔들러 가기</div>
            </div>
          </>
        ) : (
          <div
            className="nonPlayingGame-container"
            onClick={() => navigate("/create/match")}
          >
            <div>지금 열린 빅매치가 없네요..😭</div>
            <div style={{ color: "#44BD91" }}>큰 판 한번 만들어 볼래요?</div>
          </div>
        )}

        <hr className="line" />

        {gameHistory.length > 0 ? (
          gameHistory.map((game, index) => (
            <div className="history-container">
              <div className="createTime">{game.createdAt}</div>
              <div className="col-dummy" />
              <div className="gameHistory-container" key={index}>
                <div className="historyGame-title">{game.gameTitle}</div>
                <div className="winner-loser-container">
                  <div>승</div>
                  <div className="row-dummy" />
                  {game.winners.map((winner, idx) => (
                    <div className="winners-losers">
                      <div className="profile" />
                      <div key={idx}>{winner.nickname}</div>
                      <div className="row-dummy2" />                    
                    </div>
                  ))}
                </div>
                <div className="winner-loser-container">
                  <div>패</div>
                  <div className="row-dummy" />
                  {game.losers.map((loser, idx) => (
                    <div className="winners-losers">
                      <div className="profile" />
                      <div key={idx}>{loser.nickname}</div>
                      <div className="row-dummy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="history-empty">텅</div>
        )}
      </div>
    </>
  );
}

export default BigmatchHistory;
