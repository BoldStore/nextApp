import React from "react";
import styles from "./styles.module.css";
import StoreHeader from "../../../components/StoreComponents/Header";
import Post from "../../../components/CommonComponents/Post";
import CompleteOrderComponent from "../../../components/CommonComponents/CompleteOrderComponent";

function OrderPage() {
  return (
    <>
      <StoreHeader />
      <div className={styles.container2}>
        <CompleteOrderComponent />
        <h1>More From the Store </h1>
        <div className={styles.postContainer}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}

export default OrderPage;
