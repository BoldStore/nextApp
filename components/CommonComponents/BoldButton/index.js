import { useRouter } from "next/router";
import React from "react";
import styles from "./styles.module.css";

function BoldButton({ text, href, onClick, disabled }) {
  const router = useRouter();
  return (
    <button
      disabled={disabled ?? false}
      className={styles.button}
      onClick={
        onClick
          ? (e) => onClick(e)
          : () => {
              router.push(href ? href : "#");
            }
      }
    >
      {disabled ? <p>{"Not Available"}</p> : <p>{text}</p>}
    </button>
  );
}

export default BoldButton;
