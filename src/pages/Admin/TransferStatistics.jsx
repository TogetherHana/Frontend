import React, { useEffect, useState } from "react";
import BarChart from "../../components/Chart/BarChart";
import CountingCard from "../../components/Card/CountingCard";
import { useNavigate } from "react-router-dom";

const TransferStatistics = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "",
        color: "",
        data: []
      }
    ],
    categories: [],
    chartTitle: "",
    thisMonth: "",
    increaseDecrease: ""
  });

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const cntClick = () => {
    const seriesData = [200, 220, 250, 280];
    const thisMonthValue = seriesData[seriesData.length - 1];
    const prevMonthValue = seriesData[seriesData.length - 2];
    const increment =
      ((thisMonthValue - prevMonthValue) / prevMonthValue) * 100;

    setChartData({
      series: [
        {
          name: "생성 건수",
          color: "#44BD91",
          data: [200, 220, 250, 280]
        }
      ],

      categories: ["3월", "4월", "5월", "6월"],
      chartTitle: "모임통장 생성건수",
      thisMonth: formatNumber(thisMonthValue),
      increaseDecrease: increment + "%"
    });
  };
  const participantClick = () => {
    const seriesData = [1500, 1700, 2000, 2300];
    const thisMonthValue = seriesData[seriesData.length - 1];
    const prevMonthValue = seriesData[seriesData.length - 2];
    const increment =
      ((thisMonthValue - prevMonthValue) / prevMonthValue) * 100;

    setChartData({
      series: [
        {
          name: "참여자 수",
          color: "#44BD91",
          data: [1500, 1700, 2000, 2300]
        }
      ],

      categories: ["3월", "4월", "5월", "6월"],
      chartTitle: "모임통장 참여자 수",
      thisMonth: formatNumber(thisMonthValue),
      increaseDecrease: increment + "%"
    });
  };
  const transactionClick = () => {
    const seriesData = [5000, 5500, 6000, 6500];
    const thisMonthValue = seriesData[seriesData.length - 1];
    const prevMonthValue = seriesData[seriesData.length - 2];
    const increment =
      ((thisMonthValue - prevMonthValue) / prevMonthValue) * 100;

    setChartData({
      series: [
        {
          name: "입출금 건수",
          color: "#44BD91",
          data: [5000, 5500, 6000, 6500]
        }
      ],

      categories: ["3월", "4월", "5월", "6월"],
      chartTitle: "모임통장 입출금거래 건수",
      thisMonth: formatNumber(thisMonthValue),
      increaseDecrease: increment + "%"
    });
  };
  const eventClick = () => {
    const seriesData = [800, 900, 1000, 1200];
    const thisMonthValue = seriesData[seriesData.length - 1];
    const prevMonthValue = seriesData[seriesData.length - 2];
    const increment =
      ((thisMonthValue - prevMonthValue) / prevMonthValue) * 100;

    setChartData({
      series: [
        {
          name: "이벤트 건수",
          color: "#44BD91",
          data: [800, 900, 1000, 1200]
        }
      ],

      categories: ["3월", "4월", "5월", "6월"],
      chartTitle: "모임통장 이벤트 참여 건수",
      thisMonth: formatNumber(thisMonthValue),
      increaseDecrease: increment + "%"
    });
  };

  useEffect(() => {
    cntClick();
  }, []);

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h1 className="text-xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          함께, 하나?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            모임통장 통계
          </span>{" "}
          현황입니다.
        </h1>
      </div>
      <div className="w-full grid grid-cols-6  gap-6">
        <div className="col-span-4">
          <BarChart
            series={chartData.series}
            categories={chartData.categories}
            chartTitle={chartData.chartTitle}
            thisMonth={chartData.thisMonth}
            increaseDecrease={chartData.increaseDecrease}
          />
        </div>
        <div className="col-span-2 w-full space-y-6 flex flex-col">
          <div>
            <p className="mb-2 text-lg leading-6 font-semibold text-gray-500 dark:text-sky-400">
            한 달간 실적
            </p>
            <div className="flex items-center">
              <h1 className="inline-block text-xl sm:text-2xl font-extrabold text-emerald-500 tracking-tight dark:text-slate-200">
              2024.06.01 ~ 2024.06.30
              </h1>
            </div>

            {/*  */}
          </div>
          <div onClick={cntClick}>
            <CountingCard title="모임통장 개설 건수" count="280" />
          </div>
          <div onClick={participantClick}>
            <CountingCard title="모임통장 참여자 수" count="2,300" />
          </div>
          <div onClick={transactionClick}>
            <CountingCard title="모임통장 입출금거래 건수" count="6,500" />
          </div>
          <div onClick={eventClick}>
            <CountingCard title="모임통장 이벤트 참여 건수" count="1200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferStatistics;
