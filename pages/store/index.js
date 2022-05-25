import React from "react";
import styles from "../../styles/common.module.css";
import Post from "../../components/CommonComponents/Post";
import TopStores from "../../components/CommonComponents/TopStores";
import StoreHeader from "../../components/StoreComponents/Header";

function StoreHomePage() {
  return (
    <>
      <StoreHeader />
      <div className={styles.container}>
        <div className={styles.topStoreContainer}>
          <TopStores />
          <TopStores />
          <TopStores />
          <TopStores />
          <TopStores />
          <TopStores />
          <TopStores />
          <TopStores />
          <TopStores />
          <TopStores />
          <TopStores />
        </div>
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

export default StoreHomePage;
