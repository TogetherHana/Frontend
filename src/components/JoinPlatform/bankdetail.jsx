import { selectBankAtom } from "@/pages/JoinPlatform/join-account-link";
import { useAtom, useSetAtom } from "jotai";
import React, { useCallback } from "react";

function BankDetail({ params }) {
  const { img, name } = params;

  const [selectBank, setSelectBank] = useAtom(selectBankAtom);

  //   const handleClick = useCallback(() => {
  //     setSelectBank(() => name);
  //   }, [name, setSelectBank]);

  return (
    <div className="joinBankListDetail">
      <img src={img} alt={name} />
      <div className="ml-4">{name}</div>
    </div>
  );
}

export default BankDetail;
