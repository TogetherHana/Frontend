import React from "react";
import "./fee_collect.scss";
import Button from "@/components/Button";
import { useAtom } from "jotai";
import { amountAtom, characterAtom } from "@/stores";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const memberIdx = 1;

  const goBack = () => {
    setInputValue("");
    navigate("/fee");
  };

  const handleCollect = async () => {
    const taxCollectRequest = {
      sharingAccountId: 1,
      collectingAmount: parseInt(inputValue, 10)
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8080/sharing-account/collect/${memberIdx}`,
        taxCollectRequest,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log(response.data);
      navigate("/baseball/home");
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
          <div className="title">총 얼마 걷을래요?</div>
          <div className="col-dummy" />
          <div className={`character ${getRandomImage(randomImageKey)}`} />
          <div className="col-dummy" />
          <div className="title">{inputValue}원</div>
          <div className="col-dummy2" />
        </div>

        <Button
          onClick={handleCollect}
          style={{
            alignSelf: "center",
            marginBottom: "54px"
          }}
        >
          수금요청
        </Button>
      </div>
    </>
  );
}

export default FeeCollect;
