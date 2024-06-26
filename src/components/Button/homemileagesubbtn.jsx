import React from "react";

function HomeMileageSubBtn({ img, content, cnm }) {
  return (
    <div className={`homeMileageSubBtn ${cnm}`}>
      <img src={img} alt="img" width={40} height={40} />
      <div className="homeMileageSubBtnTxt">{content}</div>
    </div>
  );
}

export default HomeMileageSubBtn;
