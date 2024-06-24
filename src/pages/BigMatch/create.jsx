import React from "react";
import "./create.scss";

function CreateMatch() {
  return (
    <>
      <div className="create-container">
        <div className="header">
          <div className="back">&lt;</div>
          <div>빅매치 겨루기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="match-background" />
        <div className="content-container">
          <div className="col-dummy" />
          <div className="title">어떤 걸 내기하실래요?</div>
          <div className="col-dummy" />
          <input
            type="text"
            className="num-input"
            placeholder="오늘의 내기는?"
          />
        </div>
      </div>
    </>
  );
}

export default CreateMatch;
