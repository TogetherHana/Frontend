import React from "react";
import StockDiv from "@/components/MeetingAccount/SelectStock/stockdiv";
// @ts-ignore
import footballG from "@/assets/images/sportsType/football_green.svg";
// @ts-ignore
import baseballG from "@/assets/images/sportsType/baseball_glove_green.svg";
// @ts-ignore
import esportsG from "@/assets/images/sportsType/esports_green.svg";

function SelectStock() {
  const footballParams = {
    svg: footballG,
    name: "축구"
  };
  const baseballParams = {
    svg: baseballG,
    name: "야구"
  };
  const esportsParams = {
    svg: esportsG,
    name: "e-스포츠"
  };
  return (
    <>
      <div className="selectStockMain">
        <div className="selectStockInfo">
          어떤 스포츠를 위한 <br />
          모임통장 인가요?
        </div>
      </div>
      <div className="selectStockDiv">
        <StockDiv params={footballParams} />
        <StockDiv params={baseballParams} />
        <StockDiv params={esportsParams} />
      </div>
    </>
  );
}

export default SelectStock;
