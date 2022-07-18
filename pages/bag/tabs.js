import React, { useCallback, useEffect, useRef, useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, AlignJustify, Bookmark } from "react-feather";
import styles from "./styles.module.css";
import NoOrders from "../../components/CommonComponents/IsEmptyComponents/NoOrders";
import NoSavedItems from "../../components/CommonComponents/IsEmptyComponents/NoSavedPosts";
import OrderComponent from "../../components/CommonComponents/OrderComponent";
import Post from "../../components/CommonComponents/Post";
import { useDispatch, useSelector } from "react-redux";
import { pastOrders } from "../../store/actions/order";
import { getSavedProducts } from "../../store/actions/products";

function OrderPageTabs({ saved, orders, products, bag }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  const getData = () => {
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
    if (products?.products?.length <= 0) return;
    if (products.isLoading || products.products_loading) return;
    if (orderObserver.current) orderObserver.current.disconnect();
    orderObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !products.past_orders_end) {
        dispatch(getSavedProducts(products.past_orders_cursor));
      }
    });
    if (node) orderObserver.current.observe(node);
  });

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              variant="fullWidth"
              onChange={handleChange}
              aria-label="lab API tabs example"
              style={{
                color: "var(--white)",
                padding: 0,
              }}
            >
              {/* <Tab
                icon={<Grid />}
                value={0}
                style={{
                  color: "var(--white)",
                }}
              /> */}
              <Tab
                icon={<AlignJustify />}
                value={1}
                style={{ color: "var(--white)" }}
              />
              {saved && (
                <Tab
                  icon={<Bookmark />}
                  value={2}
                  style={{ color: "var(--white)" }}
                />
              )}
            </TabList>
          </Box>
          <TabPanel value={1} style={{ padding: 0, paddingTop: 20 }}>
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
                      postUrl={order.product.imgUrl}
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
          </TabPanel>
          {saved && (
            <TabPanel value={2} style={{ padding: 0, paddingTop: 20 }}>
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
                        postUrl={product?.imgUrl}
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
            </TabPanel>
          )}
        </TabContext>
      </Box>
    </div>
  );
}

export default OrderPageTabs;
