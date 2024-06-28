import React from "react";
import "./styles.scss";
import HomeMileageSubBtn from "../Button/homemileagesubbtn";
import HomeAccountDivBtn from "../Button/homeaccountdivbtn";
import GlobalModal from "../Modal";

function MainAccountDiv({ img }) {
  return (
    <div className="renewalMiddleContent">
      {/* <div className="mainAccountDivImg">
        <img src={img} />
      </div> */}
      <div className="mainAccountDiv">
        <div className="mainAccountDivTxt">럭키비키 다이노스</div>
        <div className="mainAccountDivTxt middle">
          모임통장 111-12312-213124
        </div>
        <div className="mainAccountDivTxt bottom">11,000원</div>
        <div className="flex">
          <HomeAccountDivBtn content={"초대하기"} cnm={""} />
          <HomeAccountDivBtn content={"이체하기"} cnm={"cnm2"} />
          <HomeAccountDivBtn content={"・・・"} cnm={"cnm3"} />
        </div>
      </div>
    </div>
  );
}

export default MainAccountDiv;
