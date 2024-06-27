import React from "react";
// @ts-ignore
import eventmain3 from "@/assets/images/systemEvent/eventmain/eventmain3.svg";
// @ts-ignore
import hanalogo from "@/assets/images/systemEvent/main/hanaLogo.svg";
// @ts-ignore
import sinhanlogo from "@/assets/images/systemEvent/main/sinhanLogo.svg";
// @ts-ignore
import lcklogo from "@/assets/images/systemEvent/main/lcklogo.svg";
import SystemEventSelectWinDiv from "@/components/SystemEvent/systemeventselectwindiv";

function SystemEventSelectWin() {
  const divParams = [
    {
      img: hanalogo,
      title: "하나은행 K리그1 2024",
      slogun: "ALL in the Pitch",
      cnm: "first",
      url: "football"
    },
    {
      img: sinhanlogo,
      title: "2024 신한 SOL BANK KBO 리그",
      slogun: "Sliding to your life",
      cnm: "second",
      url: "baseball"
    },
    {
      img: lcklogo,
      title: "2024 LOL Champs Summer",
      slogun: "House of legends",
      cnm: "third",
      url: "esports"
    }
  ];
  return (
    <>
      <div className="systemEventSelectWinMain">승리팀 맞추기 이벤트</div>
      <img src={eventmain3} className="systemEventSelectWinMainImg" />
      <div className="systemEventSelectWinMainBelow">
        {divParams.map((item) => (
          <SystemEventSelectWinDiv
            content={item.title}
            slogun={item.slogun}
            logo={item.img}
            cnm={item.cnm}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
}

export default SystemEventSelectWin;
