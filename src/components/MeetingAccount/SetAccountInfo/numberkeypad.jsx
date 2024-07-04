import React from "react";
// @ts-ignore
import back from "@/assets/images/back.svg";
import Button from "@/components/Button";

function NumberKeyPad({ onClick }) {
  return (
    <div className="numberKeypad">
      <div className="numberKeypadRow first">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="numberKeypadRow">
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <div className="numberKeypadRow">
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
      <div className="numberKeypadRow last">
        <div></div>
        <div>0</div>
        <div className="grid place-items-center">
          <img src={back} alt="back" />
        </div>
      </div>
      <Button onClick={onClick} className="numberKeyPadBtn">
        확인
      </Button>
    </div>
  );
}

export default NumberKeyPad;
