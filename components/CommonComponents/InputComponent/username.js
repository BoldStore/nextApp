import React from "react";
import styles from "./styles.module.css";
function UsernameComponent({ value, setValue }) {
  return (
    <div className={styles.wrapper}>
      <p>Instagram Username</p>
      <div className={styles.flexWrap}>
        <p style={{ marginRight: "0.5rem" }}>@</p>
        <input
          className={styles.input2}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type={"text"}
          placeholder={"username"}
        />
      </div>
    </div>
  );
}

export default UsernameComponent;
