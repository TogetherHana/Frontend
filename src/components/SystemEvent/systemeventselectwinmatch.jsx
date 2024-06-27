import React from "react";
import parse from "html-react-parser";

function SystemEventSelectWinMatch({ params }) {
  return (
    <div className="systemEventSelectWinMatchDiv">
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
        <div className="systemEventSelectWinMatchDivTeamImg">
          <img src={params.home.img} alt="home" />
        </div>
        <div className="systemEventSelectWinMatchDivTeamInfo">vs</div>
        <div className="systemEventSelectWinMatchDivTeamImg">
          <img src={params.away.img} alt="away" />
        </div>
        <div className="systemEventSelectWinMatchDivTeamInfo">
          <div>{params.away.type}</div>
          <div className="detail text-center">{parse(params.away.team)}</div>
          <div className="detail">{params.away.rank}</div>
        </div>
      </div>
    </div>
  );
}

export default SystemEventSelectWinMatch;
