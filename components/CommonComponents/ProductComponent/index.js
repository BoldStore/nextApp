import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import { Bookmark, Send } from "react-feather";
import BoldButton from "../BoldButton";
import { toast } from "react-toastify";
import { RWebShare } from "react-web-share";

function ProductComponent({ product }) {
  const notify = () => toast("Product Saved!");

  return (
    <>
      <div className={styles.productContainer}>
        <div>
          <Image
            src="/assets/shoe2.jpg"
            alt="item"
            width="650"
            height="650"
            className={styles.productImg}
          />
        </div>
        <div className={styles.productInfo}>
          <h1 style={{ marginTop: 0 }}>Product Title</h1>
          <div className={styles.userInfo}>
            <Avatar
              alt="Avatar"
              src={"https://i.ibb.co/Bswp8RS/avi.jpg"}
              sx={{
                width: 50,
                height: 50,
                cursor: "pointer",
                border: "1px solid var(--darkGrey)",
              }}
            />
            <div className={styles.nameLocation}>
              <p>Store_Username</p>
              <p style={{ opacity: 0.5 }}>New Delhi</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <RWebShare
              data={{
                text: "Hey, checkout this amazing Thrift Store Product on Bold.",
                url: `https://www.boldstore.in/product/${1}`,
                title: "Thrift Store on Bold",
              }}
              className={styles.share}
              style={{ color: "var(--black) !important" }}
              onClick={() => console.log("shared successfully!")}
            >
              <Send className={styles.icon} />
            </RWebShare>

            <Bookmark className={styles.icon} onClick={notify} />
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
