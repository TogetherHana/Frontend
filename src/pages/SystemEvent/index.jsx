import React from "react";
import "./style.scss";
import SystemEventDiv from "@/components/SystemEvent/systemeventdiv";
// @ts-ignore
import eventmain from "@/assets/images/systemEvent/eventmain/eventmain.svg";
// @ts-ignore
import eventmain2 from "@/assets/images/systemEvent/eventmain/eventmain2.svg";

function SystemEvent() {
  const wineventParams = [
    { content: "# KBO", cnm: "first" },
    { content: "# K-리그", cnm: "second" },
    { content: "# LCK", cnm: "third" }
  ];

  const halfpriceParams = [{ content: "# 직관 티켓", cnm: "first" }];

  return (
    <div>
      <div className="systemEventMainTitle">이벤트</div>
      <div className="systemEventMainEvent first">
        <SystemEventDiv
          img={eventmain}
          title={"승리팀 맞추기 이벤트"}
          date={"2024. 06. 20 ~"}
          hashTagParams={wineventParams}
          link={"/selectwin"}
        />
      </div>
      <div className="systemEventMainEvent second">
        <SystemEventDiv
          img={eventmain2}
          title={"티켓 예매 수수료 반값 이벤트"}
          date={"2024. 06. 20 ~ 2024. 06. 30"}
          hashTagParams={halfpriceParams}
          link={"/"}
        />
      </div>
    </div>
  );
}

export default SystemEvent;
