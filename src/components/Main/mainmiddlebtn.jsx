import React from "react";
import parse from "html-react-parser";
import { Link, Navigate, useNavigate } from "react-router-dom";

function MainMiddleBtn({ params }) {
  const navigate = useNavigate();
  return (
    // <Link to={`${params.url}`}>
    <div className="renewalMiddleBtn" onClick={() => navigate(params.url)}>
      <div className="txt">
        <div>{params.top}</div>
        <div className="small">{parse(params.below)}</div>
      </div>
      <img src={params.img} alt="img" width={35} height={35} />
    </div>
    // </Link>
  );
}

export default MainMiddleBtn;
