import React, { useState } from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import Image from "next/image";
import { Send } from "react-feather";
import BoldButton from "../BoldButton";
import Skeleton from "react-loading-skeleton";
import VerifiedIcon from "@mui/icons-material/Verified";
function OrderComponent({
  id,
  storeUrl,
  storeName,
  storeLocation,
  postUrl,
  price,
  size,
  isCompleted,
  images,
  type,
}) {
  const [video, setVideo] = useState(false);
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
                    {/* <Avatar
                   src={`/assets/VerifiedIcon/${svgMode}.svg`}
                   alt="verified"
                   sx={{
                     width: 12,
                     height: 12,
                   }}
                   style={{
                     marginLeft: "0.2rem",
                   }}
                 /> */}
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
        {/* <MoreHorizIcon className={styles.moreIcon} /> */}
      </div>
      {id ? (
        <p style={{ marginTop: 0, color: "var(--lightGrey)" }}>
          Order Number : #{id}
        </p>
      ) : (
        <Skeleton count={1} width={80} height={10} />
      )}

      {postUrl || type == "CAROUSEL_ALBUM" ? (
        !video ? (
          <Image
            onError={() => {
              setVideo(true);
            }}
            src={
              type == "CAROUSEL_ALBUM" && images
                ? images[0]?.imgUrl
                : postUrl ?? "/assets/shoe2.jpg"
            }
            alt="item"
            width="450"
            height="350"
            className={styles.productImg}
          />
        ) : (
          <video
            src={
              type == "CAROUSEL_ALBUM"
                ? images[0]?.imgUrl
                : postUrl ?? "/assets/shoe2.jpg"
            }
            muted
            autoPlay={false}
            className={styles.productImg}
          />
        )
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
        {size ? <p>{size}</p> : <></>}
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
