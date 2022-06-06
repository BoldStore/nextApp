import React from "react";
import CustomerHeader from "../../components/CustomerComponents/Header";
import styles from "../../styles/common.module.css";
import Post from "../../components/CommonComponents/Post";
import TopStores from "../../components/CommonComponents/TopStores";
import Skeleton from "react-loading-skeleton";

function CustomerHomePage() {
  return (
    <>
      <CustomerHeader />
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
        </div>
        <div className={styles.postContainer}>
          <Post storeName={"Hi"} />
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

export default CustomerHomePage;
