import Chart from "chart.js/auto";
import React from "react";
import { Bar } from "react-chartjs-2";
import BoldButton from "../../CommonComponents/BoldButton";
import styles from "./styles.module.css";

function BarChart({ topic, array }) {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Number of Products",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#1D9BF0",
          "#1D9BF0",
          "#1D9BF0",
          "#1D9BF0",
          "#1D9BF0",
          "#1D9BF0",
        ],
      },
    ],
  };
  return (
    <div className={styles.chartContainer}>
      <h1>Your Sales</h1>
      <Bar data={data} />
      <div className={styles.numberBox}>
        <p>Total Sales</p>
        <p>2000</p>
      </div>
      <div className={styles.numberBox}>
        <p>Average Monthly Sales</p>
        <p>20</p>
      </div>
      <BoldButton text={"Show All Sales"} href="/store/dashboard" />
    </div>
  );
}

export default BarChart;
