import React from "react";
import {
  Register1,
  Register2,
  Registerq,
  RegisterInfo,
  RegisterBtn
  // @ts-ignore
} from "@/components/MeetingAccount/Register";
// @ts-ignore
import balls from "@/assets/images/meetaccountinfo/balls.svg";
// @ts-ignore
import events from "@/assets/images/meetaccountinfo/events.svg";
// @ts-ignore
import coins from "@/assets/images/meetaccountinfo/coins.svg";

function MacRegister() {
  const register2Params = {
    title1: "함께 모아 함께 쓰는",
    title2: "스포츠 모임통장",
    svg: balls
  };

  const register3Params = {
    title1: "일정을 등록하고",
    title2: "이벤트도 만들 수 있어요",
    svg: events
  };

  const register4Params = {
    title1: "마일리지를 쌓아",
    title2: "현금처럼 쓸 수 있어요",
    svg: coins
  };

  return (
    <>
      <div className="registerMain">
        <Register1 />
        <Register2 params={register2Params} />
        <Register2 params={register3Params} />
        <Register2 params={register4Params} />
      </div>
      <Registerq />
      <RegisterInfo />
      <RegisterBtn url={"/maccount/register/idverification"} />
    </>
  );
}

export default MacRegister;
