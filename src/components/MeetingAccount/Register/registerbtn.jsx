import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";

function RegisterBtn({ url }) {
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center my-10">
      <div className="my-2">맨위로</div>
      <Button onClick={() => navigate(`${url}`)}>모임통장 시작하기</Button>
    </div>
  );
}

export default RegisterBtn;
