import React, { useEffect, useState } from "react";
import "./history.scss";
import axios from "axios";
import { sportSharingAccountIdxAtom } from "@/stores";
import { useAtom } from "jotai";


function formatDate(serverDate) {
  const date = new Date(serverDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}
function History() {
  const [data, setData] = useState([]);  
  const [sportSharingAccountIdx] = useAtom(sportSharingAccountIdxAtom); // 모임통장 인덱스

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/sharing-account/history?sharingAccountIdx=${sportSharingAccountIdx}`,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        console.log(response.data.data);
        setData(response.data.data);

        // 가장 최근 거래내역의 남은금액을 저장
        if (response.data.data.length > 0) {
          const latestRemainBalance =
            response.data.data[response.data.data.length - 1].remainBalance;
          localStorage.setItem("latestRemainBalance", latestRemainBalance);
        }
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

    fetchMembers();
  }, [sportSharingAccountIdx]); // sharingAccountIdx가 변경될 때마다 다시 데이터를 가져옴

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <>
      <div className="transfer-history-container">
        {data
          .slice()
          .reverse()
          .map((transaction, index) => (
            <div className="one-thing" key={index}>
              <div className="date-name">
                <div className="date">{formatDate(transaction.createdAt)}</div>
                {transaction.transferType === "WITHDRAW" && (
                  <div>{transaction.recipient}</div>
                )}
                {transaction.transferType === "DEPOSIT" && (
                  <div>{transaction.sender}</div>
                )}
              </div>
              <div className="type-transfer-remain">
                {transaction.transferType === "WITHDRAW" && (
                  <div className="type">출금</div>
                )}
                {transaction.transferType === "DEPOSIT" && (
                  <div className="type">입금</div>
                )}
                {transaction.transferType === "WITHDRAW" && (
                  <div className="transfer" style={{ color: "red" }}>
                    {formatNumber(transaction.transactionAmount)} 원
                  </div>
                )}
                {transaction.transferType === "DEPOSIT" && (
                  <div className="transfer" style={{ color: "#5866e5" }}>
                    {formatNumber(transaction.transactionAmount)} 원
                  </div>
                )}
                <div className="remain">
                  {formatNumber(transaction.remainBalance)} 원
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default History;
