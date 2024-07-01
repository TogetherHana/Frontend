import Dialog1 from "@/components/JoinPlatform/dialog1";
import Dialog2 from "@/components/JoinPlatform/dialog2";
import React from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";

function JoinMain() {
  const navigate = useNavigate();

  const dialog1Txt = `스포츠,, <br/> 좋아하세요?`;
  const dialog2Txt = `마일리지 <br/> 필요하신분?`;
  const dialog3Txt = "모임통장은요...?";

  return (
    <div className="h-full" onClick={() => navigate(`/platform/join/intro`)}>
      <div className="joinMainDialogDiv">
        <Dialog1 content={dialog1Txt} style={"first"} />
        <Dialog2 content={dialog2Txt} style={"second"} />
        <Dialog1 content={dialog3Txt} style={"third"} />
      </div>
      <div className="joinMainTitle">
        <div>당신이 원하는 모든 것</div>
        <div className="detail">함께, 하나에서</div>
      </div>
    </div>
  );
}

export default JoinMain;
