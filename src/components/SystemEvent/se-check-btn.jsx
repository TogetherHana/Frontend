import React from "react";

function SystemEventCheckBtn({ content, istrue, onClick }) {
  return (
    <div className={`systemEventCheckBtn ${istrue}`} onClick={onClick}>
      {content}
    </div>
  );
}

export default SystemEventCheckBtn;
