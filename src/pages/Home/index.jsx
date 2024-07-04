import React, { useEffect, useState } from "react";
import MainAccountDiv from "@/components/Main/mainaccountdiv";
import MainMiddleBtn from "@/components/Main/mainmiddlebtn";
import MainAccountLastDiv from "@/components/Main/mainaccountlastdiv";
import pfimg from "@/assets/images/mainrenewal/pfimg.svg";
import hana4040 from "@/assets/images/hana4040.svg";
import clover from "@/assets/images/mainrenewal/clover.svg";
import event from "@/assets/images/mileage/event.svg";
import goods from "@/assets/images/mileage/goods.svg";
import MainMileageBtn from "@/components/Main/mainmileagebtn";
import charging from "@/assets/images/mileage/charging.svg";
import convert from "@/assets/images/mileage/convert.svg";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Main from "../Main";
import { accessTokenATom } from "@/stores";
import { useAtom } from "jotai";

function Home() {
  const [isSetCheeringTeam, setIsSetCheeringTeam] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [isSubmittingU, setIsSubmittingU] = useState(true);
  const [accessToken, setAccessToken] = useAtom(accessTokenATom);

  const qc = useQueryClient();
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

  // @ts-ignore
  // jwt acccesstoken, refreshtoken
  const jwtTokendata = qc.getQueryData(["is-member"]).data;
  localStorage.setItem("jwtToken", jwtTokendata.acccesstoken);
  console.log("---토큰값 잘 저장됐나??---");
  console.log(localStorage.getItem("jwtToken"));

  // 모임통장 리스트 가져오기
  const sharingAccountInfo = useQuery({
    queryKey: ["sac-info"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/sharing-account/my", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtTokendata.accessToken}`
        }
      });

      return response.json();
    },
    enabled: isSubmitting
  });

  // 사용자 마일리지, 응원팀, 닉네임 정보 가져오기
  const userInfo = useQuery({
    queryKey: ["user-info"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/member/me", {
        method: "GET",
        headers: {
          "Content-Type": "application.json",
          Authorization: `Bearer ${jwtTokendata.accessToken}`
        }
      });

      return response.json();
    },
    enabled: isSubmittingU
  });

  useEffect(() => {
    setIsSubmitting(false);
    setAccessToken(jwtTokendata.accessToken);
  }, [sharingAccountInfo.data]);

  useEffect(() => {
    setIsSubmittingU(false);
  }, [userInfo.data]);

  return (
    <>
      {/* top */}
      <div className="renewalHomeTitle">
        <div className="left">
          <img src={hana4040} alt="hana4040" />
          <div>함께, 하나</div>
        </div>
        <div className="right">
          {userInfo.data && (
            <div className="txt">{userInfo.data.data.nickname} 님</div>
          )}
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
        {sharingAccountInfo.data &&
          sharingAccountInfo.data.data.map((item, index) => (
            <MainAccountDiv key={index} params={item} />
          ))}
        <MainAccountLastDiv />
      </div>
      {/* sports mileage */}
      <div className="renewalMiddleMileageDiv">
        <div className="flex">
          <div className="top">
            <div>MY 스포츠 마일리지</div>
            <div className="mile">
              {userInfo.data && <div>{userInfo.data.data.mileage.amount}M</div>}
              {/* <div>5,430M</div> */}
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
