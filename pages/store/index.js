/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react";
import styles from "../../styles/common.module.css";
import Post from "../../components/CommonComponents/Post";
import TopStores from "../../components/CommonComponents/TopStores";
import Header from "../../components/CommonComponents/Header";
import { useDispatch, useSelector } from "react-redux";
import { homePage } from "../../store/actions/pages";

function StoreHomePage() {
  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.pages);

  const observer = useRef(null);
  const lastPostElementRef = useCallback((node) => {
    if (pageData?.home_products?.length <= 0) return;
    if (pageData.home_loading || pageData.home_products_loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !pageData.home_end) {
        getData();
      }
    });
    if (node) observer.current.observe(node);
  });

  const getData = () => {
    if (!pageData.home_end && !pageData.home_products_loading) {
      dispatch(homePage(pageData.home_lastDoc));
    }
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
          {pageData?.home_products?.map((product, index) => (
            <div
              ref={
                pageData?.home?.products?.length == index + 1
                  ? lastPostElementRef
                  : null
              }
              key={index}
            >
              <Post
                postUrl={product.imgUrl}
                storeUrl={product?.store?.profile_pic}
                storeLocation={product?.store?.city ?? ""}
                storeName={product?.store?.username}
                caption={product.caption}
                price={product?.amount}
                size={product.size}
                id={product.id}
                images={product.images ? product.images : []}
                type={product.type}
                isCompleted={product?.store?.isCompleted}
              />
            </div>
          ))}
          {pageData.home_products_loading && (
            <>
              <Post />
              <Post />
              <Post />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default StoreHomePage;
