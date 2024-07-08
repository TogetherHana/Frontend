import React from "react";
import { useNavigate } from "react-router-dom";

function HomeAccountDivTransaction({ params }) {
  const navigate = useNavigate();
  return (
    <div
      className={`mainAccountDivBtn ${params.cnm}`}
      onClick={() => navigate("/send")}
    >
      <div>{params.content}</div>
    </div>
  );
}

export default HomeAccountDivTransaction;
