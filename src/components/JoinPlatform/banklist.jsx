import React from "react";
import BankDetail from "./bankdetail";
// @ts-ignore
import hana from "@/assets/images/banklist/hana.svg";
// @ts-ignore
import sinhan from "@/assets/images/banklist/sinhan.svg";
// @ts-ignore
import kb from "@/assets/images/banklist/kb.svg";
// @ts-ignore
import woori from "@/assets/images/banklist/woori.svg";

function BankList() {
  const bankParams = [
    {
      img: hana,
      name: "하나"
    },
    {
      img: sinhan,
      name: "신한"
    },
    {
      img: kb,
      name: "국민"
    },
    {
      img: woori,
      name: "우리"
    }
  ];
  //   console.log(params);
  return (
    <>
      <div className="joinBankListTitle">은행선택</div>
      <div className="joinBankListDetailDiv">
        {bankParams.map((item, index) => (
          <BankDetail key={index} params={item} />
        ))}
      </div>
    </>
  );
}

export default BankList;
