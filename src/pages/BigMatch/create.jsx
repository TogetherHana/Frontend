// @ts-nocheck
import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./create.scss";
import Button from "@/components/Button";

const DateInput = forwardRef(({ value, onClick }, ref) => (
  <button className="date-custom" onClick={onClick} ref={ref}>
    {value}
  </button>
));

function CreateMatch() {
  const [inputs, setInputs] = useState([""]); // 초기 상태에 하나의 입력 필드 포함
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const addInput = () => {
    setInputs([...inputs, ""]); // 새로운 입력 필드 추가
  };

  return (
    <>
      <div className="create-container">
        <div className="header">
          <div className="back">&lt;</div>
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
          {inputs.map((input, index) => (
            <div key={index} className="input-container">
              <input
                type="text"
                className="num-input"
                placeholder="선택지를 입력하세요"
                value={input}
                onChange={(e) => {
                  const newInputs = [...inputs];
                  newInputs[index] = e.target.value;
                  setInputs(newInputs);
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
            <input type="text" className="num-input" placeholder="벌금 입력" />
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
            onClick={() => {}}
          >
            빅매치 만들기!
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreateMatch;
