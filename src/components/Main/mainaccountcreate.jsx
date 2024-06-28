import React from "react";
import { useNavigate } from "react-router-dom";

function MainAccountCreate({ params }) {
  const navigate = useNavigate();
  return (
    <div
      className="renewalMiddleLastContent"
      onClick={() => navigate(params.url)}
    >
      <img src={params.img} alt="img" />
      <div>{params.content}</div>
    </div>
  );
}

export default MainAccountCreate;
