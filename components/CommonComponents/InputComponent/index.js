import React, { useState } from "react";
import styles from "./styles.module.css";
import { Eye, EyeOff } from "react-feather";

function InputComponent({ value, setValue, placeholder, type, noText }) {
  const [passType, setPassType] = useState("password");
  return (
    <div
      className={styles.wrapper}
      style={{ position: type == "password" && "relative" }}
    >
      {!noText && <p>{placeholder}</p>}
      <input
        className={styles.input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type={type == "password" ? passType : type}
        placeholder={placeholder}
      />
      {type == "password" && value.length > 0 && passType != "text" ? (
        <Eye className={styles.eye} onClick={() => setPassType("text")} />
      ) : type == "password" && value.length > 0 ? (
        <EyeOff
          className={styles.eye}
          onClick={() => setPassType("password")}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default InputComponent;
