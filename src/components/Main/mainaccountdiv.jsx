import React from "react";
import "./styles.scss";
import HomeMileageSubBtn from "../Button/homemileagesubbtn";
import HomeAccountDivBtn from "../Button/homeaccountdivbtn";
import GlobalModal from "../Modal";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import {
  sportSharingAccountIdxAtom,
  sportSharingAccountNameAtom,
  sportSharingAccountNumAtom
} from "@/stores";
import { Home } from "@/pages";
import HomeAccountDivTransaction from "../Button/homeaccountdivtransaction";

function MainAccountDiv({ params }) {
  const navigate = useNavigate();

  const [sportSharingAccountIdx, setSportSharingAccountIdx] = useAtom(
    sportSharingAccountIdxAtom
  ); // 모임통장 인덱스
  const [sportSharingAccountName, setSportSharingAccountName] = useAtom(
    sportSharingAccountNameAtom
  ); // 모임통장 계좌이름
  const [sportSharingAccountNum, setSportSharingAccountNum] = useAtom(
    sportSharingAccountNumAtom
  ); // 모임통장 계좌번호

  // console.log(params);
  const formatCurrency = (number) => {
    return new Intl.NumberFormat("ko-KR", {
      // style: "currency",
      currency: "KRW"
    }).format(number);
  };

  const handleSharingAccount = (
    accountIdx,
    accountName,
    accountNumber,
    remainBalance
  ) => {
    const encodedAccountName = encodeURIComponent(accountName); // 띄어쓰기가 있을 가능성때문

    setSportSharingAccountIdx(accountIdx);
    setSportSharingAccountName(accountName);
    setSportSharingAccountNum(accountNumber);
    localStorage.setItem("latestRemainBalance", remainBalance);
    navigate(`/baseball/home`);
    // navigate(`/baseball/home?idx=${accountIdx}&name=${accountName}`);
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

  return (
    <div className="renewalMiddleContent">
      <div className="mainAccountDiv">
        <div
          className="mainAccountDivTxt"
          onClick={() =>
            handleSharingAccount(
              params.sharingAccountIdx,
              params.accountName,
              params.accountNumber,
              params.remainBalance
            )
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
          {/* {btnProps.map((item, index) => (
            <HomeAccountDivBtn key={index} params={item} />
          ))} */}
          <HomeAccountDivBtn params={btnProps[0]} />
          <HomeAccountDivTransaction params={btnProps[1]} />
          {/* <HomeAccountDivBtn params={btnProps[1]} /> */}
          <HomeAccountDivBtn params={btnProps[2]} />
        </div>
      </div>
    </div>
  );
}

export default MainAccountDiv;
