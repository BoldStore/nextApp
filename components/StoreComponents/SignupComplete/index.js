import React from "react";
import styles from "./styles.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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
      </div>
    </div>
  );
}

export default SignUpComplete;
