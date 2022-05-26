import React from "react";
import styles from "../store.module.css";
import StoreHeader from "../../../components/StoreComponents/Header";
import Post from "../../../components/CommonComponents/Post";

function ProductPage() {
  return (
    <>
      <StoreHeader />
      <div className={styles.container}>
        <Post />
      </div>
    </>
  );
}

export default ProductPage;
