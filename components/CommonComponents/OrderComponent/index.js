import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Image from "next/image";
import BoldButton from "../BoldButton";
import Skeleton from "react-loading-skeleton";
import VerifiedIcon from "@mui/icons-material/Verified";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
function OrderComponent({
  id,
  storeUrl,
  storeName,
  storeLocation,
  postUrl,
  price,
  size,
  isCompleted,
}) {
  TimeAgo.addDefaultLocale(en);

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");
  if (id)
    return (
      <div className={styles.postContainer}>
        <div className={styles.postHeader}>
          <div className={styles.userInfo}>
            {storeUrl ? (
              <Avatar
                alt="Avatar"
                src={storeUrl}
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p>{storeName}</p>
                  {isCompleted && (
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
                  )}
                </div>
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
          {size ? <p>{size}</p> : <></>}
        </div>
        {id ? (
          <Link href={`/order/${id}`} passHref={true}>
            <BoldButton text={"View Order Details"} />
          </Link>
        ) : (
          <Skeleton count={1} width={"100%"} height={35} />
        )}
      </div>
    );
}

export default OrderComponent;
