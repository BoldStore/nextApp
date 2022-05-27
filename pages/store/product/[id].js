import React from "react";
import styles from "./styles.module.css";
import StoreHeader from "../../../components/StoreComponents/Header";
import Post from "../../../components/CommonComponents/Post";
import ProductComponent from "../../../components/CommonComponents/ProductComponent";

function ProductPage() {
  return (
    <>
      <StoreHeader />
      <div className={styles.container}>
        <ProductComponent />
      </div>
    </>
  );
}

export default ProductPage;
