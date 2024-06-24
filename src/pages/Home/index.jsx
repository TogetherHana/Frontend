import React from "react";
// @ts-ignore
import hana6060 from "@/assets/images/hana6060.svg";
// @ts-ignore
import sports from "@/assets/images/mileage/sports.svg";
// @ts-ignore
import charging from "@/assets/images/mileage/charging.svg";
import HomeMileageSubBtn from "@/components/Button/homemileagesubbtn";

import "./style.scss";

function Home() {
  return (
    <div>
      {/* top */}
      <div className="homeTitle">
        <img src={hana6060} alt="logo6060" />
        <div className="homeTitleTxt">함께, 하나?</div>
      </div>
      {/* 모임통장 */}
      <div className="homeDiv">
        <div className="homeDivTitle">내 모임통장</div>
      </div>
      {/* 마일리지 */}
      <div className="homeDiv middle">
        <div className="homeMileageTitle">
          <img src={sports} alt="sports" width={100} height={90} />
          <div className="homeMileageRight">
            <div>이상민 님</div>
            <div>5,430 M</div>
            <div>내역확인 &gt;</div>
          </div>
        </div>
        <div>
          <HomeMileageSubBtn img={charging} content={"충전"} />
        </div>
      </div>
      {/* 응원팀 설정 */}
      <div className="homeDiv small">MY 응원팀 설정하기</div>
    </div>
  );
}

export default Home;
