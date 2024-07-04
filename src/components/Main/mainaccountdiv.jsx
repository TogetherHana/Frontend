import React from "react";
import "./styles.scss";
import HomeMileageSubBtn from "../Button/homemileagesubbtn";
import HomeAccountDivBtn from "../Button/homeaccountdivbtn";
import GlobalModal from "../Modal";
import { useNavigate } from "react-router-dom";
import { Home } from "@/pages";

function MainAccountDiv({ params }) {
  const navigate = useNavigate();

  // console.log(params);
  const formatCurrency = (number) => {
    return new Intl.NumberFormat("ko-KR", {
      // style: "currency",
      currency: "KRW"
    }).format(number);
  };

  const btnProps = [
    {
      content: "초대하기",
      cnm: "",
      idx: params.sharingAccountIdx
    },
    {
      content: "이체하기",
      cnm: "cnm2",
      idx: params.sharingAccountIdx
    },
    {
      content: "・・・",
      cnm: "cnm3",
      idx: params.sharingAccountIdx
    }
  ];

  const handleSharingAccount = (accountIdx, accountName) => {
    const encodedAccountName = encodeURIComponent(accountName);
    navigate(`/baseball/home?idx=${accountIdx}&name=${accountName}`);
  };

  return (
    <div className="renewalMiddleContent">
      <div className="mainAccountDiv">
        <div
          className="mainAccountDivTxt"
          onClick={() =>
            handleSharingAccount(params.sharingAccountIdx, params.accountName)
          }
        >
          {params.accountName}
        </div>
        <div className="mainAccountDivTxt middle">
          모임통장 {params.accountNumber}
        </div>
        <div className="mainAccountDivTxt bottom">
          {formatCurrency(params.remainBalance)}원
        </div>
        <div className="flex">
          {btnProps.map((item, index) => (
            <HomeAccountDivBtn key={index} params={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainAccountDiv;
