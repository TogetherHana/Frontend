import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const BarChart = ({ mainText = "", subText = "" }) => {
  const options = {
    series: [
      {
        name: "입금",
        color: "#3b82f6",
        data: [19203, 138475, 293814, 12938013]
      },
      {
        name: "출금",
        color: "#FB4A56",
        data: [19203, 138475, 293814, 12938013]
      }
    ],
    chart: {
      sparkline: {
        enabled: false
      },
      type: "bar",
      width: "100%",
      height: 400,
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: "easeout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "100%",
        borderRadiusApplication: "end",
        borderRadius: 5,
        dataLabels: {
          position: "top"
        }
      }
    },
    legend: {
      show: false,
      position: "bottom"
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontFamily: "noto, sans-serif"
      },
      offsetX: -50
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (value) {
          return value + "원";
        }
      },
      style: {
        fontSize: "14px",
        fontFamily: "noto, sans-serif"
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "noto, sans-serif",
          cssClass: "text-sm font-normal fill-gray-500 dark:fill-gray-400"
        },
        formatter: function (value) {
          return value + "원";
        }
      },
      categories: ["일", "둘", "셋", "넷"],
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "noto, sans-serif",
          cssClass: "text-sm font-bold fill-gray-500 dark:fill-gray-400"
        }
      }
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 30,
        top: -10
      }
    },
    fill: {
      opacity: 1
    }
  };

  useEffect(() => {
    const chart = new ApexCharts(document.getElementById("bar-chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-6">
      <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
        <dl>
          <dt className="text-lg font-normal text-gray-900 dark:text-gray-400 pb-1">
            정산
          </dt>
          <dd className="leading-none text-2xl font-bold text-gray-900 dark:text-white">
            총합계
          </dd>
        </dl>
      </div>

      <div className="grid grid-cols-2 py-5">
        <dl>
          <dt className="text-lg font-normal text-gray-500 dark:text-gray-400 pb-1">
            입금
          </dt>
          <dd className="leading-none text-lg font-bold text-blue-500 dark:text-green-400">
            + 총입금액원
          </dd>
        </dl>
        <dl>
          <dt className="text-lg font-normal text-gray-500 dark:text-gray-400 pb-1">
            출금
          </dt>
          <dd className="leading-none text-lg font-bold text-red-600 dark:text-red-500">
            -총 출금액원
          </dd>
        </dl>
      </div>

      <div id="bar-chart"></div>
    </div>
  );
};

export default BarChart;
