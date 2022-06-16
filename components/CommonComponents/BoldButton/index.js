import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.css";

function BoldButton({ text, href, onClick }) {
  const router = useRouter();
  return (
    <button
      className={styles.button}
      onClick={
        onClick
          ? (e) => onClick(e)
          : () => {
              router.push(href ? href : "#");
            }
      }
    >
      <p>{text}</p>
    </button>
  );
}

export default BoldButton;
