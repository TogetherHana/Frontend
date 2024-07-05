import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const LineChart = ({ data }) => {
  useEffect(() => {
    // Helper function to format date strings
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const month = date.getMonth() + 1; // getMonth() is zero-based
      const day = date.getDate();
      return `${month}월 ${day}일`;
    };

    // Format the dates using the helper function
    const formattedDates = data.dates.map(formatDate);

    const options = {
      chart: {
        type: "line",
        height: "100%", // Changed to 100%
        maxWidth: "100%",
        toolbar: { show: false }
      },
      series: [
        {
          name: "신규 이벤트 참여자 수 ",
          data: data.newSignUps
        },
        {
          name: "총 이벤트 참여자 수",
          data: data.groupAccountRegistrations
        }
      ],
      xaxis: {
        categories: formattedDates
      },
      tooltip: {
        x: { format: "dd/MM/yy HH:mm" }
      },
      stroke: {
        curve: "smooth"
      }
    };

    const chart = new ApexCharts(
      document.querySelector("#line-chart"),
      options
    );
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <div id="line-chart" className="h-full"></div>;
};

export default LineChart;
