import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DiffLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("myDiffLineChart").getContext("2d");
    const newChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Yearly Orders",
            data: [50, 40, 300, 320, 500, 350, 200, 630, 500],
            borderColor: "white", // Line color
            borderWidth: 3, // Line width
            fill: false, // To fill the area under the line, set it to true
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            ticks: {
              color: "white",
              font: {
                size: 13,
              },
            },
          },
          y: {
            ticks: {
              color: "white",
              font: {
                size: 13,
              },
            },
            beginAtZero: true,
          },
        },
      },
    });
    chartRef.current = newChart;
  }, []);

  return (
    <div className="canvas3-container">
      <canvas id="myDiffLineChart"></canvas>
    </div>
  );
};

export default DiffLineChart;
