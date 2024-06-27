import React from "react";
import sinhantransparent from "@/assets/images/systemEvent/main/sinhantransparent.svg";
import sports from "@/assets/images/mileage/sports.svg";
import SystemEventSelectWinMatch from "@/components/SystemEvent/systemeventselectwinmatch";
import baseball_daegu from "@/assets/images/systemEvent/baseball/background_daegu.svg";
import baseball_samsung from "@/assets/images/baseballTeams/Lions.svg";
import baseball_ssg from "@/assets/images/baseballTeams/SSG.svg";
import baseball_jamsil from "@/assets/images/systemEvent/baseball/background_jamsil.svg";
import baseball_doosan from "@/assets/images/baseballTeams/Doosan.svg";
import baseball_nc from "@/assets/images/baseballTeams/nc.svg";

function SystemEventSelectWinB() {
  const matchParams = [
    {
      img: baseball_daegu,
      match: {
        time: "18:30",
        stadium: "대구삼성라이온즈파크"
      },
      home: {
        type: "홈",
        team: "삼성<br/> 라이온즈",
        rank: "3위",
        img: baseball_samsung
      },
      away: {
        type: "원정",
        team: "SSG<br/> 랜더스",
        rank: "5위",
        img: baseball_ssg
      }
    },
    {
      img: baseball_jamsil,
      match: {
        time: "18:30",
        stadium: "잠실야구장"
      },
      home: {
        type: "홈",
        team: "두산<br/> 베어스",
        rank: "4위",
        img: baseball_doosan
      },
      away: {
        type: "원정",
        team: "NC<br/> 다이노스",
        rank: "6위",
        img: baseball_nc
      }
    }
  ];
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
              {/* 몇시에갈래? 3시 반 ㄱㄱ */}
            </div>
          </div>
        </div>
        <div className="systemEventSelectWinBelow">
          <div className="date">2024. 06. 18 화요일 경기</div>
          <div className="reward">
            <img src={sports} width={15} height={15} />
            <div className="price">700M</div>
          </div>
        </div>
      </div>
      {/* match select */}
      <div className="systemEventSelectWinBB">
        {matchParams.map((item, index) => (
          <SystemEventSelectWinMatch params={item} />
        ))}
      </div>
    </>
  );
}

export default SystemEventSelectWinB;
