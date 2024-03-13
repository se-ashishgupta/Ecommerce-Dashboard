import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Userdashboard.css";

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    const ctx = document.getElementById("myChart").getContext("2d");
    const newChart = new Chart(ctx, {
      setLineDash: "5, 15",
      type: "bar",
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            label: "Daily Orders",
            data: [50, 20, 10, 12, 50, 10, 60],
            backgroundColor: "white",
            border: "none",
            barThickness: 7,
            borderRadius: 10,
            borderDash: [1, 1],
          },
        ],
      },
      options: {
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
    <div className="canvas1-container">
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default BarChart;
