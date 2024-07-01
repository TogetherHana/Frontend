import React from "react";
import styled from "styled-components";

function TeamLogo({ params }) {
  return (
    <>
      {params.map((item, index) => (
        <div className="logo-line">
          <img src={item.contents[0]} />
          <img src={item.contents[1]} />
          <img src={item.contents[2]} />
        </div>
      ))}
    </>
  );
}

export default TeamLogo;
