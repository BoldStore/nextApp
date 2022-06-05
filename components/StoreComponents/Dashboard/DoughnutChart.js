import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import styles from "./styles.module.css";

function DoughnutChart({ topic, array }) {
  const data = {
    labels: ["Medium(M)", "Large(L, XL)", "Small(S, XS)"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["#FE5758", "#1DA1F2", "#FEA928"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className={styles.chartContainer}>
      <h1>Most Sold Sizes</h1>
      <Doughnut data={data} style={{ margin: "1rem", marginTop: "0rem" }} />
    </div>
  );
}

export default DoughnutChart;
