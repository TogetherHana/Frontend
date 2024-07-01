import React, { useState } from "react";
import MainAccountDiv from "@/components/Main/mainaccountdiv";
import MainMiddleBtn from "@/components/Main/mainmiddlebtn";
import MainAccountLastDiv from "@/components/Main/mainaccountlastdiv";
import pfimg from "@/assets/images/mainrenewal/pfimg.svg";
import kiatogether from "@/assets/images/characters/Kia_together.svg";
import hana4040 from "@/assets/images/hana4040.svg";
import clover from "@/assets/images/mainrenewal/clover.svg";
import event from "@/assets/images/mileage/event.svg";
import goods from "@/assets/images/mileage/goods.svg";
import MainMileageBtn from "@/components/Main/mainmileagebtn";
import charging from "@/assets/images/mileage/charging.svg";
import convert from "@/assets/images/mileage/convert.svg";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isSetCheeringTeam, setIsSetCheeringTeam] = useState(false);

  const navigate = useNavigate();

  const middleBtnParams = [
    {
      top: "이벤트",
      below: `다양한 이벤트에 <br/> 참여해보세요!`,
      img: event,
      url: "event"
    },
    {
      top: "마일리지샵",
      below: `마일리지로 굿즈를 <br/> 구매해보세요!`,
      img: goods,
      url: "mileage"
    }
  ];

  return (
    <>
      {/* top */}
      <div className="renewalHomeTitle">
        <div className="left">
          <img src={hana4040} alt="hana4040" />
          <div>함께, 하나</div>
        </div>
        <div className="right">
          <div className="txt">이상민 님</div>
          <img src={pfimg} alt="profileImg" />
        </div>
      </div>
      {/* middle1 title */}
      <div className="renewalMiddleTitle">
        <div className="top">함께 즐기고 싶다면</div>
        <div className="bottom">스포츠 모임통장</div>
      </div>
      {/* middle1 content */}
      <div className="renewalMiddleContentDiv">
        <MainAccountDiv img={kiatogether} />
        <MainAccountLastDiv />
      </div>
      {/* sports mileage */}
      <div className="renewalMiddleMileageDiv">
        <div className="flex">
          <div className="top">
            <div>MY 스포츠 마일리지</div>
            <div className="mile">
              <div>5,430M</div>
              <div className="milebtn">무료 마일리지 받기!</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <MainMileageBtn content={"충전하기"} img={charging} />
          {/* <div className="v-line"></div> */}
          <MainMileageBtn content={"환전하기"} img={convert} />
        </div>
      </div>
      {/* event & goods shop */}
      <div className="renewalMiddleBtnDiv">
        {middleBtnParams.map((item, index) => (
          <MainMiddleBtn params={item} />
        ))}
      </div>
      {/* cheering team */}
      <div
        className="renewalCheeringTeam"
        onClick={() => navigate(`/choice/team`)}
      >
        <div className="content">
          <div className="top">
            응원팀 설정하고 함께, 하나 더 재미있게 즐기기!
          </div>
          <div>MY 응원팀 설정하기</div>
        </div>
        <img src={clover} alt="clover" />
      </div>
    </>
  );
}

export default Home;
