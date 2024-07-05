import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import LineChart from "../../components/Chart/LineChart";

// Register the ChartDataLabels plugin
Chart.register(ChartDataLabels);

const EventStatistics = () => {
  const [data, setData] = useState({
    dates: [
      "2023-06-01",
      "2023-06-02",
      "2023-06-03",
      "2023-06-04",
      "2023-06-05",
      "2023-06-06",
      "2023-06-07",
      "2023-06-08",
      "2023-06-09",
      "2023-06-10",
      "2023-06-11",
      "2023-06-12",
      "2023-06-13",
      "2023-06-14",
      "2023-06-15",
      "2023-06-16",
      "2023-06-17",
      "2023-06-18",
      "2023-06-19",
      "2023-06-20",
      "2023-06-21",
      "2023-06-22",
      "2023-06-23",
      "2023-06-24",
      "2023-06-25",
      "2023-06-26",
      "2023-06-27",
      "2023-06-28",
      "2023-06-29",
      "2023-06-30"
    ],
    groupAccountRegistrations: [
      10, 15, 12, 25, 14, 16, 18, 20, 17, 22, 24, 26, 30, 28, 32, 35, 34, 36,
      38, 40, 39, 37, 36, 34, 32, 30, 28, 27, 25, 23
    ],
    newSignUps: [
      5, 8, 7, 10, 6, 7, 8, 9, 7, 8, 10, 12, 11, 13, 12, 14, 15, 13, 14, 15, 13,
      12, 11, 10, 9, 8, 7, 6, 5, 4
    ]
  });

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: "white",
        font: {
          weight: "bold"
        },
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        }
      },
      legend: {
        display: false
      }
    }
  };

  const ageData = {
    labels: ["10대", "20대", "30대", "40대", "50대"],
    datasets: [
      {
        data: [15, 35, 25, 15, 10],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF"
        ]
      }
    ]
  };

  const predictionData = {
    labels: ["축구", "야구", "e-스포츠"],
    datasets: [
      {
        label: "참여자 수",
        data: [2012, 3392, 1283],
        backgroundColor: "#E2F1EC",
        borderColor: "#E2F1EC",
        borderWidth: 1
      }
    ]
  };

  const ticketData = {
    labels: ["4월", "5월", "6월"],
    datasets: [
      {
        label: "참여자 수",
        data: [1874, 2039, 3605],
        backgroundColor: "#E2F1EC",
        borderColor: "#E2F1EC",
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h1 className="text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            6월 이벤트
          </span>{" "}
          통계입니다.
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div
          className="bg-white rounded-lg shadow p-6 dark:bg-gray-800"
          style={{ height: "250px" }}
        >
          <h2 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">
            연령별 이벤트 참여자 비교
          </h2>
          <div style={{ height: "90%" }}>
            <Pie data={ageData} options={pieOptions} />
          </div>
        </div>
        <div
          className="bg-white rounded-lg shadow p-6 dark:bg-gray-800"
          style={{ height: "250px" }}
        >
          <h2 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">
            종목별 승리팀 예측 이벤트
          </h2>
          <div style={{ height: "90%" }}>
            <Bar
              data={predictionData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
        <div
          className="bg-white rounded-lg shadow p-6 dark:bg-gray-800"
          style={{ height: "250px" }}
        >
          <h2 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">
            티켓 선착순 이벤트
          </h2>
          <div style={{ height: "90%" }}>
            <Bar
              data={ticketData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
      <div className="h-72">
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default EventStatistics;
