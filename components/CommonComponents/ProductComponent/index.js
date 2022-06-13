import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { Bookmark, Send } from "react-feather";
import BoldButton from "../BoldButton";
import { RWebShare } from "react-web-share";
import { useDispatch, useSelector } from "react-redux";
import { saveProduct } from "../../../store/actions/products";
import Link from "next/link";
import VerifiedIcon from "@mui/icons-material/Verified";
function ProductComponent({ product }) {
  const dispatch = useDispatch();
  const saveProductInDb = () => {
    dispatch(saveProduct(product.id));
  };
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <div className={styles.productContainer}>
        <div>
          <img
            src={product?.product?.imgUrl}
            alt="item"
            width="650"
            height="650"
            className={styles.productImg}
          />
        </div>
        <div className={styles.productInfo}>
          <h1 style={{ marginTop: 0 }}>
            {product?.product?.name ??
              `Product By ${product?.store?.full_name}`}
          </h1>
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
                <p style={{ opacity: 0.5 }}>
                  {product?.store?.city ?? "India"}
                </p>
              </div>
            </div>
          </Link>
          <p>{product?.product?.caption ?? "No Caption"}</p>
          <div>
            <RWebShare
              data={{
                text: `Hey, checkout this amazing ${product?.store?.username} Product on Bold.`,
                url: `https://www.boldstore.in/product/${product?.product?.id}`,
                title: `${product?.store?.full_name} on Bold`,
              }}
              className={styles.share}
              style={{ color: "var(--black) !important" }}
              onClick={() => console.log("Shared successfully!")}
            >
              <Send className={styles.icon} />
            </RWebShare>

            <Bookmark className={styles.icon} onClick={saveProductInDb} />
          </div>
          <div className={styles.priceContainer}>
            <p>Price: ₹200</p>
            <p>Size: M</p>
          </div>

          <BoldButton
            text={"Proceed To Buy"}
            href="/customer/profile/address"
          />
        </div>
      </div>
    </>
  );
}

export default ProductComponent;
