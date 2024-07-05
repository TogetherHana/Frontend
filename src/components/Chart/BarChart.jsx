import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const BarChart = ({
  series,
  categories,
  chartTitle,
  thisMonth,
  increaseDecrease
}) => {
  useEffect(() => {
    const options = {
      series: series,
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
            return value + "건";
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
            return value + "건";
          }
        },
        categories: categories,
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

    const chart = new ApexCharts(document.getElementById("bar-chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [series, categories]);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-6">
      <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
        <dl>
          <dd className="leading-none text-2xl font-bold text-gray-900 dark:text-white">
            {chartTitle}
          </dd>
        </dl>
      </div>

      <div className="grid grid-cols-2 py-5">
        <dl>
          <dt className="text-lg font-normal text-gray-500 dark:text-gray-400 pb-1">
            6월집계
          </dt>
          <dd className="leading-none text-lg font-bold text-blue-500 dark:text-green-400">
            {thisMonth} 건
          </dd>
        </dl>
        <dl>
          <dt className="text-lg font-normal text-gray-500 dark:text-gray-400 pb-1">
            전월대비 증감률
          </dt>
          <dd className="leading-none text-lg font-bold text-red-600 dark:text-red-500">
            {increaseDecrease}
          </dd>
        </dl>
      </div>

      <div id="bar-chart"></div>
    </div>
  );
};

export default BarChart;
