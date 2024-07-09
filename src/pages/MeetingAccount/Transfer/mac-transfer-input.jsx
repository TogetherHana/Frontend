import React, { useEffect, useState } from "react";
import "./fee_input.scss";
import Button from "@/components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { sendFeeAtom, transferInputAtom } from "@/stores";
// @ts-ignore
import hana from "@/assets/images/banklist/hana.svg";

function MacTransferInput() {
  const navigate = useNavigate();
  const location = useLocation();

  // 숫자입력
  const [inputValue, setInputValue] = useState("");
  const [transferInput, setTransferInput] = useAtom(transferInputAtom);

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

  const formatNumber = (value) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const stringToLong = (str) => {
    try {
      // 쉼표 제거
      const sanitizedStr = str.replace(/,/g, "");
      return sanitizedStr;
    } catch (error) {
      console.error("Invalid string for BigInt conversion:", error);
      return null;
    }
  };

  const gotoPassword = () => {
    setTransferInput({
      ...transferInput,
      sharingAccountIdx: location.state.accountIdx,
      amount: stringToLong(inputValue),
      sender: location.state.sender
    });
    navigate("/maccount/transfer/pwcheck");
  };

  return (
    <>
      <div className="send-fee-container">
        <div className="header">
          <div className="back" onClick={() => navigate(-1)}>
            &lt;
          </div>
          <div>모임통장 돈보내기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="input-container">
          <div className="receiver-bank-img">
            <img src={hana} alt={"하나은행"} width={50} height={50} />
          </div>
          <div className="receiver-font-renewal">
            {location.state.accountName}
          </div>
          <div className="receiver-bank-font-renewal">
            하나 {location.state.accountNumber}
          </div>
          <input
            type="text"
            value={inputValue}
            className="num-input"
            placeholder="보낼금액"
            readOnly
          />
          {stringToLong(inputValue) > 100000 ? (
            <>
              <input
                type="text"
                value={inputValue}
                style={{ color: "red" }}
                className="num-input"
                placeholder="보낼금액"
              />
              <div className="cant">잔액이 부족합니다!</div>
            </>
          ) : (
            <input
              type="text"
              value={inputValue}
              className="num-input"
              placeholder="보낼금액"
            />
          )}
          <div className="remain-amount">
            {/* account_name자리 */}

            <div>하나 748-911260-51507</div>
            <div onClick={() => setInputValue(formatNumber(120000))}>
              {formatNumber(120000)}원 &gt;
            </div>
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
            onClick={gotoPassword}
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

export default MacTransferInput;
