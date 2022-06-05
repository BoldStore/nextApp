import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.css";

function BoldButton({ text, href }) {
  const router = useRouter();
  return (
    <button
      className={styles.button}
      onClick={() => {
        router.push(href ? href : "#");
      }}
    >
      <p>{text}</p>
    </button>
  );
}

export default BoldButton;
