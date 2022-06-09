import { Avatar } from "@mui/material";
import Grid1 from "../../../components/CommonComponents/Grids/grid1";
import Grid2 from "../../../components/CommonComponents/Grids/grid2";
import Grid3 from "../../../components/CommonComponents/Grids/grid3";
import Grid4 from "../../../components/CommonComponents/Grids/grid4";
import VerticalHeader from "../../../components/StoreComponents/VerticalHeader";
import styles from "./styles.module.css";
import React, { useState } from "react";
import TabsStoreProfile from "./tabs";
import Header from "../../../components/CommonComponents/Header";
import Post from "../../../components/CommonComponents/Post";
import VerifiedIcon from "@mui/icons-material/Verified";
import SignUpComplete from "../../../components/StoreComponents/SignupComplete";
// import { getCookie } from "cookies-next";
// import { firebaseAdmin } from "../../../firebaseAdmin";

// export async function getServerSideProps({ req, res }) {
//   const token = getCookie("token", { req, res });
//   let user;
//   try {
//     user = await firebaseAdmin.auth().verifyIdToken(token);
//     return {
//       props: {
//         user,
//       },
//     };
//   } catch (e) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/store/signup",
//       },
//       props: {},
//     };
//   }
// }

function StoreProfile() {
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>@store_profile</h1>

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
            // <div className={styles.products}>
            //   <div className={styles.productsGrid}>
            //     <Grid1 />
            //     <Grid2 />
            //     <Grid3 />
            //     <Grid4 />
            //   </div>
            // </div>
            <SignUpComplete />
          ) : value == 1 ? (
            // <div className={styles.postContainer}>
            //   <Post />
            //   <Post />
            //   <Post />
            //   <Post />
            //   <Post />
            //   <Post />
            // </div>
            <SignUpComplete />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default StoreProfile;
