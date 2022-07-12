/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import VerifiedIcon from "@mui/icons-material/Verified";
import Link from "next/link";
import { motion } from "framer-motion";

function Grid({ store, products }) {
  const [flag0, setFlag0] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);

  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridHeader}>
        <Link href={`/store/${store.username}`} passHref={true}>
          <div className={styles.userInfo}>
            {store?.profile_pic ? (
              <Avatar
                alt={store?.username ?? ""}
                src={
                  store
                    ? store?.profile_pic
                    : "https://i.ibb.co/myvq6GR/aryan.jpg"
                }
                sx={{
                  width: 50,
                  height: 50,
                  cursor: "pointer",
                  border: "1px solid var(--darkGrey)",
                }}
              />
            ) : (
              <Skeleton circle={true} height={50} width={50} />
            )}

            <div className={styles.nameLocation}>
              {store?.username ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p>{store?.username}</p>
                  <p>
                    <VerifiedIcon
                      style={{
                        marginLeft: "0.5rem",
                        fontSize: "1.2rem",
                        color: "#1DA1F2",
                        marginBottom: "-0.1rem",
                      }}
                    />
                  </p>
                </div>
              ) : (
                <Skeleton count={1} width={100} height={12} />
              )}
              {store?.username ? (
                <p style={{ opacity: 0.5 }}>{store?.city ?? store?.name}</p>
              ) : (
                <Skeleton count={1} width={50} height={10} />
              )}
            </div>
          </div>
        </Link>
        <MoreHorizIcon className={styles.moreIcon} />
      </div>
      {products && (
        <div className={styles.productContainer}>
          {products[0]?.imgUrl ?? products[0].images.length > 0 ? (
            <div
              className={styles.divImg}
              onMouseEnter={() => setFlag0(true)}
              onMouseLeave={() => setFlag0(false)}
            >
              <img
                src={products[0]?.imgUrl ?? products[0].images[0].imgUrl}
                alt="item"
                width="600"
                height="600"
                className={styles.productImg}
              />
              {flag0 && (
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
          ) : (
            <></>
          )}

          <div className={styles.gridImageContainer}>
            <div
              className={styles.imgBox}
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "0.5rem",
              }}
            >
              {products[1]?.imgUrl ?? products[1].images.length > 0 ? (
                <div
                  className={styles.divImg}
                  onMouseEnter={() => setFlag1(true)}
                  onMouseLeave={() => setFlag1(false)}
                >
                  <img
                    src={
                      products[1]?.imgUrl ??
                      products[1]?.images[0].imgUrl ??
                      "/assets/shoe2.jpg"
                    }
                    alt="item"
                    width="300"
                    height="300"
                    className={styles.productImg}
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
                      <p>₹{products[1]?.amount ?? 200}</p>
                      <p>{"M"}</p>
                    </motion.div>
                  )}
                </div>
              ) : (
                <></>
              )}
              <div
                className={styles.gapBox}
                style={{ marginBottom: "0.5rem" }}
              ></div>
              {products[2]?.imgUrl ?? products[2].images.length > 0 ? (
                <div
                  className={styles.divImg}
                  onMouseEnter={() => setFlag2(true)}
                  onMouseLeave={() => setFlag2(false)}
                >
                  <img
                    src={
                      products[2]?.imgUrl ??
                      products[2]?.images[0]?.imgUrl ??
                      "/assets/shoe2.jpg"
                    }
                    alt="item"
                    width="300"
                    height="300"
                    className={styles.productImg}
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
                      <p>₹{products[2]?.amount ?? 200}</p>
                      <p>{"M"}</p>
                    </motion.div>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {products[3]?.imgUrl ?? products[3].images.length > 0 ? (
                <div
                  className={styles.divImg}
                  onMouseEnter={() => setFlag3(true)}
                  onMouseLeave={() => setFlag3(false)}
                >
                  <img
                    src={
                      products[3]?.imgUrl ??
                      products[3]?.images[0].imgUrl ??
                      "/assets/shoe2.jpg"
                    }
                    alt="item"
                    width="300"
                    height="300"
                    className={styles.productImg}
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
                      <p>₹{products[3]?.amount ?? 200}</p>
                      <p>{"M"}</p>
                    </motion.div>
                  )}
                </div>
              ) : (
                <></>
              )}
              <div
                className={styles.gapBox}
                style={{ marginBottom: "0.5rem" }}
              ></div>
              {products[4]?.imgUrl ?? products[4].images.length > 0 ? (
                <div
                  className={styles.divImg}
                  onMouseEnter={() => setFlag4(true)}
                  onMouseLeave={() => setFlag4(false)}
                >
                  <img
                    src={
                      products[4]?.imgUrl ??
                      products[4]?.images[0].imgUrl ??
                      "/assets/shoe2.jpg"
                    }
                    alt="item"
                    width="300"
                    height="300"
                    className={styles.productImg}
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
                      <p>₹{products[4]?.amount ?? 200}</p>
                      <p>{"M"}</p>
                    </motion.div>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Grid;
