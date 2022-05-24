import React from "react";
import styles from "./styles3.module.css";
function Grid3() {
  return (
    <div className={styles.gridWrapper}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <img className={styles.bigImg} src={"/assets/shoe1.jpg"} />
        </div>
        <div className={styles.div2}>
          <img className={styles.img} src={"/assets/shoe1.jpg"} />
        </div>
        <div className={styles.div3}>
          <img className={styles.img} src={"/assets/shoe1.jpg"} />
        </div>
        <div className={styles.div4}>
          <img className={styles.img} src={"/assets/shoe1.jpg"} />
        </div>
        <div className={styles.div5}>
          <img className={styles.img} src={"/assets/shoe1.jpg"} />
        </div>
        <div className={styles.div6}>
          <img className={styles.bigImg} src={"/assets/shoe1.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default Grid3;
