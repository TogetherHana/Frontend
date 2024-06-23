import React from "react";

function InfoHalfBtn({ content, idx }) {
  return (
    <>
      {idx === "idx1" ? (
        <div className="infoHalfBtn">{content}</div>
      ) : (
        <div className={`infoHalfBtn ${idx}`}>{content}</div>
      )}
    </>
  );
}

export default InfoHalfBtn;
