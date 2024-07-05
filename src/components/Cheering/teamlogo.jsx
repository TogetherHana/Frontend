import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function TeamLogo({ params, memberIdx }) {
  const navigate = useNavigate();

  const handleClick = (sportsIdx) => {
    localStorage.setItem("sportsIdx", sportsIdx);
  };

  const submit = async () => {
    const sportsClubIdx = localStorage.getItem("sportsIdx");

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BE_URI}/sports-club/pick/${memberIdx}`,
        sportsClubIdx,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response.data);

      if (!response.data.isSuccess) {
        alert("이미 응원팀을 설정했습니다.");
      }

      navigate("/");
    } catch (error) {
      console.error("Error picking team:", error);
    }
  };

  return (
    <>
      {params.map((item, index) => (
        <div className="logo-line">
          {item.contents[0] ? (
            <img
              src={item.contents[0]}
              alt={item.teams[0]}
              className={`img-${item.teams[0]}`}
              onClick={() => handleClick(item.sportsIdx[0])}
            />
          ) : (
            <div className="imgBlank"></div>
          )}
          {item.contents[1] ? (
            <img
              src={item.contents[1]}
              alt={item.teams[1]}
              className={`img-${item.teams[1]}`}
              onClick={() => handleClick(item.sportsIdx[1])}
            />
          ) : (
            <div className="imgBlank"></div>
          )}
          {item.contents[2] ? (
            item.teams[2] === "check" ? (
              <img
                src={item.contents[2]}
                alt={item.teams[2]}
                className={`img-${item.teams[2]}`}
                onClick={() => submit()}
              />
            ) : (
              <img
                src={item.contents[2]}
                alt={item.teams[2]}
                className={`img-${item.teams[2]}`}
                onClick={() => handleClick(item.sportsIdx[2])}
              />
            )
          ) : (
            <div className="imgBlank"></div>
          )}
        </div>
      ))}
    </>
  );
}

export default TeamLogo;
