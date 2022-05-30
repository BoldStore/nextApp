import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import { Bookmark, Send } from "react-feather";
import BoldButton from "../BoldButton";
import Link from "next/link";
import Post from "../Post";

function ProductComponent() {
  return (
    <>
      <div className={styles.productContainer}>
        <div style={{ width: "50%" }}>
          <Image
            src="/assets/shoe2.jpg"
            alt="item"
            width="500"
            height="500"
            className={styles.productImg}
          />
        </div>
        <div className={styles.productInfo}>
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
          <p style={{ fontSize: "0.8rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <Send className={styles.icon} />
            <Bookmark className={styles.icon} />
          </div>
          <div className={styles.priceContainer}>
            <p>Price: $200</p>
            <p>Size: M</p>
          </div>
          <BoldButton text={"Produce To Buy"} />
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <Post expanded={true} />
      </div>
    </>
  );
}

export default ProductComponent;
