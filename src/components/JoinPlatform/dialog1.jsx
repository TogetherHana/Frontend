import React from "react";
import parse from "html-react-parser";
// @ts-ignore
import dialog1 from "@/assets/images/joinmembership/dialog1.svg";
import "./styles.scss";

function Dialog1({ content, style }) {
  return (
    <div className={style}>
      <img src={dialog1} alt="dialog1" />
      <div className="dialog1Detail">{parse(content)}</div>
      {/* {parse(content)} */}
    </div>
  );
}

export default Dialog1;
