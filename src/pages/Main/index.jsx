import React from "react";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import "./style.scss";


function Main() {
  const navigate = useNavigate();

  return (
    <>
      {/* <p>{data.description}</p> */}
      <Button onClick={() => navigate("/")}>버튼</Button>  
    
    </>
  );
}

export default Main;
