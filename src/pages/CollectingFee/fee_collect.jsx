import React from "react";
import "./fee_collect.scss";
import Button from "@/components/Button";
import { useAtom } from "jotai";
import { amountAtom } from "@/stores";
import { useNavigate } from "react-router-dom";

function FeeCollect() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useAtom(amountAtom);

  const goBack = () => {
    setInputValue("");
    navigate("/fee");
  };

  return (
    <>
      <div className="collect-container">
        <div className="header">
          <div className="back" onClick={goBack}>
            &lt;
          </div>
          <div>모임통장 회비걷기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="content">
          <div className="col-dummy" />
          <div className="col-dummy" />
          <div className="title">총 얼마 걷을래요?</div>
          <div>이미지 나올 자리</div>
          <div className="title">{inputValue}원</div>
          <div className="col-dummy" />
          <div className="col-dummy" />
        </div>

        <div className="btn">
          <Button onClick={() => {}}>수금요청</Button>
        </div>
      </div>
    </>
  );
}

export default FeeCollect;
