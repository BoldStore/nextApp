import React from "react";
import styles from "./styles.module.css";
function InputComponent({ value, setValue, placeholder, type, noText }) {
  return (
    <div className={styles.wrapper}>
      {!noText && <p>{placeholder}</p>}
      <input
        className={styles.input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputComponent;
