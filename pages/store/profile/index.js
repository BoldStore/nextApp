import { Avatar } from "@mui/material";
import { User } from "react-feather";
import VerticalHeader from "../../../components/StoreComponents/VerticalHeader";
import styles from "./styles.module.css";
import React, { useState } from "react";
import TabsStoreProfile from "./tabs";
import Header from "../../../components/CommonComponents/Header";
import VerifiedIcon from "@mui/icons-material/Verified";
import SignUpComplete from "../../../components/StoreComponents/SignupComplete";
import { useSelector } from "react-redux";

function StoreProfile() {
  const profile = useSelector((state) => state.profile);
  const [value, setValue] = useState(0);
  const handleChange = (i) => {
    setValue(i);
  };

  return (
    <>
      <Header />
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
            {profile.data?.percentage == 100 && (
              <VerifiedIcon
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "1.5rem",
                  color: "#1DA1F2",
                }}
              />
            )}
          </div>
        </div>
        <div className={styles.tabs}>
          <TabsStoreProfile />
        </div>
        <div className={styles.desktopTabs}>
          {profile.data?.percentage == 100 ? (
            value == 0 ? (
              <div className={styles.products}>
                <div className={styles.productsGrid}>
                  {/* <Grid1 />
                  <Grid2 />
                  <Grid3 />
                  <Grid4 /> */}
                </div>
              </div>
            ) : value == 1 ? (
              <div className={styles.postContainer}>
                {/* <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post /> */}
              </div>
            ) : (
              <></>
            )
          ) : (
            <SignUpComplete />
          )}
        </div>
      </div>
    </>
  );
}

export default StoreProfile;
