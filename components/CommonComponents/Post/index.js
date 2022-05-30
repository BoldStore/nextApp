import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import { Bookmark } from "react-feather";
import BoldButton from "../BoldButton";
import Link from "next/link";

function Post({ storeName, storeLocation, postUrl, price, caption, expanded }) {
  return (
    <div className={styles.postContainer} style={{ marginLeft: expanded && 0 }}>
      <Link href="/store/profile" passHref={true}>
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
      </Link>
      <Link href={!expanded ? "/store/product/1" : "#"} passHref={true}>
        <div style={{ overflow: "hidden", borderRadius: "1rem" }}>
          <Image
            src={postUrl ?? "/assets/shoe2.jpg"}
            alt="item"
            width="450"
            height="450"
            className={styles.productImg}
          />
        </div>
      </Link>
      <div className={styles.priceContainer}>
        <p>$200</p>
        <Bookmark className={styles.bookmarkIcon} />
      </div>
      {expanded && (
        <>
          <p style={{ marginTop: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </>
      )}
      <BoldButton text={"Buy Now"} />
    </div>
  );
}

export default Post;
