import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./styles1.module.css";
function Grid1() {
  return (
    <div className={styles.gridWrapper}>
      <div className={styles.parent}>
        <Link href="/store/product/1" passHref={true}>
          <div className={styles.div1}>
            <img className={styles.bigImg} src={"/assets/shoe1.jpg"} />
          </div>
        </Link>
        <Link href="/store/product/1" passHref={true}>
          <div className={styles.div2}>
            <img className={styles.img} src={"/assets/shoe1.jpg"} />
          </div>
        </Link>
        <Link href="/store/product/1" passHref={true}>
          <div className={styles.div3}>
            <img className={styles.img} src={"/assets/shoe1.jpg"} />
          </div>
        </Link>
        <Link href="/store/product/1" passHref={true}>
          <div className={styles.div4}>
            <img className={styles.bigImg} src={"/assets/shoe1.jpg"} />
          </div>
        </Link>
        <Link href="/store/product/1" passHref={true}>
          <div className={styles.div5}>
            <img className={styles.img} src={"/assets/shoe1.jpg"} />
          </div>
        </Link>
        <Link href="/store/product/1" passHref={true}>
          <div className={styles.div6}>
            <img className={styles.img} src={"/assets/shoe1.jpg"} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Grid1;
