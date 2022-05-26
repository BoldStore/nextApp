import { Avatar } from "@mui/material";
import Grid1 from "../../../components/CommonComponents/Grids/grid1";
import Grid2 from "../../../components/CommonComponents/Grids/grid2";
import Grid3 from "../../../components/CommonComponents/Grids/grid3";
import Grid4 from "../../../components/CommonComponents/Grids/grid4";
import VerticalHeader from "../../../components/StoreComponents/VerticalHeader";
import styles from "./styles.module.css";
import React, { useState } from "react";
import CustomerHeader from "../../../components/CustomerComponents/Header";
import Post from "../../../components/CommonComponents/Post";
import OrderComponent from "../../../components/CommonComponents/OrderComponent";
import OrderPageTabs from "./tabs";

function StoreProfile() {
  const [value, setValue] = useState(1);
  const handleChange = (i) => {
    setValue(i);
  };
  return (
    <>
      <CustomerHeader />
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
              <Grid1 />
              <Grid2 />
              <Grid3 />
              <Grid4 />
            </div>
          </div>
        ) : value == 1 ? (
          <div className={styles.postContainer}>
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
          </div>
        ) : value == 2 ? (
          <div className={styles.postContainer}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default StoreProfile;
