import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import { Send } from "react-feather";
import BoldButton from "../BoldButton";

function OrderComponent() {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
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
      <p style={{ marginTop: 0 }}>#1XCGYV</p>
      <Image
        src="/assets/shoe2.jpg"
        alt="item"
        width="450"
        height="450"
        className={styles.productImg}
      />
      <Send className={styles.sendIcon} />
      <div className={styles.priceContainer}>
        <p>Price: $200</p>
        <p>Size: M</p>
      </div>
      {/* <div style={{ marginTop: "-1rem" }}>
        {/* <p>Order Details:</p>
        <div className={styles.orderDetails}>
          <p>Date: 22/06/2022</p>
          <p> Time: 5:00 P.M.</p>
          <p>Status: Received</p>
        </div>
      </div> */}{" "}
      <BoldButton text={"View Order Details"} />
    </div>
  );
}

export default OrderComponent;
