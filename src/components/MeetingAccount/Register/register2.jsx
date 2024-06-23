import React from "react";

function Register2({ params }) {
  const { title1, title2, svg } = params;

  return (
    <div className="registerDiv">
      <div className="registerBasic">
        {title1} <br /> {title2}
      </div>
      <div className="registerImgDiv">
        <img src={svg} alt="balls" />
      </div>
    </div>
  );
}

export default Register2;
