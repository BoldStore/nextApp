import React from "react";
import styles from "./styles.module.css";
import Header from "../../../components/CommonComponents/Header";
import Post from "../../../components/CommonComponents/Post";
import ProductComponent from "../../../components/CommonComponents/ProductComponent";

function ProductPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductComponent />
        <h1>More From the Store </h1>
        <div className={styles.flexDiv}>
          <Post /> <Post /> <Post /> <Post />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
