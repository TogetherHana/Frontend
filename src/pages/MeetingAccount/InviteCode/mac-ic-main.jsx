import React, { useEffect, useState } from "react";
import "./style.scss";
import invitecodemain from "@/assets/images/meetaccountic/invitecodmain.svg";
import ModalBottomUp from "@/components/MeetingAccount/modalbottomup";
import footballticket from "@/assets/images/ticket/football.svg";
import MacIcBottomUpInfo from "./mac-ic-bottom-popupinfo";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { accessTokenATom } from "@/stores";
import { useNavigate } from "react-router-dom";

function MacIcMain() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [invitecode, setInvitecode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accessToken, setAccessToken] = useAtom(accessTokenATom);

  const navigate = useNavigate();

  const macInfo = useQuery({
    queryKey: ["invite-mac-info"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URI}/invite/info?invitationCode=${invitecode}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      return response.json();
    },
    enabled: isSubmitting
  });

  const bottomPopupInfoParams = {
    img: footballticket,
    title: `${macInfo.data && macInfo.data.data.accountName}<br/> 모임통장에<br/> 참여하시겠습니까?`,
    buttonProp: {
      btnText: "모임통장 참여하기",
      btnBelowText: "이 모임통장이 아닌가요?",
      onClick: () => {
        localStorage.setItem("invite-code", invitecode);
        navigate("/maccount/invitecode/agreeterms");
      },
      cnm: "detail"
    }
  };

  const handlePopupOpen = () => {
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (macInfo.data) {
      setIsSubmitting(false);
      if (macInfo.data.isSuccess) {
        setIsPopupOpen(!isPopupOpen);
      }
    }
  }, [macInfo.data]);

  return (
    <>
      <div className="macIcMainTitle">
        친구에게 받은
        <br />
        초대코드를 입력해주세요
      </div>
      <img src={invitecodemain} alt="invitecode" className="mx-auto mt-11" />
      <div className="macInviteCodeInputDiv">
        <div className="input-group">
          <input
            className="input"
            placeholder="초대코드 입력하세요!"
            onChange={(e) => setInvitecode(e.target.value)}
          />
          <input
            className="button--submit"
            value="확인"
            type="button"
            onClick={() => handlePopupOpen()}
          />
        </div>
      </div>
      <ModalBottomUp
        isPopupOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        snapPoints={[500]}
        content={<MacIcBottomUpInfo params={bottomPopupInfoParams} />}
      />
    </>
  );
}

export default MacIcMain;
