import React from "react";
import parse from "html-react-parser";
// @ts-ignore
import dialog2 from "@/assets/images/joinmembership/dialog2.svg";
import "./styles.scss";

function Dialog2({ content, style }) {
  return (
    <div className={style}>
      <img src={dialog2} alt="dialog2" />
      <div className="dialog2Detail">{parse(content)}</div>
    </div>
  );
}

export default Dialog2;
