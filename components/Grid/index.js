import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import VerifiedIcon from "@mui/icons-material/Verified";
function Grid({
  storeUrl,
  storeName,
  storeLocation,
  img0,
  img1,
  img2,
  img3,
  img4,
}) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridHeader}>
        <div className={styles.userInfo}>
          {storeUrl ? (
            <Avatar
              alt="Avatar"
              src={storeUrl ? storeUrl : "https://i.ibb.co/myvq6GR/aryan.jpg"}
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
      <div className={styles.productContainer}>
        {img0 ? (
          <Image
            src={img0 ? img0 : "/assets/shoe2.jpg"}
            alt="item"
            width="600"
            height="600"
            className={styles.productImg}
          />
        ) : (
          <Skeleton
            count={1}
            width={"72vw"}
            height={600}
            className={styles.productImg}
          />
        )}

        <div className={styles.gridImageContainer}>
          <div
            className={styles.imgBox}
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "0.5rem",
            }}
          >
            {img1 ? (
              <Image
                src="/assets/shoe1.jpg"
                alt="item"
                width="300"
                height="300"
                className={styles.productImg}
              />
            ) : (
              <Skeleton
                count={1}
                width={0}
                height={300}
                className={styles.productImg}
              />
            )}
            <div
              className={styles.gapBox}
              style={{ marginBottom: "0.5rem" }}
            ></div>
            {img2 ? (
              <Image
                src="/assets/shoe1.jpg"
                alt="item"
                width="300"
                height="300"
                className={styles.productImg}
              />
            ) : (
              <Skeleton
                count={1}
                width={0}
                height={300}
                className={styles.productImg}
              />
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {img3 ? (
              <Image
                src="/assets/shoe1.jpg"
                alt="item"
                width="300"
                height="300"
                className={styles.productImg}
              />
            ) : (
              <Skeleton
                count={1}
                width={0}
                height={300}
                className={styles.productImg}
              />
            )}
            <div
              className={styles.gapBox}
              style={{ marginBottom: "0.5rem" }}
            ></div>
            {img4 ? (
              <Image
                src="/assets/shoe1.jpg"
                alt="item"
                width="300"
                height="300"
                className={styles.productImg}
              />
            ) : (
              <Skeleton
                count={1}
                width={0}
                height={300}
                className={styles.productImg}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
