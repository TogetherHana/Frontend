import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { requestForToken } from "@/firebase";
import "./style.scss";
import { accessTokenATom, deviceTokenAtom } from "@/stores";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

// const queryClient = new QueryClient();

function Main() {
  const [showSpinner, setShowSpinner] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deviceToken, setDeviceToken] = useAtom(deviceTokenAtom);
  const [accessToken, setAccessToken] = useAtom(accessTokenATom);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = await requestForToken();
      setDeviceToken(token);
    };

    fetchData().then(() => setIsSubmitting(true));
    // }
  }, []);

  // api 호출
  const isMember = useQuery({
    queryKey: ["is-member"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URI}/auth/login?deviceToken=${deviceToken}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response);
      return response.json();
    },
    enabled: isSubmitting
  });

  useEffect(() => {
    // isMember.data.isSuccess -> false 가입화면, true-> timer이후 showspinner 값 변경
    if (isMember.data) {
      console.log(isMember.data.isSuccess);
      if (isMember.data.isSuccess) {
        const timer = setTimeout(() => {
          setShowSpinner(false);
          setIsSubmitting(false);
          setTimeout(() => {
            navigate("/memberhome");
          }, 3000);
        }, 5000);

        // const timer2 =
        return () => {
          clearTimeout(timer);
          // clearTimeout(timer2);
        };
      } else {
        const timer = setTimeout(() => {
          navigate(`/platform/join/intro`);
          setIsSubmitting(false);
        }, 5000);

        return () => clearTimeout(timer);
      }
    }
  }, [isMember.data]);

  return (
    <>
      {showSpinner ? (
        <div className="grid h-screen">
          <div className="spinnerContainer">
            {/* <div className="spinner"></div> */}
            <div className="loader">
              <p>함께, </p>
              <div className="words">
                <span className="word"></span>
                <span className="word">야구</span>
                <span className="word">축구</span>
                <span className="word">E-스포츠</span>
                <span className="word">하나!</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="typing-indicator">
            <div className="typing-circle"></div>
            <div className="typing-circle"></div>
            <div className="typing-circle"></div>
            <div className="typing-shadow"></div>
            <div className="typing-shadow"></div>
            <div className="typing-shadow"></div>
          </div>
          <div className="mainTitle">
            디바이스 토큰
            <br /> 검증하는 중
          </div>
          <div className="mainSub">
            함께 성장하며
            <br />
            행복을 나누는 금융
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
