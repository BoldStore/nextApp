import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";

function Grid({ storeUrl, storeName, storeLocation }) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridHeader}>
        <div className={styles.userInfo}>
          <Avatar
            alt="Avatar"
            src={"https://i.ibb.co/myvq6GR/aryan.jpg"}
            sx={{
              width: 50,
              height: 50,
              cursor: "pointer",
              border: "1px solid var(--darkGrey)",
            }}
          />
          <div className={styles.nameLocation}>
            <p>Store_Username</p>
            <p style={{ opacity: 0.5 }}>New Delhi</p>
          </div>
        </div>
        <MoreHorizIcon className={styles.moreIcon} />
      </div>
      <div className={styles.productContainer}>
        <Image
          src="/assets/shoe2.jpg"
          alt="item"
          width="450"
          height="450"
          className={styles.productImg}
        />
        <div className={styles.gridImageContainer}>
          <div
            className={styles.imgBox}
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "0.5rem",
            }}
          >
            <Image
              src="/assets/shoe1.jpg"
              alt="item"
              width="220"
              height="220"
              className={styles.productImg}
            />
            <div
              className={styles.gapBox}
              style={{ marginBottom: "0.5rem" }}
            ></div>
            <Image
              src="/assets/shoe1.jpg"
              alt="item"
              width="220"
              height="220"
              className={styles.productImg}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Image
              src="/assets/shoe1.jpg"
              alt="item"
              width="220"
              height="220"
              className={styles.productImg}
            />
            <div
              className={styles.gapBox}
              style={{ marginBottom: "0.5rem" }}
            ></div>
            <Image
              src="/assets/shoe1.jpg"
              alt="item"
              width="220"
              height="220"
              className={styles.productImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
