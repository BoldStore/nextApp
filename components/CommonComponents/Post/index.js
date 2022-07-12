/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { toast } from "react-toastify";
import { Bookmark } from "react-feather";
import BoldButton from "../BoldButton";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import Image from "next/image";
import { signInAnonymously } from "firebase/auth";
import * as ActionTypes from "../../../store/ActionTypes";

function Post({
  id,
  storeUrl,
  storeName,
  storeLocation,
  postUrl,
  images,
  price,
  size,
  caption,
  isCompleted,
  available,
  sold,
  type,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const [video, setVideo] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const profile = useSelector((state) => state.profile);
  const orders = useSelector((state) => state.orders);
  const text = caption?.slice(0, 35);

  const notify = () => toast("Product Saved!");

  const handlePayment = useCallback(async () => {
    if (orders.isLoading) {
      return;
    }

    if (!user) {
      await signInAnonymously(auth);
    }

    dispatch({
      type: ActionTypes.ADD_PRODUCT_TO_STATE,
      productId: id,
    });

    router.push("/address");
  }, []);

  return (
    <div className={styles.postContainer}>
      <Link
        href={
          profile?.data?.data?.username == storeName
            ? `/profile`
            : `/store/${storeName}`
        }
        passHref={true}
      >
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

              <p style={{ opacity: 0.5 }}>
                {storeLocation ? storeLocation : "India"}
              </p>
            </div>
          </div>
          <MoreHorizIcon className={styles.moreIcon} />
        </div>
      </Link>
      <Link href={`/product/${id}`} passHref={true}>
        <div
          className={styles.imageCover}
          style={{
            overflow: "hidden",
            borderRadius: "1rem",
            width: "350px",
            height: "350px",
          }}
        >
          {postUrl || type == "CAROUSEL_ALBUM" ? (
            !video ? (
              <Image
                onError={() => {
                  setVideo(true);
                }}
                src={
                  type == "CAROUSEL_ALBUM"
                    ? images[0]?.imgUrl
                    : postUrl ?? "/assets/shoe2.jpg"
                }
                alt="item"
                width="450"
                height="450"
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

      {caption?.length >= 35 ? (
        <>
          <p
            style={{ marginTop: 0 }}
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {!readMore ? text : caption}
            {!readMore && "..."}
            <span
              style={{
                cursor: "pointer",
                color: "var(--lightGrey)",
                marginBottom: 0,
                fontSize: "0.75rem",
              }}
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </span>
          </p>
        </>
      ) : (
        <p style={{ marginTop: 0 }}>{caption}</p>
      )}

      <BoldButton
        disabled={!available ? true : sold ? true : false}
        text={!orders.isLoading ? "Buy Now" : "Loading..."}
        onClick={handlePayment}
      />
    </div>
  );
}

export default Post;
