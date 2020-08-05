import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {
  const data = {
    labels: ["Jan", "Fev", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 162, 86, 1)",
          "rgba(255, 159, 86, 1)",
          "rgba(255, 102, 86, 1)"
        ],
        pointBackgroundColor: "rgba(255, 206, 86, 0.2",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    }
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
