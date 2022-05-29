import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, AlignJustify, Send } from "react-feather";
import styles from "./styles.module.css";
import Grid1 from "../../../components/CommonComponents/Grids/grid1";
import Grid2 from "../../../components/CommonComponents/Grids/grid2";
import Grid3 from "../../../components/CommonComponents/Grids/grid3";
import Grid4 from "../../../components/CommonComponents/Grids/grid4";
import Post from "../../../components/CommonComponents/Post";
import { getCookie } from "cookies-next";
import { firebaseAdmin } from "../../firebaseAdmin";

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
    return {
      redirect: {
        permanent: false,
        destination: "/store/signup",
      },
      props: {},
    };
  }
}

function TabsStoreProfile() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                <Grid1 />
                <Grid2 />
                <Grid3 />
                <Grid4 />
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2" style={{ padding: 0, paddingTop: 20 }}>
            <div className={styles.postContainer}>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default TabsStoreProfile;
