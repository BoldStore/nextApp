import React from "react";
import styles from "./styles.module.css";
import PhoneComponent from "../PhoneComponent";

function IntroComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.flexDiv}>
        <PhoneComponent />
        <div>
          <h1 className={styles.heading}>
            <span style={{ color: "#808080" }}> The World's </span>First
            <br /> One Click{" "}
            <span style={{ color: "#808080" }}> MarketPlace.</span>
          </h1>
          <p className={styles.smallText}>Get Started </p>
        </div>
      </div>
    </div>
  );
}

export default IntroComponent;
