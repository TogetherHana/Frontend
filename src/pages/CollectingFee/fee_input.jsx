import React, { useEffect, useState } from "react";
import "./fee_input.scss";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { amountAtom } from "@/stores";

const images = {
  Hanwha: ["/images/characters/Hanwha_alone.svg", "/images/characters/Hanwha_together.svg"],
  Kia: ["/images/characters/Kia_yellow.svg", "/images/characters/Kia_together.svg"],
  Kiwoom: ["/images/characters/Kiwoom_alone.svg", "/images/characters/Kiwoom_together.svg"],
  KT: ["/images/characters/KT_alone.svg", "/images/characters/KT_together.svg"],
  LG: ["/images/characters/LG_alone1.svg", "/images/characters/LG_alone2.svg"],
  Lions: ["/images/characters/Lions_alone1.svg", "/images/characters/Lions_alone2.svg"],
  Lotte: ["/images/characters/Lotte_alone1.svg", "/images/characters/Lotte_alone2.svg"],
  nc: ["/images/characters/nc_alone1.svg", "/images/characters/nc_alone2.svg"],
  ssg: ["/images/characters/ssg_alone.svg", "/images/characters/ssg_alone.svg"],
  Doosan: ["/images/characters/ssg_alone.svg", "/images/characters/ssg_alone.svg"],
};

const getRandomKey = () => (Math.random() < 0.5 ? "a" : "b");

function FeeInput() {
  const navigate = useNavigate();

  // 숫자입력
  const [inputValue, setInputValue] = useAtom(amountAtom);
  const BtnClick = (number) => {
    setInputValue((prevValue) => {      
      const newValue = prevValue.replace(/,/g, "") + number; // Remove commas before adding new number
      return formatNumber(newValue);
    });
  };
  const DelClick = () => {
    setInputValue((prevValue) => {
      const newValue = prevValue.replace(/,/g, "").slice(0, -1); // Remove last character and commas
      return formatNumber(newValue);
    });
  };
  const resetClick = () => {
    setInputValue('');
  }  
  const formatNumber = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  // 캐릭터 출력
  const [key, setKey] = useState(getRandomKey());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 화면이 켜질 때마다 key와 index 초기화
    const newKey = getRandomKey();
    setKey(newKey);
    setIndex(0);
  }, []);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images[key].length);
  };

  return (
    <>
      <div className="fee-container">
        <div className="header">
          <div className="back">&lt;</div>
          <div>모임통장 회비걷기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="input-container">
          <div className="character1">
            {/* <div
              className="image-container"
              style={{ backgroundImage: `url(${images[key][index]})` }}
            ></div>
            <button onClick={nextImage}>Next Image</button> */}
          </div>
          <div className="content">
            <div className="title">총 얼마 걷을래요?</div>
            <div className="col-dummy" />
            <input
              type="text"
              value={inputValue}
              className="num-input"
              placeholder="걷을금액"
            />
          </div>
        </div>       

        <div className="num-container">
          <div className="num-line">
            <button onClick={() => BtnClick("1")} className="num">
              1
            </button>
            <button onClick={() => BtnClick("2")} className="num">
              2
            </button>
            <button onClick={() => BtnClick("3")} className="num">
              3
            </button>
          </div>
          <div className="num-line">
            <button onClick={() => BtnClick("4")} className="num">
              4
            </button>
            <button onClick={() => BtnClick("5")} className="num">
              5
            </button>
            <button onClick={() => BtnClick("6")} className="num">
              6
            </button>
          </div>
          <div className="num-line">
            <button onClick={() => BtnClick("7")} className="num">
              7
            </button>
            <button onClick={() => BtnClick("8")} className="num">
              8
            </button>
            <button onClick={() => BtnClick("9")} className="num">
              9
            </button>
          </div>
          <div className="num-line">
            <div className="num">
              <button onClick={resetClick} className="reloading" />
            </div>
            <button onClick={() => BtnClick("0")} className="num">
              0
            </button>
            <div className="num">
              <button onClick={DelClick} className="backArrow" />
            </div>
          </div>
          <Button
            onClick={() => navigate("/fee/collect")}
            style={{
              marginBottom: "15px",
              borderRadius: "20px"
            }}
          >
            입력
          </Button>
        </div>
      </div>
    </>
  );
}

export default FeeInput;
