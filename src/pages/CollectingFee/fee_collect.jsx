import React from "react";
import "./fee_collect.scss";
import Button from "@/components/Button";
import { useAtom } from "jotai";
import { amountAtom, characterAtom } from "@/stores";
import { useNavigate } from "react-router-dom";

const images = {
  Hanwha: ["Hanwha_second"],
  Kia: ["Kia_second"],
  Kiwoom: ["Kiwoom_second"],
  KT: ["KT_second"],
  LG: ["LG_second"],
  Lions: ["Lions_second"],
  Lotte: ["Lotte_second"],
  nc: ["Nc_second"],
  ssg: ["Ssg_second"],
  Doosan: ["Ssg_second"]
};

const getRandomImage = (key) => {
  return images[key];
};

function FeeCollect() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useAtom(amountAtom);
  const [randomImageKey, setRandomImageKey] = useAtom(characterAtom);

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
          <div className="col-dummy" style={{height:"70px"}} />
          <div className={`character ${getRandomImage(randomImageKey)}`} />          
          <div className="col-dummy" />
          <div className="title">{inputValue}원</div>
        </div>

        <div className="col-dummy" />
      
        <div className="btn">
          <Button onClick={() => {}}>수금요청</Button>
        </div>
      </div>
    </>
  );
}

export default FeeCollect;
