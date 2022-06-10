import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/CommonComponents/Header";
import Post from "../../components/CommonComponents/Post";
import CompleteOrderComponent from "../../components/CommonComponents/CompleteOrderComponent";

function OrderPage() {
  return (
    <>
      <Header />
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
