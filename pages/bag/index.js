/* eslint-disable react-hooks/exhaustive-deps */
import VerticalHeader from "../../components/StoreComponents/VerticalHeader";
import styles from "./styles.module.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
    alert("Call");
    dispatch(pastOrders(orders.past_orders_cursor));
    dispatch(getSavedProducts(products.saved_cursor));
  };

  useEffect(() => {
    getData();
  }, []);

  // Check for products
  const prodObserver = useRef(null);
  const lastProductElementRef = useCallback((node) => {
    if (products?.products?.length <= 0) return;
    if (products.isLoading || products.products_loading) return;
    if (prodObserver.current) prodObserver.current.disconnect();
    prodObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !products.saved_end) {
        dispatch(getSavedProducts(products.saved_cursor));
      }
    });
    if (node) prodObserver.current.observe(node);
  });

  // Check for orders
  const orderObserver = useRef(null);
  const lastOrderElementRef = useCallback((node) => {
    if (orders.orders?.length <= 0) return;
    if (orders.isLoading || products.products_loading) return;
    if (orderObserver.current) orderObserver.current.disconnect();
    orderObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !products.past_orders_end) {
        dispatch(pastOrders(products.past_orders_cursor));
      }
    });
    if (node) orderObserver.current.observe(node);
  });

  return (
    <>
      <Header />
      <VerticalHeader
        bag={true}
        value={value}
        setValue={setValue}
        handleChange={handleChange}
        saved={true}
      />
      <div className={styles.container}>
        <div className={styles.tabs}>
          <OrderPageTabs
            saved={true}
            orders={orders}
            products={products}
            bag={true}
          />
        </div>
        <div className={styles.desktopTabs}>
          {value == 1 ? (
            <div className={styles.postContainer}>
              {orders.orders?.length > 0 ? (
                orders?.orders?.map((order, index) => (
                  <div
                    key={index}
                    ref={
                      orders?.orders?.length == index + 1
                        ? lastOrderElementRef
                        : null
                    }
                  >
                    <OrderComponent
                      id={order.id}
                      storeUrl={order.store.profile_pic}
                      storeName={order.store.username}
                      storeLocation={order.store.city}
                      postUrl={
                        order?.product?.imgUrl != ""
                          ? order?.product?.imgUrl
                          : order?.product?.images[0]?.imgUrl
                      }
                      price={order.amount}
                      size={order.product.size}
                      isCompleted={order.store.isCompleted}
                    />
                  </div>
                ))
              ) : (
                <NoOrders />
              )}
            </div>
          ) : value == 2 ? (
            <div className={styles.postContainer}>
              {products.products?.length > 0 ? (
                products?.products?.map((product, index) => (
                  <div
                    key={index}
                    ref={
                      products?.products?.length == index + 1
                        ? lastProductElementRef
                        : null
                    }
                  >
                    <Post
                      caption={product.caption}
                      id={product.id}
                      images={product?.images}
                      isCompleted={product?.store?.isCompleted}
                      postUrl={product?.imgUrl ?? product?.images[0].url}
                      price={product?.amount}
                      size={product?.size}
                      storeLocation={product?.store?.city}
                      storeName={product?.store?.username}
                      storeUrl={product?.store?.profile_pic}
                      type={product?.type}
                      available={product.available}
                      sold={product.sold}
                    />
                  </div>
                ))
              ) : (
                <NoSavedItems />
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Orders;
