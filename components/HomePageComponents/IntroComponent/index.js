import React from "react";
import styles from "./styles.module.css";
import PhoneComponent from "../PhoneComponent";

function IntroComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.flexDiv}>
        <PhoneComponent />
        <h1 className={styles.heading}>
          <span style={{ opacity: 0.5 }}> The World's </span>First
          <br /> One Click <span style={{ opacity: 0.5 }}> MarketPlace.</span>
        </h1>
      </div>
    </div>
  );
}

export default IntroComponent;
