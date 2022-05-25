import { Avatar } from "@mui/material";
import Grid1 from "../../../components/CommonComponents/Grids/grid1";
import Grid2 from "../../../components/CommonComponents/Grids/grid2";
import Grid3 from "../../../components/CommonComponents/Grids/grid3";
import Grid4 from "../../../components/CommonComponents/Grids/grid4";
import CustomerHeader from "../../../components/CustomerComponents/Header";
import VerticalHeader from "../../../components/StoreComponents/VerticalHeader";
import styles from "./styles.module.css";
import React, { useState } from "react";
import TabsStoreProfile from "./tabs";

function StoreProfile() {
  return (
    <>
      <TabsStoreProfile />
      <div className={styles.container}>
        <div className={styles.storeDetails}>
          <Avatar
            alt="Avatar"
            src={"https://i.ibb.co/myvq6GR/aryan.jpg"}
            sx={{
              width: 100,
              height: 100,
              cursor: "pointer",
              border: "2px solid var(--darkGrey)",
            }}
          />
          <h1>@store_profile</h1>
        </div>
        <div className={styles.productsGrid}>
          <Grid1 />
          <Grid2 />
          <Grid3 />
          <Grid4 />
        </div>
      </div>
    </>
  );
}

export default StoreProfile;
