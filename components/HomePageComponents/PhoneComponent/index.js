import React from "react";
import styles from "./styles.module.css";

function PhoneComponent({ imgSrc, num, text }) {
  return (
    <div className={styles.imgFlex}>
      <div className={styles.circle}></div>
      <img src={imgSrc} />
      <p>
        {num} <span style={{ opacity: 0.5 }}>{text}</span>
      </p>
    </div>
  );
}

export default PhoneComponent;
