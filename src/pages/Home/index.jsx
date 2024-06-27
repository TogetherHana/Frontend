import React, { useState } from "react";
// @ts-ignore
import hana6060 from "@/assets/images/hana6060.svg";
// @ts-ignore
import sports from "@/assets/images/mileage/sports.svg";
// @ts-ignore
import charging from "@/assets/images/mileage/charging.svg";
// @ts-ignore
import exchange from "@/assets/images/mileage/exchange.svg";
// @ts-ignore
import chargebelow from "@/assets/images/mileage/chargebelow.svg";
// @ts-ignore
import footballticket from "@/assets/images/ticket/football.svg";
import HomeMileageSubBtn from "@/components/Button/homemileagesubbtn";
import MainAccountDiv from "@/components/Main/mainaccountdiv";
import "./style.scss";

function Home() {
  const [isSetCheeringTeam, setIsSetCheeringTeam] = useState(false);
  return (
    <>
      {/* top */}
      <div className="homeTitle">
        <img src={hana6060} alt="logo6060" />
        <div className="homeTitleTxt">함께, 하나?</div>
      </div>
      {/* 모임통장 */}
      <div className="homeDiv">
        <div className="homeDivTitle">내 모임통장</div>
        {/* 나중에는 여러개 가져와서 carousel 형태로 바꿔야 함 */}
        <MainAccountDiv img={footballticket} />
      </div>
      {/* 마일리지 */}
      <div className="homeDiv middle">
        <div className="homeMileageTitle">
          <img src={sports} alt="sports" width={100} height={90} />
          <div>
            <div className="homeMileageRight txt1">이상민 님</div>
            <div className="homeMileageRight txt2">5,430 M</div>
            <div className="homeMileageRight txt3">내역확인 &gt;</div>
          </div>
        </div>
        <div className="homeMileageChargeBelow">
          <img src={chargebelow} alt="chargebelow" />
          <div className="homeMileageChargeBelow txt">무료 마일리지 받기!</div>
        </div>
        <div>
          <HomeMileageSubBtn img={charging} content={"충전"} cnm={""} />
          <HomeMileageSubBtn img={exchange} content={"환전"} cnm={"btn2"} />
        </div>
      </div>
      {/* 응원팀 설정 */}
      {isSetCheeringTeam ? (
        <div className="homeDiv small">응원팀 경기일정</div>
      ) : (
        <div className="homeDiv small">MY 응원팀 설정하기</div>
      )}
    </>
  );
}

export default Home;
