import Button from "@/components/Button";
import { globalModalAtom } from "@/stores";
import { useAtom } from "jotai";
import React from "react";

function Test() {
  //모달 사용 시
  const [modalData, setModalData] = useAtom(globalModalAtom);

  const onClickButton = () => {
    setModalData((prevState) => ({
      ...prevState,
      isOpen: true,
      content: "하이"
    }));
  };

  return (
    <>
      <Button onClick={onClickButton}>모달 테스트</Button>
    </>
  );
}

export default Test;
