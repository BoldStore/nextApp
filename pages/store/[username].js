import { User } from "react-feather";
import VerticalHeader from "../../components/StoreComponents/VerticalHeader";
import styles from "./profile/styles.module.css";
import React, { useState } from "react";
import TabsStoreProfile from "./profile/tabs";
import VerifiedIcon from "@mui/icons-material/Verified";
import SignUpComplete from "../../components/StoreComponents/SignupComplete";
import { useSelector } from "react-redux";
import Grid1 from "../../components/CommonComponents/Grids/grid1";
import Grid2 from "../../components/CommonComponents/Grids/grid2";
import Grid3 from "../../components/CommonComponents/Grids/grid3";
import Grid4 from "../../components/CommonComponents/Grids/grid4";
import Post from "../../components/CommonComponents/Post";
import StoreHeader from "../../components/StoreComponents/Header";

function StorePage() {
  const profile = useSelector((state) => state.profile);
  const [value, setValue] = useState(0);
  const handleChange = (i) => {
    setValue(i);
  };

  return (
    <>
      <StoreHeader />
      <VerticalHeader
        value={value}
        setValue={setValue}
        handleChange={handleChange}
      />
      <div className={styles.container}>
        <div className={styles.storeDetails}>
          {profile.profile_pic ? (
            <Avatar
              alt="Avatar"
              src={profile.profile_pic}
              sx={{
                width: 100,
                height: 100,
                cursor: "pointer",
                border: "2px solid var(--darkGrey)",
              }}
            />
          ) : (
            <User />
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>@{profile?.data?.data?.username}</h1>

            <VerifiedIcon
              style={{
                marginLeft: "0.5rem",
                fontSize: "1.5rem",
                color: "#1DA1F2",
              }}
            />
          </div>
        </div>
        <div className={styles.tabs}>
          <TabsStoreProfile />
        </div>
        <div className={styles.desktopTabs}>
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
      </div>
    </>
  );
}

export default StorePage;
