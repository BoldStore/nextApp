/* eslint-disable react-hooks/exhaustive-deps */
import VerticalHeader from "../../components/StoreComponents/VerticalHeader";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import Header from "../../components/CommonComponents/Header";
import OrderPageTabs from "./tabs";
import NoOrders from "../../components/CommonComponents/IsEmptyComponents/NoOrders";
import NoSavedItems from "../../components/CommonComponents/IsEmptyComponents/NoSavedPosts";
import { useDispatch, useSelector } from "react-redux";
import { getSavedProducts } from "../../store/actions/products";
import { pastOrders } from "../../store/actions/order";
import OrderComponent from "../../components/CommonComponents/OrderComponent";
import Post from "../../components/CommonComponents/Post";

function Orders() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const orders = useSelector((state) => state.orders);
  const [value, setValue] = useState(1);
  const handleChange = (i) => {
    setValue(i);
  };

  const getData = () => {
    dispatch(pastOrders());
    dispatch(getSavedProducts());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <VerticalHeader
        value={value}
        setValue={setValue}
        handleChange={handleChange}
        saved={true}
      />
      <div className={styles.container}>
        <div className={styles.tabs}>
          <OrderPageTabs saved={true} />
        </div>
        {value == 0 ? (
          <div className={styles.products}>
            <div className={styles.productsGrid}>
              {/* <Grid1 />
              <Grid2 />
              <Grid3 />
              <Grid4 /> */}
              <NoOrders />
            </div>
          </div>
        ) : value == 1 ? (
          <div className={styles.postContainer}>
            {orders.orders?.length > 0 ? (
              orders?.orders?.map((order, index) => (
                <OrderComponent key={index} />
              ))
            ) : (
              <NoOrders />
            )}
          </div>
        ) : value == 2 ? (
          <div className={styles.postContainer}>
            {products.products?.length > 0 ? (
              products?.products?.map((product, index) => (
                <Post
                  caption={product.caption}
                  id={product.id}
                  images={product.images}
                  isCompleted={product?.store?.isCompleted}
                  postUrl={product?.imgUrl}
                  price={product?.amount}
                  size={product?.size}
                  storeLocation={product?.store?.city}
                  storeName={product?.store?.username}
                  storeUrl={product?.store?.profile_pic}
                  type={product?.mediaType}
                  key={index}
                />
              ))
            ) : (
              <NoSavedItems />
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Orders;
