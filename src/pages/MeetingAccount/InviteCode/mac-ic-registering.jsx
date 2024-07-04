import React, { useEffect } from "react";
import Spinner from "@/assets/Spin@1x-1.0s-200px-200px.gif";
import { useNavigate } from "react-router-dom";

function MacIcRegistering() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(
      () => navigate("/maccount/invitecode/complete"),
      3000
    );
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="macIcRegistering">
      <img src={Spinner} alt="spinner" />
      <div>
        가입중입니다
        <br />
        잠시만 기다려주세요!
      </div>
    </div>
  );
}

export default MacIcRegistering;
