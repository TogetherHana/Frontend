import React, { useEffect, useState } from "react";
import "./fee_input.scss";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { amountAtom, characterAtom } from "@/stores";

const images = {
  Hanwha: ["Hanwha_first"],
  Kia: ["Kia_first"],
  Kiwoom: ["Kiwoom_first"],
  KT: ["KT_first"],
  LG: ["LG_first"],
  Lions: ["Lions_first"],
  Lotte: ["Lotte_first"],
  nc: ["Nc_first"],
  ssg: ["Ssg_first"],
  Doosan: ["Ssg_first"]
};

const getRandomKey = () => {
  const keys = Object.keys(images);
  return keys[Math.floor(Math.random() * keys.length)];
};

const getRandomImage = (key) => {
  return images[key];
};

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
    setInputValue("");
  };
  const add5000 = () => {
    setInputValue((prevValue) => {
      const numericValue = parseInt(prevValue.replace(/,/g, ''), 10) || 0;
      const newValue = numericValue + 5000;
      return formatNumber(newValue.toString());
    });
  };
  const add10000 = () => {
    setInputValue((prevValue) => {
      const numericValue = parseInt(prevValue.replace(/,/g, ''), 10) || 0;
      const newValue = numericValue + 10000;
      return formatNumber(newValue.toString());
    });
  };
  const add50000 = () => {
    setInputValue((prevValue) => {
      const numericValue = parseInt(prevValue.replace(/,/g, ''), 10) || 0;
      const newValue = numericValue + 50000;
      return formatNumber(newValue.toString());
    });
  };
  const formatNumber = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 캐릭터 출력
  const [randomImage, setRandomImage] = useState("");
  const [randomImageKey, setRandomImageKey] = useAtom(characterAtom);

  useEffect(() => {
    const key = getRandomKey();
    setRandomImageKey(key);
    setRandomImage(getRandomImage(key));
  }, []);

  useEffect(() => {
    if (randomImageKey) {
      setRandomImage(getRandomImage(randomImageKey));
    }
  }, [randomImageKey]);

  return (
    <>
      <div className="fee-container">
        <div className="header">
          <div className="back">&lt;</div>
          <div>모임통장 회비걷기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="input-container">
          <div className={`character ${randomImage}`}>
            {/* <div className=""></div> */}
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

        <div className="btns">
          <button className="btn" onClick={add5000}>+ 5천</button>
          <button className="btn" onClick={add10000}>+ 1만</button>
          <button className="btn" onClick={add50000}>+ 5만</button>
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
            disabled={!inputValue}
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
