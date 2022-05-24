import React from "react";
import styles from "./styles.module.css";

function Analytics() {
  return (
    <div className={styles.chartContainer}>
      <h1 style={{ fontSize: "1.5rem" }}>Bold Analytics</h1>
      <div className={styles.numberBox}>
        <p>New Customers</p>
        <p>20%</p>
      </div>
      <div className={styles.numberBox}>
        <p>Old Customers</p>
        <p>80%</p>
      </div>
      <div className={styles.numberBox}>
        <p>Retention</p>
        <p>70%</p>
      </div>
    </div>
  );
}

export default Analytics;
