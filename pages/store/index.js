/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styles from "../../styles/common.module.css";
import Post from "../../components/CommonComponents/Post";
import TopStores from "../../components/CommonComponents/TopStores";
import Header from "../../components/CommonComponents/Header";
import { useDispatch, useSelector } from "react-redux";
import { homePage } from "../../store/actions/pages";

function StoreHomePage() {
  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.pages);

  const getData = () => {
    dispatch(homePage());
  };

  useEffect(() => {
    getData();
  }, []);

  if (pageData?.home_loading) {
    return (
      <>
        <Header />
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
          </div>
          <div className={styles.postContainer}>
            <Post />
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

  if (pageData?.home_errmess) {
    return <div className={styles.error}>Error: {pageData.home_errmess}</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.topStoreContainer}>
          {pageData?.home?.stores?.map((store, index) => (
            <TopStores
              storeName={store.full_name?.split(" ")[0]}
              storeUrl={store.profile_pic}
              username={store.username}
              key={index}
              isCompleted={store.isCompleted}
            />
          ))}
        </div>
        <div className={styles.postContainer}>
          {pageData?.home?.products?.map((product, index) => (
            <Post
              postUrl={product.imgUrl}
              key={index}
              storeUrl={product?.store?.profile_pic}
              storeLocation={product?.store?.city ?? ""}
              storeName={product?.store?.username}
              caption={product.caption}
              price={product.price}
              size={product.size}
              id={product.id}
              images={product.images ? product.images : []}
              type={product.type}
              isCompleted={product?.store?.isCompleted}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default StoreHomePage;
