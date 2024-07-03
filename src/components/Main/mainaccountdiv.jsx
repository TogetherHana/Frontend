import React from "react";
import "./styles.scss";
import HomeMileageSubBtn from "../Button/homemileagesubbtn";
import HomeAccountDivBtn from "../Button/homeaccountdivbtn";
import GlobalModal from "../Modal";
import { useNavigate } from "react-router-dom";

function MainAccountDiv({ params }) {
  const navigate = useNavigate();

  // console.log(params);
  const formatCurrency = (number) => {
    return new Intl.NumberFormat("ko-KR", {
      // style: "currency",
      currency: "KRW"
    }).format(number);
  };

  const handleSharingAccount = (accountIdx) => {
    navigate(`/baseball/home?idx=${accountIdx}`);
  };

  return (
    <div
      className="renewalMiddleContent"
      onClick={() => handleSharingAccount(params.sharingAccountIdx)}
    >
      <div className="mainAccountDiv">
        <div className="mainAccountDivTxt">{params.accountName}</div>
        <div className="mainAccountDivTxt middle">
          모임통장 {params.accountNumber}
        </div>
        <div className="mainAccountDivTxt bottom">
          {formatCurrency(params.remainBalance)}원
        </div>
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
