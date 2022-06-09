import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles4.module.css";
function Grid4() {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  const [flag6, setFlag6] = useState(false);

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.parent}>
        <Link href="/product/1" passHref={true}>
          <div
            className={styles.div1}
            onMouseEnter={() => setFlag1(true)}
            onMouseLeave={() => setFlag1(false)}
          >
            <img className={styles.bigImg} src={"/assets/shoe1.jpg"} />
            {flag1 && (
              <motion.div
                className={styles.hoverDiv}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <p>₹100</p> <p>M</p>
              </motion.div>
            )}
          </div>
        </Link>
        <Link href="/product/1" passHref={true}>
          <div
            className={styles.div2}
            onMouseEnter={() => setFlag2(true)}
            onMouseLeave={() => setFlag2(false)}
          >
            <img className={styles.bigImg} src={"/assets/shoe1.jpg"} />
            {flag2 && (
              <motion.div
                className={styles.hoverDiv}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <p>₹100</p> <p>M</p>
              </motion.div>
            )}
          </div>
        </Link>
        <Link href="/product/1" passHref={true}>
          <div
            className={styles.div3}
            onMouseEnter={() => setFlag3(true)}
            onMouseLeave={() => setFlag3(false)}
          >
            <img className={styles.img} src={"/assets/shoe1.jpg"} />
            {flag3 && (
              <motion.div
                className={styles.hoverDiv}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <p>₹100</p> <p>M</p>
              </motion.div>
            )}
          </div>
        </Link>
        <Link href="/product/1" passHref={true}>
          <div
            className={styles.div4}
            onMouseEnter={() => setFlag4(true)}
            onMouseLeave={() => setFlag4(false)}
          >
            <img className={styles.img} src={"/assets/shoe1.jpg"} />
            {flag4 && (
              <motion.div
                className={styles.hoverDiv}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <p>₹100</p> <p>M</p>
              </motion.div>
            )}
          </div>
        </Link>
        <Link href="/product/1" passHref={true}>
          <div
            className={styles.div5}
            onMouseEnter={() => setFlag5(true)}
            onMouseLeave={() => setFlag5(false)}
          >
            <img className={styles.img} src={"/assets/shoe1.jpg"} />
            {flag5 && (
              <motion.div
                className={styles.hoverDiv}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <p>₹100</p> <p>M</p>
              </motion.div>
            )}
          </div>
        </Link>
        <Link href="/product/1" passHref={true}>
          <div
            className={styles.div6}
            onMouseEnter={() => setFlag6(true)}
            onMouseLeave={() => setFlag6(false)}
          >
            <img className={styles.img} src={"/assets/shoe1.jpg"} />
            {flag6 && (
              <motion.div
                className={styles.hoverDiv}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <p>₹100</p> <p>M</p>
              </motion.div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Grid4;
