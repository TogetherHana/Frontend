// @ts-nocheck
import React, { useState, forwardRef, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./create.scss";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const DateInput = forwardRef(({ value, onClick }, ref) => (
  <button className="date-custom" onClick={onClick} ref={ref}>
    {value}
  </button>
));

const combineDateAndTime = (date, time) => {
  const combined = new Date(date);
  combined.setHours(time.getHours());
  combined.setMinutes(time.getMinutes());
  combined.setSeconds(time.getSeconds());
  combined.setMilliseconds(time.getMilliseconds());

  // 로컬 시간대를 유지한 ISO 문자열 생성
  const year = combined.getFullYear();
  const month = String(combined.getMonth() + 1).padStart(2, "0");
  const day = String(combined.getDate()).padStart(2, "0");
  const hours = String(combined.getHours()).padStart(2, "0");
  const minutes = String(combined.getMinutes()).padStart(2, "0");
  const seconds = String(combined.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
};

function CreateMatch() {
  const navigate = useNavigate();

  const [gameTitle, setGameTitle] = useState("");
  const [gameOptions, setGameOptions] = useState([{ optionTitle: "" }]); // 초기 상태에 하나의 입력 필드 포함
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [deadLine, setDeadLine] = useState("");
  const [fine, setFine] = useState(0);
  const sharingAccountIdx = 1; // 모임통장 인덱스 값

  const addInput = () => {
    setGameOptions([...gameOptions, { optionTitle: "" }]); // 새로운 입력 필드 추가
  };

  const gameTitleChange = (e) => {
    setGameTitle(e.target.value);
  };

  const fineChange = (e) => {
    setFine(e.target.value);
  };

  useEffect(() => {
    const combinedDate = combineDateAndTime(selectedDate, endTime);
    console.log("------날짜 시간 잘 합쳐졌나?------");
    console.log(combinedDate);
    setDeadLine(combinedDate);
  }, [selectedDate, endTime]);

  const createBigmatch = async (e) => {
    e.preventDefault();

    const bigmatchFormData = {
      gameTitle,
      deadLine,
      fine,
      gameOptions
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/game/${sharingAccountIdx}`,
        bigmatchFormData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("--------------------------------------");
      console.log(response.data);

      // if (response.data.result == "success") {
      // } else {
      //   // Handle authentication failure
      //   console.error("Authentication failed:", response.data.message);
      // }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Axios error:", error.message);
      }
    }
  };

  return (
    <>
      <div className="create-container">
        <div className="header">
          <div className="back" onClick={() => navigate(-1)}>
            &lt;
          </div>
          <div>빅매치 겨루기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="match-background" />

        <div className="first-container">
          <div className="col-dummy" />
          <div className="title">어떤 걸 내기하실래요?</div>
          <div className="col-dummy" />
          <input
            type="text"
            className="num-input"
            placeholder="오늘의 내기는?"
            value={gameTitle}
            onChange={gameTitleChange}
          />
          <div className="col-dummy2" />
          <div className="hint">#두산VS롯데 오늘의 승자는?</div>
          <div className="hint">#오늘 골대 몇번 맞출꺼 같음?</div>
          <div className="dialog" />
          <div className="chatbot-content">
            MZ들이 많이 하는
            <br />
            미션이 궁금해?
          </div>
          <div className="chatbot" />
        </div>

        <div className="second-container">
          <div className="col-dummy" />
          <div className="title">선택지는?</div>
          <div className="col-dummy" />
          {gameOptions.map((input, index) => (
            <div key={index} className="input-container">
              <input
                type="text"
                className="num-input"
                placeholder="선택지를 입력하세요"
                value={input.optionTitle}
                onChange={(e) => {
                  const addGameOptions = [...gameOptions];
                  addGameOptions[index] = e.target.value;
                  setGameOptions(addGameOptions);
                }}
              />
            </div>
          ))}
          <button type="button" className="num-input" onClick={addInput}>
            +선택지 추가
          </button>
          <div className="hint">#승</div>
          <div className="hint">#패</div>
        </div>

        <div className="third-container">
          <div className="col-dummy" />
          <div className="title">투표는 언제까지?</div>
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="due-dateTime">
            <DatePicker
              dateFormat="yyyy.MM.dd"
              shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
              minDate={new Date()}
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              customInput={<DateInput />}
            />
            <DatePicker
              selected={endTime}
              onChange={(time) => setEndTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="aa HH:mm"
              customInput={<DateInput />}
            />
          </div>
        </div>

        <div className="fourth-container">
          <div className="left-dialog" />
          <div className="left-chat">내기에서 진 사람은?</div>
          <div className="right-dialog" />
          <div className="right-chat">벌금 당첨!</div>
          <div className="fine-title">벌금은 얼마?</div>
          <div className="fine-input">
            <input
              type="text"
              className="num-input"
              placeholder="벌금 입력"
              value={fine}
              onChange={fineChange}
            />
            <div className="won">원</div>
          </div>
          <div className="content">
            모임통장으로
            <br />
            벌금을 보내주세요!
          </div>
          <Button
            style={{
              backgroundColor: "#4D836B",
              position: "absolute",
              bottom: "10px"
            }}
            onClick={createBigmatch}
          >
            빅매치 만들기!
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreateMatch;
