import React from "react";
import styles from "./styles.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UpiCard from "./UpiCard";
import AddressCard from "./AddressCard";
function SignUpComplete() {
  return (
    <div className={styles.container}>
      <div style={{ width: "300px", paddingTop: "2rem" }}>
        <CircularProgressbar
          value={50}
          text={`${50}%`}
          strokeWidth={1}
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: `#1DA1F2`,
            textColor: "#1DA1F2",
            trailColor: "#d6d6d6",
          })}
        />
        <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
          Complete Your Profile
        </h2>
        <p style={{ textAlign: "center" }}>
          <span style={{ color: "#1DA1F2" }}>2 out of 4</span> completed
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <UpiCard />
        <AddressCard />
      </div>
    </div>
  );
}

export default SignUpComplete;
