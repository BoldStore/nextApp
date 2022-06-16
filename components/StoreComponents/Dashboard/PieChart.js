import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import styles from "./styles.module.css";

function PieChart({ topic, array }) {
  const data = {
    labels: ["T-Shirts", "Shirts", "Jackets"],
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
      <h1>Most Sold Products</h1>
      <Pie data={data} style={{ margin: "1rem", marginTop: "0rem" }} />
    </div>
  );
}

export default PieChart;
