import React from "react";

function MainMileageBtn({ content, img }) {
  return (
    <div className="mainMileagebtn">
      <img src={img} alt="img" width={30} height={30} />
      <div>{content}</div>
    </div>
  );
}

export default MainMileageBtn;
