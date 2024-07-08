import React from "react";
import "./style.scss";
import SystemEventDiv from "@/components/SystemEvent/se-div";
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
    <>
      <div className="systemEventMainTitle">이벤트</div>
      <div className="systemEventMainEvent first">
        <SystemEventDiv
          img={eventmain}
          title={"승리팀 맞추기 이벤트"}
          date={"2024. 06. 20 ~"}
          hashTagParams={wineventParams}
          link={"/event/selectwin"}
        />
      </div>
      <div className="systemEventMainEvent second">
        <SystemEventDiv
          img={eventmain2}
          title={"선착순 티켓 이벤트"}
          date={"2024. 06. 20 ~ 2024. 08. 31"}
          hashTagParams={halfpriceParams}
          link={"/firstComeEvent/wait"}
        />
      </div>
    </>
  );
}

export default SystemEvent;
