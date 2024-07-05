import React from "react";
import StockDiv from "@/components/MeetingAccount/SelectStock/stockdiv";
// @ts-ignore
import footballG from "@/assets/images/sportsType/football_green.svg";
// @ts-ignore
import baseballG from "@/assets/images/sportsType/baseball_glove_green.svg";
// @ts-ignore
import esportsG from "@/assets/images/sportsType/esports_green.svg";
import { useAtom } from "jotai";
import { maccountAtom } from "@/stores";
import { useNavigate } from "react-router-dom";

function MacSelectStock() {
  const [macInfo, setMacInfo] = useAtom(maccountAtom);
  const navigate = useNavigate();

  const stockParams = [
    {
      svg: footballG,
      name: "축구",
      onClick: () => {
        setMacInfo((prev) => ({ ...prev, sharePurpose: "SOCCER" }));
        navigate("/maccount/register/agreeterms");
      }
    },
    {
      svg: baseballG,
      name: "야구",
      onClick: () => {
        setMacInfo((prev) => ({ ...prev, sharePurpose: "BASEBALL" }));
        navigate("/maccount/register/agreeterms");
      }
    },
    {
      svg: esportsG,
      name: "e-스포츠",
      onClick: () => {
        setMacInfo((prev) => ({ ...prev, sharePurpose: "E_SPORTS" }));
        navigate("/maccount/register/agreeterms");
      }
    }
  ];
  return (
    <>
      <div className="selectStockMain">
        <div>
          어떤 스포츠를 위한 <br />
          모임통장 인가요?
        </div>
      </div>
      <div className="selectStockDiv">
        {stockParams.map((item, index) => (
          <StockDiv key={index} params={item} />
        ))}
      </div>
    </>
  );
}

export default MacSelectStock;
