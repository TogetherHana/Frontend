import React from "react";
import "./styles.scss";
import HomeMileageSubBtn from "../Button/homemileagesubbtn";
import HomeAccountDivBtn from "../Button/homeaccountdivbtn";
import GlobalModal from "../Modal";

function MainAccountDiv({ img }) {
  return (
    <div className="homeDiv middle2">
      <div className="mainAccountDivImg">
        <img src={img} />
      </div>
      <div>
        <div className="mainAccountDivTxt">축구모임통장</div>
        <div className="mainAccountDivTxt middle">1111-123-213124</div>
        <div className="mainAccountDivTxt bottom">11,000원</div>
      </div>
      <div>
        <HomeAccountDivBtn content={"초대"} cnm={""} />
        <HomeAccountDivBtn content={"이체"} cnm={"cnm2"} />
      </div>
    </div>
  );
}

export default MainAccountDiv;
