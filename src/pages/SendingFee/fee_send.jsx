import BankList from "@/components/JoinPlatform/banklist";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
import { atom, useAtom, useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fee_send.scss";
import Button from "@/components/Button";
import { sendFeeAtom, sendFeeCheckModalAtom } from "@/stores";
import SendFeeCheckModal from "@/components/Modal/sendFeeCheckmodal";

function FeeSend() {
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [sendData, setSendData] = useAtom(sendFeeAtom);

  const [modalData, setModalData] = useAtom(sendFeeCheckModalAtom);

  const ReadyToSend = () => {
    setModalData((prevState) => ({
      ...prevState,
      isOpen: true,
      title: `${sendData.receiver} 님에게 보내시나요?`,
      content: `${sendData.bank}은행 ${sendData.receiveAccountNumber}`,
      cancelButtonText: "아니오",
      confirmButtonText: "네",
      onClickConfirm: () => navigate("/send/amount")
    }));
  };

  return (
    <>
      <div className="collect-container">
        <div className="header">
          <div className="back" onClick={() => navigate("/baseball/home")}>
            &lt;
          </div>
          <div>모임통장 돈보내기</div>
          <div className="row-dummy"></div>
        </div>

        <div className="title">어디로 보내시나요?</div>

        {/* 은행선택 */}
        <div
          className="bankNumInput bs"
          onClick={() => setIsPopupOpen(!isPopupOpen)}
        >
          {sendData.bank === "" ? "은행선택" : sendData.bank}
        </div>

        {/* 계좌번호 */}
        <input
          className="bankNumInput acnm"
          placeholder="계좌번호 ('-'를 포함)"
          onChange={(e) =>
            setSendData({ ...sendData, receiveAccountNumber: e.target.value })
          }
        />

        {/* 닉네임 */}
        <input
          className="bankNumInput acnm2"
          placeholder="받는사람"
          onChange={(e) =>
            setSendData({ ...sendData, receiver: e.target.value })
          }
        />

        <div className="userinfobtnLocation">
          <Button onClick={ReadyToSend} className="idVerification btn">
            입력완료
          </Button>
        </div>

        {/* BankList params -> 선택된 값들로 바뀌어야 함 */}
        <ModalBottomUp
          isPopupOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          snapPoints={[500]}
          content={<BankList />}
        />

        <SendFeeCheckModal/>
      </div>
    </>
  );
}

export default FeeSend;
