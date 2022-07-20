import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { Bookmark, Send } from "react-feather";
import BoldButton from "../BoldButton";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
function CompleteOrderComponent({ order }) {
  TimeAgo.addDefaultLocale(en);

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");
  return (
    <>
      <div className={styles.productContainer}>
        <Image
          src={
            order?.product?.imgUrl != ""
              ? order?.product?.imgUrl
              : order?.product?.images[0]?.imgUrl
          }
          alt={order?.product?.name}
          width="650"
          height="650"
          className={styles.productImg}
        />

        <div className={styles.productInfo}>
          <h1 style={{ marginTop: 0, marginBottom: 0 }}>
            {order?.product?.name ?? `Product By ${order?.store?.username}`}
          </h1>
          <p style={{ opacity: 0.5 }}>Order Id : #{order?.id}</p>
          <div className={styles.userInfo}>
            <Avatar
              alt="Avatar"
              src={order?.store?.profile_pic}
              sx={{
                width: 50,
                height: 50,
                cursor: "pointer",
                border: "1px solid var(--darkGrey)",
              }}
            />
            <div className={styles.nameLocation}>
              <p>{order?.store?.username}</p>
              <p style={{ opacity: 0.5 }}>{order?.store?.city}</p>
            </div>
          </div>
          <p style={{ opacity: 0.5 }}>
            {order?.createdAt ? order?.createdAt?.toString() : ""}
          </p>
          <p style={{ opacity: 0.5, marginTop: 0 }}>Status : {order?.status}</p>
          <p style={{ marginTop: 0 }}>{order?.product?.caption}</p>
          <div>
            <Send className={styles.icon} />
            <Bookmark className={styles.icon} />
          </div>
          <div className={styles.priceContainer}>
            <p>Price: ₹{order?.amount}</p>
            <p>Size: {order?.product?.size}</p>
          </div>

          <BoldButton text={"Download Receipt"} />
        </div>
      </div>
    </>
  );
}

export default CompleteOrderComponent;
