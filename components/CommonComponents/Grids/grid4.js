import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles4.module.css";
function Grid4({ products }) {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  const [flag6, setFlag6] = useState(false);

  if (products?.length == 6)
    return (
      <div className={styles.gridWrapper}>
        <div className={styles.parent}>
          <Link href={`/product/${products[0]?.id}`} passHref={true}>
            <div
              className={styles.div1}
              onMouseEnter={() => setFlag1(true)}
              onMouseLeave={() => setFlag1(false)}
            >
              <img
                className={styles.bigImg}
                src={
                  products[0]?.type == "CAROUSEL_ALBUM"
                    ? products[0]?.images[0]?.imgUrl
                    : products[0]?.imgUrl
                }
              />
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
                  <p>₹{products[0]?.amount ?? 200}</p>
                  <p>{"M"}</p>
                </motion.div>
              )}
            </div>
          </Link>
          <Link href={`/product/${products[1]?.id}`} passHref={true}>
            <div
              className={styles.div2}
              onMouseEnter={() => setFlag2(true)}
              onMouseLeave={() => setFlag2(false)}
            >
              <img
                className={styles.bigImg}
                src={
                  products[1]?.type == "CAROUSEL_ALBUM"
                    ? products[1]?.images[0]?.imgUrl
                    : products[1]?.imgUrl
                }
              />
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
                  <p>₹{products[1]?.amount ?? 200}</p>
                  <p>{"M"}</p>
                </motion.div>
              )}
            </div>
          </Link>
          <Link href={`/product/${products[2]?.id}`} passHref={true}>
            <div
              className={styles.div3}
              onMouseEnter={() => setFlag3(true)}
              onMouseLeave={() => setFlag3(false)}
            >
              <img
                className={styles.img}
                src={
                  products[2]?.type == "CAROUSEL_ALBUM"
                    ? products[2]?.images[0]?.imgUrl
                    : products[2]?.imgUrl
                }
              />
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
                  <p>₹{products[2]?.amount ?? 200}</p>
                  <p>{"M"}</p>
                </motion.div>
              )}
            </div>
          </Link>
          <Link href={`/product/${products[3]?.id}`} passHref={true}>
            <div
              className={styles.div4}
              onMouseEnter={() => setFlag4(true)}
              onMouseLeave={() => setFlag4(false)}
            >
              <img
                className={styles.img}
                src={
                  products[3]?.type == "CAROUSEL_ALBUM"
                    ? products[3]?.images[0]?.imgUrl
                    : products[3]?.imgUrl
                }
              />
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
                  <p>₹{products[3]?.amount ?? 200}</p>
                  <p>{"M"}</p>
                </motion.div>
              )}
            </div>
          </Link>
          <Link href={`/product/${products[4]?.id}`} passHref={true}>
            <div
              className={styles.div5}
              onMouseEnter={() => setFlag5(true)}
              onMouseLeave={() => setFlag5(false)}
            >
              <img
                className={styles.img}
                src={
                  products[4]?.type == "CAROUSEL_ALBUM"
                    ? products[4]?.images[0]?.imgUrl
                    : products[4]?.imgUrl
                }
              />
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
                  <p>₹{products[4]?.amount ?? 200}</p>
                  <p>{"M"}</p>
                </motion.div>
              )}
            </div>
          </Link>
          <Link href={`/product/${products[5]?.id}`} passHref={true}>
            <div
              className={styles.div6}
              onMouseEnter={() => setFlag6(true)}
              onMouseLeave={() => setFlag6(false)}
            >
              <img
                className={styles.img}
                src={
                  products[5]?.type == "CAROUSEL_ALBUM"
                    ? products[5]?.images[0]?.imgUrl
                    : products[5]?.imgUrl
                }
              />
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
                  <p>₹{products[5]?.amount ?? 200}</p>
                  <p>{"M"}</p>
                </motion.div>
              )}
            </div>
          </Link>
        </div>
      </div>
    );
}

export default Grid4;
