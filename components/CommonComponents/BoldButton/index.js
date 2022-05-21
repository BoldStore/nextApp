import React from "react";
import styles from "./styles.module.css";

function BoldButton({ text }) {
  return (
    <button className={styles.button}>
      <p>Update{text}</p>
    </button>
  );
}

export default BoldButton;
