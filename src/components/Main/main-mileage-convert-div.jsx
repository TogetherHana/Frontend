import React, { useEffect, useState } from "react";
import reloading from "@/assets/images/reloading.svg";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { mileageModalAtom } from "@/stores";
import { useAtom } from "jotai";

function MainMileageConvertDiv({ mileageInfo }) {
  const qc = useQueryClient();
  const [convertMileage, setConvertMileage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mileageModalData, setMileageModalData] = useAtom(mileageModalAtom);

  // @ts-ignore
  const accessToken = qc.getQueryData(["is-member"]).data.accessToken;

  const convertInfo = useQuery({
    queryKey: ["convert-info"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BE_URI}/mileage/transfer`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify({
            mileageIdx: mileageInfo.mileageIdx,
            withdrawalAmount: convertMileage
          })
        }
      );
      return response.json();
    },
    enabled: isSubmitting,
    staleTime: 2000
  });

  const handleConvertMileage = () => {
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (convertInfo.data) {
      setIsSubmitting(false);
      if (convertInfo.data.isSuccess) {
        // console.log(convertInfo.data.data);

        setMileageModalData((prev) => ({
          ...prev,
          isOpen: !prev.isOpen
        }));
      }
    }
  }, [convertInfo.data]);

  useEffect(() => {
    qc.resetQueries({ queryKey: ["convert-info"] });
  }, [mileageModalData]);

  return (
    <div className="homeMileageModalDiv">
      <div className="title">마일리지 전환</div>
      <div className="detail">
        <div className="mileage">
          <div>현재 마일리지</div>
          <div className="currentM">{mileageInfo.amount}M</div>
        </div>
        {/* 전환 svg */}
        <img src={reloading} alt="reloading" className="mx-auto" />
        <div className="mileage">
          <div>전환할 마일리지</div>
          <div className="convertMileage">
            {/* <input /> */}
            <input
              className="inputM"
              onChange={(e) => setConvertMileage(e.target.value)}
            />
            <div className="currentM">M</div>
          </div>
        </div>
      </div>
      {/* <div className="homeMileageDropDown"></div> */}
      <div className="homeMileageBtn" onClick={() => handleConvertMileage()}>
        전환하기
      </div>
    </div>
  );
}

export default MainMileageConvertDiv;
