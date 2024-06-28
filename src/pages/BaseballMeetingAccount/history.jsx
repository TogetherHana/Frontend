import React, { useEffect } from "react";
import "./history.scss";
import axios from "axios";

function History() {
  const sharingAccountIdx = 1; // 모임통장 인덱스 값

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/sharing-account/history?sharingAccountIdx=${sharingAccountIdx}`,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        console.log(response.data);
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
  }, [sharingAccountIdx]); // sharingAccountIdx가 변경될 때마다 다시 데이터를 가져옴

  return (
    <>
      <div className="history-container">
        <div></div>
      </div>
    </>
  );
}

export default History;
