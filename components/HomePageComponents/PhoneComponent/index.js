import React from "react";
import styles from "./styles.module.css";

function PhoneComponent() {
  return (
    <div className={styles.imgFlex}>
      <div className={styles.circle}></div>
      <img src={"/assets/startingScreen.png"} />
      <p>
        01 <span style={{ opacity: 0.5 }}>Starting Screen</span>
      </p>
    </div>
  );
}

export default PhoneComponent;
