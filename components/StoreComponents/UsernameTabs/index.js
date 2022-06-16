import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, AlignJustify, Send } from "react-feather";
import styles from "../../../pages/store/profile/styles.module.css";
import Grid1 from "../../CommonComponents/Grids/grid1";
import Grid2 from "../../CommonComponents/Grids/grid2";
import Grid3 from "../../CommonComponents/Grids/grid3";
import Grid4 from "../../CommonComponents/Grids/grid4";
import Post from "../../CommonComponents/Post";
import SignUpComplete from "../SignupComplete";
import { useDispatch, useSelector } from "react-redux";
import OneImg from "../../CommonComponents/Grids/oneImg";
import { useRouter } from "next/router";
import { storePage } from "../../../store/actions/pages";
import StoreComingSoon from "../StoreComingSoon";

function UsernameTabs({ products, profile, store }) {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { query } = useRouter();
  const dispatch = useDispatch();
  const router = useRouter();

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      {store?.store?.store?.isCompleted ? (
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
                <Tab
                  icon={<Grid />}
                  value="1"
                  style={{
                    color: "var(--white)",
                  }}
                />
                <Tab
                  icon={<AlignJustify />}
                  value="2"
                  style={{ color: "var(--white)" }}
                />
              </TabList>
            </Box>
            <TabPanel value="1" style={{ padding: 0 }}>
              <div
                className={styles.container}
                style={{ marginTop: 20, marginLeft: 0 }}
              >
                <div className={styles.productsGrid}>
                  {products.slice(0, -1).map((arr, i) => {
                    var num = randomNumberInRange(1, 4);
                    if (num == 1) {
                      return <Grid1 key={i} products={arr} />;
                    } else if (num == 2) {
                      return <Grid2 key={i} products={arr} />;
                    } else if (num == 3) {
                      return <Grid3 key={i} products={arr} />;
                    } else {
                      return <Grid4 key={i} products={arr} />;
                    }
                  })}
                  <div className={styles.postContainer}>
                    {products[products.length - 1]?.length != 6 ? (
                      products[products.length - 1]?.map((item, i) => (
                        <OneImg product={item} key={i} />
                      ))
                    ) : (
                      <Grid1 products={products[-1]} />
                    )}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2" style={{ padding: 0, paddingTop: 20 }}>
              <div className={styles.postContainer}>
                {store?.store?.products?.map((product, index) => (
                  <Post
                    postUrl={product.imgUrl}
                    key={index}
                    storeUrl={store?.store?.store?.profile_pic}
                    isCompleted={store?.store?.store?.isCompleted ?? false}
                    storeLocation={store?.store?.store?.city ?? ""}
                    storeName={store?.store?.store?.username}
                    caption={product.caption}
                    price={product.price}
                    size={product.size}
                    id={product.id}
                    type={product.type}
                    images={product.images}
                  />
                ))}
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      ) : (
        <>{profile ? <SignUpComplete /> : <StoreComingSoon />}</>
      )}
    </div>
  );
}

export default UsernameTabs;
