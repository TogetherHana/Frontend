import React from "react";

function SystemEventSelectWinDiv({ content, slogun, logo, cnm }) {
  return (
    <div className={`systemEventSelectWinMainDiv ${cnm}`}>
      <img src={logo} alt="logo" className="systemEventSelectWinMainDivImg" />
      <div className={`systemEventSelectWinMainDivContent ${cnm}`}>
        <div>{content}</div>
        <div className="slogun">{slogun}</div>
      </div>
    </div>
  );
}

export default SystemEventSelectWinDiv;
