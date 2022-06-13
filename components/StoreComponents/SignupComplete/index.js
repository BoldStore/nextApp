import React from "react";
import styles from "./styles.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UpiCard from "./UpiCard";
import AddressCard from "./AddressCard";
import { useSelector } from "react-redux";

function SignUpComplete() {
  const profile = useSelector((state) => state.profile);
  return (
    <div className={styles.container}>
      <div style={{ width: "300px", paddingTop: "2rem" }}>
        <CircularProgressbar
          value={profile.data?.percentage}
          text={`${Math.round(profile.data?.percentage ?? 0)}%`}
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

        {Math.round(profile.data?.percentage) == 33 ? (
          <p style={{ textAlign: "center" }}>
            <span style={{ color: "#1DA1F2" }}>1 out of 3</span> completed
          </p>
        ) : Math.round(profile.data?.percentage) == 67 ? (
          <p style={{ textAlign: "center" }}>
            <span style={{ color: "#1DA1F2" }}>2 out of 3</span> completed
          </p>
        ) : Math.round(profile.data?.percentage) == 100 ? (
          <p style={{ textAlign: "center" }}>
            <span style={{ color: "#1DA1F2" }}>3 out of 3</span> completed
          </p>
        ) : (
          <p style={{ textAlign: "center" }}>
            <span style={{ color: "#1DA1F2" }}>0 out of 3</span> completed
          </p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {!profile?.data?.paymentDetails && <UpiCard />}
        {!profile?.data?.address && <AddressCard />}
      </div>
    </div>
  );
}

export default SignUpComplete;
