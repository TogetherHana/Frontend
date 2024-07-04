import React, { useEffect } from "react";
import hana7070 from "@/assets/images/hana7070.svg";
import VerificationBtn from "@/components/MeetingAccount/IdVerification/verificationbtn";
import { deviceTokenAtom, memberAtom } from "@/stores";
import { useAtom } from "jotai";
import { requestForToken } from "@/firebase";
import { useNavigate } from "react-router-dom";

function NotificationRequest() {
  const [deviceToken, setDeviceToken] = useAtom(deviceTokenAtom);
  const [memberInfo, setMemberInfo] = useAtom(memberAtom);

  const navigate = useNavigate();

  const fetchData = async () => {
    const token = await requestForToken();
    setDeviceToken(token);
    setMemberInfo((prev) => ({ ...prev, fcmToken: token }));
  };

  const btnProp = {
    btnText: "알림 설정하기",
    btnBelowText: "다음에 할래요",
    onClick: () =>
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("알림 허용됨");
          fetchData().then((response) =>
            navigate("/platform/join/idverification")
          );
        } else console.log("알림 거부됨");
      })
  };

  // useEffect(() => {
  //   console.log(deviceToken);
  //   console.log(memberInfo);
  // }, [memberInfo]);

  return (
    <div className="notificationRequestTitle">
      <img src={hana7070} alt="img" />
      <div className="title">푸시 알림 받기</div>
      <div className="sub">
        푸시 알림 구독하고 <br />
        당신이 원하는 모든 것 함께, 하나에서! 🥇
      </div>
      <VerificationBtn params={btnProp} />
    </div>
  );
}

export default NotificationRequest;
