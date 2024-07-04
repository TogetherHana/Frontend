import React, { useEffect, useState } from "react";
import sinhantransparent from "@/assets/images/systemEvent/main/sinhantransparent.svg";
import sports from "@/assets/images/mileage/sports.svg";
import SystemEventSelectWinMatch from "@/components/SystemEvent/se-select-win-match";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function SystemEventSelectWinB() {
  const [isSubmitting, setIsSubmitting] = useState(true);

  const matchInfo = useQuery({
    queryKey: ["match-info"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/event/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      return response.json();
    },
    enabled: isSubmitting
  });

  const formedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}. ${month}. ${day}`;
  };

  const getDayOfWeek = () => {
    const daysOfWeek = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일"
    ];
    const today = new Date();
    const dayIndex = today.getDay(); // getDay() returns a number from 0 (Sunday) to 6 (Saturday)
    return daysOfWeek[dayIndex];
  };

  useEffect(() => {
    setIsSubmitting(false);
  }, []);

  return (
    <>
      {/* top */}
      <div className="systemEventSelectWinBT">
        <div className="systemEventSelectWinTitle">
          <div className="left">&lt;</div>
          <div className="right">승리팀 맞추기 이벤트</div>
        </div>
        <div className="systemEventSelectWinLogo">
          <div className="top">Sliding to your life</div>
          <div className="bottom">
            <img src={sinhantransparent} alt="img" />
            <div className="txt">
              2024 신한 SOL Bank
              <br />
              KBO리그
            </div>
          </div>
        </div>
        <div className="systemEventSelectWinBelow">
          <div className="date">
            {formedDate(new Date())} {getDayOfWeek()} 경기
          </div>
          <div className="reward">
            <img src={sports} width={15} height={15} />
            <div className="price">700M</div>
          </div>
        </div>
      </div>
      {/* match select */}
      <div className="systemEventSelectWinBB">
        {matchInfo.data &&
          matchInfo.data.data.map((item, index) => (
            <SystemEventSelectWinMatch params={item} key={index} />
          ))}
        {matchInfo.data && matchInfo.data.data.length <= 5 ? (
          <div className="remainMatchInfo">타구장 경기는 취소되었습니다</div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SystemEventSelectWinB;
