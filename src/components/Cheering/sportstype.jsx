import React from "react";

function SportsType({ params }) {
  return (
    <>
      <button className="type-button" onClick={params.onClick}>
        <img src={params.img} />
        <div className="text">{params.content}</div>
      </button>
    </>
  );
}

export default SportsType;
