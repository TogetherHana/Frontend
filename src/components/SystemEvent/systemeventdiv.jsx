import React from "react";
import SystemEventHashTag from "./systemeventhashtag";
import { Link } from "react-router-dom";

function SystemEventDiv({ img, title, date, hashTagParams, link }) {
  console.log(hashTagParams);
  return (
    <Link to={`.${link}`}>
      <img src={img} alt="img" className="systemEventDivImg" />
      {hashTagParams.map((item, index) => (
        <SystemEventHashTag key={index} content={item.content} cnm={item.cnm} />
      ))}
      <div className="systemEventDivTitle">{title}</div>
      <div className="systemEventDivDate">{date}</div>
    </Link>
  );
}

export default SystemEventDiv;
