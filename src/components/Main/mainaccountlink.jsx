import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// @ts-ignore
import copy from "@/assets/images/copy.svg";

function MainAccountLink({ code }) {
  return (
    <div className="mainAccountLinkContent">
      <div className="mainAccountLinkTxt">축구모임통장 초대링크</div>
      <div className="mainAccountLinkTxt sub">
        해당 링크를 초대하고자 하는 사람에게 전달해주세요!
      </div>
      <input
        className="mainAccountLinkTxt link"
        placeholder={`${code}`}
        disabled
      />
      <CopyToClipboard
        text={`${code}`}
        onCopy={() => console.log("copy success!")}
      >
        <img src={copy} alt="copy" className="accountLinkCopy" />
      </CopyToClipboard>
    </div>
  );
}

export default MainAccountLink;
