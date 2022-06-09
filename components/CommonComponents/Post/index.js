import React, { useState } from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import { toast } from "react-toastify";
import { Bookmark } from "react-feather";
import BoldButton from "../BoldButton";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import VerifiedIcon from "@mui/icons-material/Verified";
function Post({
  id,
  storeUrl,
  storeName,
  storeLocation,
  postUrl,
  price,
  size,
  caption,
}) {
  const [text, setText] = useState(caption?.slice(0, 50));
  const [readMore, setReadMore] = useState(false);
  const notify = () => toast("Product Saved!");
  return (
    <div className={styles.postContainer}>
      <Link href="/store/profile" passHref={true}>
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
                    justifyContent: "center",
                  }}
                >
                  <p>{storeName}</p>
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
              {storeLocation ? (
                <p style={{ opacity: 0.5 }}>{storeLocation}</p>
              ) : (
                <Skeleton count={1} width={50} height={10} />
              )}
            </div>
          </div>
          <MoreHorizIcon className={styles.moreIcon} />
        </div>
      </Link>
      <Link href={`/store/product/₹{id}`} passHref={true}>
        <div
          style={{
            overflow: "hidden",
            borderRadius: "1rem",
            position: "relative",
          }}
        >
          {postUrl ? (
            <img
              src={postUrl ?? "/assets/shoe2.jpg"}
              alt="item"
              width="450"
              height="450"
              className={styles.productImg}
            />
          ) : (
            <Skeleton count={1} width={"100%"} height={400} />
          )}
        </div>
      </Link>

      <div className={styles.priceContainer}>
        {price ? (
          <p>₹{price}</p>
        ) : (
          <Skeleton
            count={1}
            width={100}
            height={10}
            style={{ margin: "1rem", marginLeft: 0 }}
          />
        )}
        {/* {size && <p>{size}</p>} */}
        {price && <Bookmark onClick={notify} className={styles.bookmarkIcon} />}
      </div>

      <>
        <p style={{ marginTop: 0 }}>
          {!readMore ? text : caption}
          {!readMore && "..."}
          <p
            style={{
              cursor: "pointer",
              color: "var(--lightGrey)",
              marginBottom: 0,
            }}
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "Show Less" : " Read More"}
          </p>
        </p>
      </>

      {price ? (
        <BoldButton text={"Buy Now"} />
      ) : (
        <Skeleton count={1} width={"100%"} height={35} />
      )}
    </div>
  );
}

export default Post;
