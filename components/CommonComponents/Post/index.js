import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import { Bookmark } from "react-feather";
import BoldButton from "../BoldButton";

function Post({ storeName, storeLocation, postUrl, price, caption }) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <div className={styles.userInfo}>
          <Avatar
            alt="Avatar"
            src={"https://i.ibb.co/Bswp8RS/avi.jpg"}
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
      <Image
        src="/assets/shoe2.jpg"
        alt="item"
        width="450"
        height="450"
        className={styles.productImg}
      />
      <div className={styles.priceContainer}>
        <p>$200</p>
        <Bookmark className={styles.bookmarkIcon} />
      </div>
      <BoldButton text={"Buy Now"} />
    </div>
  );
}

export default Post;
