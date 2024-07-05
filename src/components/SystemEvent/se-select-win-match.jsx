import React, { useState } from "react";
import parse from "html-react-parser";
import { selectWinTeamAtom } from "@/stores";
import { useAtom } from "jotai";
import SelectWinTeamModal from "../Modal/selectwinteammodal";
import SystemEventSelectCheck from "./se-select-win-check";
import jamsil from "@/assets/images/systemEvent/baseball/background_jamsil.svg";
import lg_twins from "@/assets/images/baseballTeams/LG.svg";
import kiwoom_heroes from "@/assets/images/baseballTeams/Kiwoom.svg";
import { useQueryClient } from "@tanstack/react-query";

function SystemEventSelectWinMatch({ params }) {
  const [selectWinTeamData, setSelectWinTeamData] = useAtom(selectWinTeamAtom);
  const [isSubmitting, setIsSubmitting] = useState(true);
  const handleSelectWinTeam = (teamnm, matchnm, img, gameidx, teamidx) => {
    setSelectWinTeamData((prevData) => ({
      ...prevData,
      isOpen: !prevData.isOpen,
      content: (
        <SystemEventSelectCheck
          teamnm={teamnm}
          matchnm={matchnm}
          img={img}
          gameidx={gameidx}
          teamidx={teamidx}
        />
      )
    }));
  };

  const getStadiumImg = (stadium) => {
    let stadiumImg = "";
    switch (stadium) {
      case "잠실야구장":
        stadiumImg = jamsil;
        break;
      default:
        break;
    }
    return stadiumImg;
  };

  const getTeamImg = (teamName) => {
    let teamImg = null;
    switch (teamName) {
      case "LG 트윈스":
        teamImg = lg_twins;
        break;
      case "키움 히어로즈":
        teamImg = kiwoom_heroes;
        break;
      default:
        break;
    }
    return teamImg;
  };
  return (
    <>
      <div
        className="systemEventSelectWinMatchDiv"
        style={{
          backgroundImage: `url(${getStadiumImg(params.eventLocation)})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="systemEventSelectWinMatchDivInfo">
          {/* <div>{params.match.time}</div> */}
          <div>18:30</div>
          <div className="ml-2">{params.eventLocation}</div>
        </div>
        <div className="flex justify-center">
          <div className="systemEventSelectWinMatchDivTeamInfo">
            <div>홈</div>
            <div className="detail text-center">
              {params.home.teamName.split(" ")[0]}
              <br />
              {params.home.teamName.split(" ")[1]}
            </div>
            {/* <div className="detail">{params.home.rank}</div> */}
          </div>
          <div
            className="systemEventSelectWinMatchDivTeamImg"
            onClick={() =>
              handleSelectWinTeam(
                params.home.teamName,
                params.eventTitle,
                params.home.teamImg,
                params.eventGameIdx,
                params.home.teamId
              )
            }
          >
            <img src={getTeamImg(params.home.teamName)} alt="home" />
          </div>

          <div className="systemEventSelectWinMatchDivTeamInfo">vs</div>
          <div
            className="systemEventSelectWinMatchDivTeamImg"
            onClick={() =>
              handleSelectWinTeam(
                params.away.teamName,
                params.eventTitle,
                params.away.teamImg,
                params.eventGameIdx,
                params.away.teamId
              )
            }
          >
            <img src={getTeamImg(params.away.teamName)} alt="away" />
          </div>
          <div className="systemEventSelectWinMatchDivTeamInfo">
            <div>원정</div>
            <div className="detail text-center">
              {params.away.teamName.split(" ")[0]}
              <br />
              {params.away.teamName.split(" ")[1]}
            </div>
            {/* <div className="detail">{params.away.rank}</div> */}
          </div>
        </div>
      </div>
      <SelectWinTeamModal />
    </>
  );
}

export default SystemEventSelectWinMatch;
