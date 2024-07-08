import React, { useEffect, useState } from "react";
import SystemEventCheckBtn from "./se-check-btn";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { accessTokenATom, selectWinTeamAtom } from "@/stores";
import { useAtom } from "jotai";

function SystemEventSelectCheck({ teamnm, matchnm, img, gameidx, teamidx }) {
  // const [accessToken, setAccessToken] = useAtom(accessTokenATom);
  const [selectWinTeamData, setSelectWinTeamData] = useAtom(selectWinTeamAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const qc = useQueryClient();
  // @ts-ignore
  const accessToken = qc.getQueryData(["is-member"]).data.accessToken;
  // console.log(accessToken);

  const predictInfo = useQuery({
    queryKey: ["user-predict"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URI}/event/pick`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            eventGameIdx: gameidx,
            winnerPredictTeamIdx: teamidx
          })
        }
      );
      return response.json();
    },
    enabled: isSubmitting
  });

  // 사용자의 승리팀 예측
  const handlePredictWinTeam = () => {
    setIsSubmitting(true);
  };

  const handleCancelModal = () => {
    setSelectWinTeamData((prev) => ({
      ...prev,
      isOpen: !prev.isOpen
    }));
  };

  useEffect(() => {
    if (predictInfo.data) {
      setIsSubmitting(false);
      setIsChecking(true);
      if (predictInfo.data.isSuccess) {
        // popup으로 올려서 데이터 오면 화면 바꿔주기?
        console.log("성공");
      } else {
        console.log(predictInfo.data.message);
      }
    }
  }, [predictInfo.data]);

  return (
    <div className="SystemEventSelectCheckDiv">
      <div>{matchnm}</div>
      {isChecking ? (
        predictInfo.data.isSuccess ? (
          <div className="info">
            해당 경기 <br />
            승리팀 예측이 완료되었습니다.
          </div>
        ) : (
          <div className="info">{predictInfo.data.message}</div>
        )
      ) : (
        <>
          <div
            className="content"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.5
            }}
          ></div>
          <div className="mt-4">
            {teamnm}의 승리를
            <br /> 예측하시겠습니까?
          </div>
          <div className="btnDiv">
            <SystemEventCheckBtn
              content={"아니오"}
              istrue={false}
              onClick={() => handleCancelModal()}
            />
            <SystemEventCheckBtn
              content={"예"}
              istrue={true}
              onClick={() => handlePredictWinTeam()}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default SystemEventSelectCheck;
