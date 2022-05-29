import { Avatar } from "@mui/material";
import Grid1 from "../../../components/CommonComponents/Grids/grid1";
import Grid2 from "../../../components/CommonComponents/Grids/grid2";
import Grid3 from "../../../components/CommonComponents/Grids/grid3";
import Grid4 from "../../../components/CommonComponents/Grids/grid4";
import VerticalHeader from "../../../components/StoreComponents/VerticalHeader";
import styles from "./styles.module.css";
import React, { useState } from "react";
import TabsStoreProfile from "./tabs";
import StoreHeader from "../../../components/StoreComponents/Header";
import Post from "../../../components/CommonComponents/Post";
// import { auth } from "../../../firebaseConfig";
import { getCookie } from "cookies-next";
import { firebaseAdmin } from "../../../firebaseAdmin";

export async function getServerSideProps({ req, res }) {
  const token = getCookie("token", { req, res });
  let user;
  try {
    user = await firebaseAdmin.auth().verifyIdToken(token);
    return {
      props: {
        user,
      },
    };
  } catch (e) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    return {
      redirect: {
        permanent: false,
        destination: "/store/login",
      },
      // `as never` is required for correct type inference
      // by InferGetServerSidePropsType below
      props: {},
    };
  }
}

function StoreProfile({ user }) {
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
        <div className={styles.tabs}>
          <TabsStoreProfile />
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
