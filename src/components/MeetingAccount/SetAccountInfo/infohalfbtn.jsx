import React from "react";
import "./style.scss";

function InfoHalfBtn({ content, idx, onClick }) {
  return (
    <>
      {idx === "idx1" ? (
        <div className="infoHalfBtn" onClick={onClick}>
          {content}
        </div>
      ) : (
        <div className={`infoHalfBtn ${idx}`} onClick={onClick}>
          {content}
        </div>
      )}
    </>
  );
}

export default InfoHalfBtn;
