import React from "react";

function MainMileageBtn({ content, img, onClick }) {
  return (
    <div className="mainMileagebtn" onClick={onClick}>
      <img src={img} alt="img" width={30} height={30} />
      <div>{content}</div>
    </div>
  );
}

export default MainMileageBtn;
