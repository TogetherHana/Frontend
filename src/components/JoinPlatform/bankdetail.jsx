import { accountAtom, bankSelectAtom } from "@/stores";
import { useAtom } from "jotai";
import React from "react";

function BankDetail({ params }) {
  const { img, name } = params;

  const [selectBank, setSelectBank] = useAtom(accountAtom);
  const [bankSelectModal, setBankSelectModal] = useAtom(bankSelectAtom);
  // const []

  const selectB = () => {
    setSelectBank(name + "은행");
    setBankSelectModal((prev) => ({
      ...prev,
      isOpen: !prev.isOpen
    }));
  };

  //   const handleClick = useCallback(() => {
  //     setSelectBank(() => name);
  //   }, [name, setSelectBank]);

  return (
    <div className="joinBankListDetail" onClick={() => selectB()}>
      <img src={img} alt={name} />
      <div className="ml-4">{name}</div>
    </div>
  );
}

export default BankDetail;
