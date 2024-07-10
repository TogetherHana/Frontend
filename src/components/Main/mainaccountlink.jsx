import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// @ts-ignore
import copy from "@/assets/images/copy.svg";

function MainAccountLink({ code, acnm }) {
  console.log(acnm);
  return (
    <div className="mainAccountLinkContent">
      <div className="mainAccountLinkTxt">{acnm} 초대코드</div>
      <div className="mainAccountLinkTxt sub">
        해당 코드를 초대하고자 하는 사람에게 전달해주세요!
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
        <button>
          <span>
            {/* <img src={copy} alt="copy" className="accountLinkCopy" /> */}
            복사
          </span>
          <span>복사됨</span>
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default MainAccountLink;
