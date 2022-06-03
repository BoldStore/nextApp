import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import Image from "next/image";
import { Send } from "react-feather";
import BoldButton from "../BoldButton";
import Skeleton from "react-loading-skeleton";

function OrderComponent({
  id,
  storeUrl,
  storeName,
  storeLocation,
  postUrl,
  price,
  size,
}) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <div className={styles.userInfo}>
          {storeUrl ? (
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
          ) : (
            <Skeleton circle={true} height={50} width={50} />
          )}
          <div className={styles.nameLocation}>
            {storeName ? (
              <p>{storeName}</p>
            ) : (
              <Skeleton count={1} width={100} height={12} />
            )}
            {storeLocation ? (
              <p style={{ opacity: 0.5 }}>{storeLocation}</p>
            ) : (
              <Skeleton count={1} width={50} height={10} />
            )}
          </div>
        </div>
        {/* <MoreHorizIcon className={styles.moreIcon} /> */}
      </div>
      {id ? (
        <p style={{ marginTop: 0, color: "var(--lightGrey)" }}>
          Order Number : #{id}
        </p>
      ) : (
        <Skeleton count={1} width={80} height={10} />
      )}
      {postUrl ? (
        <Image
          src={postUrl}
          alt="item"
          width="450"
          height="450"
          className={styles.productImg}
        />
      ) : (
        <Skeleton count={1} width={"100%"} height={400} />
      )}
      {/* <Send className={styles.sendIcon} /> */}
      <div className={styles.priceContainer}>
        {price ? (
          <p>₹{price}</p>
        ) : (
          <Skeleton
            count={1}
            width={50}
            height={12}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          />
        )}
        {size ? (
          <p>{size}</p>
        ) : (
          <Skeleton
            count={1}
            width={50}
            height={12}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          />
        )}
      </div>
      {/* <div style={{ marginTop: "-1rem" }}>
        {/* <p>Order Details:</p>
        <div className={styles.orderDetails}>
          <p>Date: 22/06/2022</p>
          <p> Time: 5:00 P.M.</p>
          <p>Status: Received</p>
        </div>
      </div> */}
      {id ? (
        <Link href={`/customer/orders/${id}`} passHref={true}>
          <BoldButton text={"View Order Details"} />
        </Link>
      ) : (
        <Skeleton count={1} width={"100%"} height={35} />
      )}
    </div>
  );
}

export default OrderComponent;
