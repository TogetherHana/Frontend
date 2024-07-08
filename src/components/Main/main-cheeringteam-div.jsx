import React from "react";
import teamImages from "../team-images";

function CheeringTeamDiv({ params }) {
  const sportsType = (type) => {
    let sportsType = "";
    switch (type) {
      case "BASEBALL":
        sportsType = "MY 야구팀";
        break;
      case "FOOTBALL":
        sportsType = "MY 축구팀";
        break;
      default:
        break;
    }
    return sportsType;
  };

  return (
    <div className="renewalCheeringTeam">
      <div className="info">
        <div>{sportsType(params.sportsType)}</div>
        <div>{params.sportsClubName}</div>
      </div>
      <div className="imgInfo">
        <img
          src={teamImages[params.sportsClubName]}
          alt="teamImg"
          width={60}
          height={60}
        />
      </div>
      <div className="detailInfo">
        다음 경기 일정 <br />
        vs 롯데 자이언츠 <br />
        2024.07.09
      </div>
    </div>
  );
}

export default CheeringTeamDiv;
