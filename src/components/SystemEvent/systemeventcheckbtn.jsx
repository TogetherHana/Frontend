import React from "react";

function SystemEventCheckBtn({ content, istrue }) {
  return <div className={`systemEventCheckBtn ${istrue}`}>{content}</div>;
}

export default SystemEventCheckBtn;
