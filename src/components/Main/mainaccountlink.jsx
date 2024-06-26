import React from "react";
// @ts-ignore
import copy from "@/assets/images/copy.svg";

function MainAccountLink() {
  return (
    <div className="mainAccountLinkContent">
      <div className="mainAccountLinkTxt">축구모임통장 초대링크</div>
      <div className="mainAccountLinkTxt sub">
        해당 링크를 초대하고자 하는 사람에게 전달해주세요!
      </div>
      <input
        className="mainAccountLinkTxt link"
        placeholder="초대링크"
        disabled
      />
      <img src={copy} alt="copy" className="accountLinkCopy" />
    </div>
  );
}

export default MainAccountLink;
