import React from "react";
import { Link } from "react-router-dom";

function SystemEventSelectWinDiv({ content, slogun, logo, cnm, url }) {
  return (
    <Link to={`./${url}`}>
      <div className={`systemEventSelectWinMainDiv ${cnm}`}>
        <img src={logo} alt="logo" className="systemEventSelectWinMainDivImg" />
        <div className={`systemEventSelectWinMainDivContent ${cnm}`}>
          <div>{content}</div>
          <div className="slogun">{slogun}</div>
        </div>
      </div>
    </Link>
  );
}

export default SystemEventSelectWinDiv;
