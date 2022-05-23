import React from "react";
import Post from "../../CommonComponents/Post";
import styles from "./styles.module.css";
import Image from "next/image";

function WorstPost() {
  return (
    <div className={styles.chartContainer}>
      <h1>Least Sold Product</h1>
      <Image
        src="/assets/shoe2.jpg"
        alt="item"
        width="450"
        height="450"
        className={styles.productImg}
      />
      <p>$200</p>
    </div>
  );
}

export default WorstPost;
