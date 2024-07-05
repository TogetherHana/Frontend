import React from "react";

function SystemEventHashTag({ content, cnm }) {
  return (
    <>
      <div className={`systemEventHashTag ${cnm}`}>{content}</div>
    </>
  );
}

export default SystemEventHashTag;
