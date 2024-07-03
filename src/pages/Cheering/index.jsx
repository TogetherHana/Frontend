import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import SportsType from "@/components/Cheering/sportstype";
import baseball from "@/assets/images/sportsType/baseball_bat_black.svg";
import soccer from "@/assets/images/sportsType/football_black.svg";
import esports from "@/assets/images/sportsType/esports_black.svg";

function Cheering() {
  const navigate = useNavigate();

  const sportsTypeParams = [
    {
      content: "야구",
      img: baseball,
      onClick: () => {
        localStorage.setItem("sportsType", "BASEBALL");
        // console.log("어떤 응원팀?");
        // console.log(localStorage.getItem("sportsType"));
        navigate(`/choice/team/baseball`);
      }
    },
    {
      content: "축구",
      img: soccer,
      // onClick: () => {
      //   localStorage.setItem("sportsType", "SOCCER");       
      // }
    },
    {
      content: "E-스포츠",
      img: esports,
      // onClick: () => {
      //   localStorage.setItem("sportsType", "E_SPORTS");      
      // }
    }
  ];

  return (
    <>
      <div className="sportstype-container">
        <div className="header">
          <div className="back">&lt;</div>
          <div>종목 선택</div>
          <div className="row-dummy"></div>
        </div>
        <div className="content">
          <div>관심있는</div>
          <div>스포츠 종목 선택</div>
          <div className="plus">중복선택가능</div>
          <div className="detail">
            {sportsTypeParams.map((item) => (
              <SportsType params={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cheering;
