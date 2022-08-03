import styles from "./styles.module.css";
// import ProductComponent from "../ProductComponent/index";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { Bookmark, Send } from "react-feather";
import BoldButton from "../BoldButton";
import { RWebShare } from "react-web-share";
import { useDispatch, useSelector } from "react-redux";
import { saveProduct } from "../../../store/actions/products";
import Link from "next/link";
import VerifiedIcon from "@mui/icons-material/Verified";
import ProductCarousel from "../ProductComponent/ProductCarousel";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

function index() {
  // const dispatch = useDispatch();
  // const saveProductInDb = () => {
  //   dispatch(saveProduct(product?.product.id));
  // };
  // const profile = useSelector((state) => state.profile);
  // const [video, setVideo] = useState(false);

  // TimeAgo.addDefaultLocale(en);

  // // Create formatter (English).
  // const timeAgo = new TimeAgo("en-US");
  // const date = new Date(product?.product?.postedOn ?? null);

  const product = {};
  const video = null;
  const profile = {};

  return (
    <div className={styles.productContainer}>
      <div className={styles.innerContainerA}>
        <>
          <div className={styles.pContainer}>
            <Link
              passHref={true}
              href={
                profile?.data?.data?.username == product?.store?.username
                  ? `/profile`
                  : `/store/${product?.store?.username}`
              }
            >
              <div className={styles.userInfoMobile}>
                <Avatar
                  alt="Store Profile Pic"
                  src={product?.store?.profile_pic}
                  sx={{
                    width: 50,
                    height: 50,
                    cursor: "pointer",
                    border: "1px solid var(--darkGrey)",
                  }}
                />

                <div className={styles.nameLocation}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p>{product?.store?.username ?? ""}</p>
                    {product?.store?.isCompleted && (
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
                  <p style={{ opacity: 0.5 }}>
                    {product?.store?.city ?? "India"}
                  </p>
                </div>
              </div>
            </Link>
            {product?.product?.type == "CAROUSEL_ALBUM" ? (
              <ProductCarousel product={product} />
            ) : !video ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                onError={() => {
                  setVideo(true);
                }}
                src={
                  product?.product?.type == "CAROUSEL_ALBUM"
                    ? product?.product?.images[0]?.imgUrl
                    : product?.product?.imgUrl
                }
                alt="item"
                width="650"
                height="650"
                className={styles.productImg}
              />
            ) : (
              <video
                src={
                  product?.product?.type == "CAROUSEL_ALBUM"
                    ? product?.product?.images[0]?.imgUrl
                    : product?.product?.imgUrl
                }
                muted
                autoPlay={false}
                className={styles.productImg}
              />
            )}

            <div className={styles.productInfo}>
              <p>{product?.product?.caption ?? "No Caption"}</p>
              <p style={{ marginTop: 0, color: "var(--lightGrey)" }}>
                Posted{" "}
                {product?.product?.postedOn
                  ? timeAgo.format(new Date(product?.product?.postedOn))
                  : ""}
              </p>
              <div className={styles.priceContainer}>
                <p>Price: ₹{product?.product?.amount}</p>
                <p>Size: M</p>
              </div>
            </div>
          </div>
        </>
      </div>





      <div className={styles.innerContainerB}>
        <Link
          passHref={true}
          href={
            profile?.data?.data?.username == product?.store?.username
              ? `/profile`
              : `/store/${product?.store?.username}`
          }
        >
          <div className={styles.userInfo}>
            <Avatar
              alt="Store Profile Pic"
              src={product?.store?.profile_pic}
              sx={{
                width: 50,
                height: 50,
                cursor: "pointer",
                border: "1px solid var(--darkGrey)",
              }}
            />

            <div className={styles.nameLocation}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p>{product?.store?.username ?? ""}</p>
                {product?.store?.isCompleted && (
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
              <p style={{ opacity: 0.5 }}>{product?.store?.city ?? "India"}</p>
            </div>
          </div>
        </Link>

        <div className={styles.orderDetails}>
          <div>
            Order Id : 231
          </div>

          <div>
            Order Date : y81y
          </div>
        </div>

        <div className={styles.paymentDetails}>
          <h2 style={{ margin: "0px 0px 16px" }}>Payment Details</h2>

          <div>
            Order Id : 231
          </div>
          <div>
            Order Date : y81y
          </div>
        </div>

        <div className={styles.shiprocketDetails}>
          <h2 style={{ margin: "0px 0px 16px" }}>Shiprocket Details</h2>

          <div>
            Order Id : 231
          </div>
          <div>
            Order Date : y81y
          </div>
        </div>

        <BoldButton text="Print Receipt" />
      </div>

      
    </div>
  );
}

export default index;
