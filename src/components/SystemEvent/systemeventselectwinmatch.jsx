import React from "react";
import parse from "html-react-parser";
import { selectWinTeamAtom } from "@/stores";
import { useAtom } from "jotai";
import SelectWinTeamModal from "../Modal/selectwinteammodal";
import SystemEventSelectCheck from "./systemeventselectcheck";

function SystemEventSelectWinMatch({ params }) {
  const [selectWinTeamData, setSelectWinTeamData] = useAtom(selectWinTeamAtom);
  const handleSelectWinTeam = (teamnm, matchnm, img) => {
    setSelectWinTeamData((prevData) => ({
      ...prevData,
      isOpen: !prevData.isOpen,
      content: (
        <SystemEventSelectCheck teamnm={teamnm} matchnm={matchnm} img={img} />
      )
    }));
  };
  return (
    <>
      <div
        className="systemEventSelectWinMatchDiv"
        style={{
          backgroundImage: `url(${params.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="systemEventSelectWinMatchDivInfo">
          <div>{params.match.time}</div>
          <div className="ml-2">{params.match.stadium}</div>
        </div>
        <div className="flex justify-center">
          <div className="systemEventSelectWinMatchDivTeamInfo">
            <div>{params.home.type}</div>
            <div className="detail text-center">{parse(params.home.team)}</div>
            <div className="detail">{params.home.rank}</div>
          </div>
          <div
            className="systemEventSelectWinMatchDivTeamImg"
            onClick={() =>
              handleSelectWinTeam(
                params.home.teamnm,
                params.match.name,
                params.home.img
              )
            }
          >
            <img src={params.home.img} alt="home" />
          </div>

          <div className="systemEventSelectWinMatchDivTeamInfo">vs</div>
          <div
            className="systemEventSelectWinMatchDivTeamImg"
            onClick={() =>
              handleSelectWinTeam(
                params.away.teamnm,
                params.match.name,
                params.away.img
              )
            }
          >
            <img src={params.away.img} alt="away" />
          </div>
          <div className="systemEventSelectWinMatchDivTeamInfo">
            <div>{params.away.type}</div>
            <div className="detail text-center">{parse(params.away.team)}</div>
            <div className="detail">{params.away.rank}</div>
          </div>
        </div>
      </div>
      <SelectWinTeamModal />
    </>
  );
}

export default SystemEventSelectWinMatch;
