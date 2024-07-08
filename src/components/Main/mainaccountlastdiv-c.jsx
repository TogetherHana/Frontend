import React from "react";
import "./styles.scss";
import HomeMileageSubBtn from "../Button/homemileagesubbtn";
import HomeAccountDivBtn from "../Button/homeaccountdivbtn";
import GlobalModal from "../Modal";
import together from "@/assets/images/mainrenewal/together.svg";
import invitecode from "@/assets/images/mainrenewal/invitecode.svg";
import MainAccountCreate from "./mainaccountcreate";

function MainAccountLastDivC() {
  const mainAccountCreateParms = [
    {
      img: together,
      content: "모임통장, 하나 더?",
      url: "/maccount/register"
    },
    {
      img: invitecode,
      content: "초대코드로 모임 합류",
      url: "/maccount/invitecode"
    }
  ];
  return (
    <div className="renewalMiddleContent lastc">
      {/* <img src={together} alt="together" /> */}
      {/* <MainAccountCreate img={together} content="모임통장, 하나 더?" />
      <MainAccountCreate img={invitecode} content="초대코드로 모임 합류" /> */}
      {mainAccountCreateParms.map((item, index) => (
        <MainAccountCreate params={item} key={index} />
      ))}
    </div>
  );
}

export default MainAccountLastDivC;
