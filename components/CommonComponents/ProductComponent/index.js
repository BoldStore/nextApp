import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { Bookmark, Send } from "react-feather";
import BoldButton from "../BoldButton";
import { RWebShare } from "react-web-share";
import { useDispatch } from "react-redux";
import { saveProduct } from "../../../store/actions/products";

function ProductComponent({ product }) {
  const dispatch = useDispatch();
  const saveProductInDb = () => {
    dispatch(saveProduct(product.id));
  };

  return (
    <>
      <div className={styles.productContainer}>
        <div>
          <Image
            src={product?.product?.imgUrl}
            alt="item"
            width="650"
            height="650"
            className={styles.productImg}
          />
        </div>
        <div className={styles.productInfo}>
          <h1 style={{ marginTop: 0 }}>
            {product?.product?.name ?? `Product By ${product?.store?.name}`}
          </h1>
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
              <p>{product?.store?.full_name ?? ""}</p>
              <p style={{ opacity: 0.5 }}>{product?.store?.username}</p>
            </div>
          </div>
          <p>{product?.product?.caption ?? ""}</p>
          <div>
            <RWebShare
              data={{
                text: `Hey, checkout this amazing ${product?.store?.full_name} Product on Bold.`,
                url: `https://www.boldstore.in/product/${product?.product?.id}`,
                title: `${product?.store?.full_name} on Bold`,
              }}
              className={styles.share}
              style={{ color: "var(--black) !important" }}
              onClick={() => console.log("shared successfully!")}
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
