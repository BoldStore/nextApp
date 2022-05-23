import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import styles from "./styles.module.css";

function LineChart({ topic, array }) {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: `Amount in Rupees`,
        data: [65, 59, 80, 81, 56, 55, 40],
        pointBackgroundColor: "#1D9BF0",
        borderColor: "#1D9BF0",
      },
    ],
  };
  return (
    <div className={styles.chartContainer}>
      <h1>Your Revenue (&#8377;)</h1>
      <Line data={data} />
      <div className={styles.numberBox}>
        <p>Total Revenue</p>
        <p>&#8377; 2,00,000</p>
      </div>
      <div className={styles.numberBox}>
        <p>Average Monthly Revenue</p>
        <p>&#8377; 2000</p>
      </div>
    </div>
  );
}

export default LineChart;
