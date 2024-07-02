import React, { useEffect, useState } from "react";
import "./baseball_style.scss";
import { useNavigate } from "react-router-dom";
import nc from "@/assets/images/baseballTeams/nc.svg";
import hanwha from "@/assets/images/baseballTeams/hanwha.svg";
import lions from "@/assets/images/baseballTeams/Lions.svg";
import LG from "@/assets/images/baseballTeams/LG.svg";
import KT from "@/assets/images/baseballTeams/KT.svg";
import Lotte from "@/assets/images/baseballTeams/Lotte.svg";
import Doosan from "@/assets/images/baseballTeams/Doosan.svg";
import Kia from "@/assets/images/baseballTeams/Kia.svg";
import Kiwoom from "@/assets/images/baseballTeams/Kiwoom.svg";
import SSG from "@/assets/images/baseballTeams/SSG.svg";
import check from "@/assets/images/check.svg";
import TeamLogo from "@/components/Cheering/teamlogo";
import axios from "axios";

function Baseball() {
  const navigate = useNavigate();
  const memberIdx = 5;

  const logoParams = [
    {
      contents: [Doosan, nc, Kia],
      teams: ["Doosan", "nc", "Kia"],
      sportsIdx: [1, 5, 8]
    },
    {
      contents: [LG, hanwha, lions],
      teams: ["LG", "hanwha", "lions"],
      sportsIdx: [2, 6, 9]
    },
    {
      contents: [Kiwoom, Lotte, KT],
      teams: ["Kiwoom", "Lotte", "KT"],
      sportsIdx: [3, 7, 10]
    },
    {
      contents: [SSG, "", check],
      teams: ["SSG", "", "check"],
      sportsIdx: [4, 0, 0]
    }
  ];

  return (
    <>
      <div className="baseballTeam-container">
        <div className="header">
          <div className="back" onClick={() => navigate("/choice/team")}>
            &lt;
          </div>
          <div>My 응원팀 선택</div>
          <div className="row-dummy"></div>
        </div>
        <div className="content">
          <div className="background-logo" />
          <div className="text-overlay">
            <div>
              2024 KBO리그
              <br />
              함께, 하나!
            </div>
            <div className="plus">
              응원팀을 선택하면 경기 일정, 팀순위,
              <br />
              선수순위 등 응원팀 맞춤 정보가 제공돼요
            </div>
          </div>
        </div>
        <div className="logo-container">
          <TeamLogo params={logoParams} memberIdx={memberIdx}/>
        </div>
      </div>
    </>
  );
}

export default Baseball;
