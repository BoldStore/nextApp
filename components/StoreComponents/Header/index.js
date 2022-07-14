import Link from "next/link";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import DrawerComponent from "./DrawerComponent";
import DrawerList from "./DrawerList";
import { useEffect, useState } from "react";
import ToolTip from "../../CommonComponents/ToolTip/ToolTip";
// import Tooltip from "@mui/material/Tooltip";

import {
  Home,
  User,
  Search,
  Layout,
  CreditCard,
  Truck,
  LogOut,
  ShoppingBag,
} from "react-feather";
import StoreTabs from "../Tabs";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Drawer } from "@mui/material";

const useStyles = makeStyles({
  list: {
    width: 300,
    backgroundColor: "var(--white)",
    color: "var(--black)",
    height: "100%",
    fontWeight: "500 !important",
  },
  fullList: {
    width: "auto",
    backgroundColor: "var(--white)",
    color: "var(--black)",
    fontWeight: "500 !important",
  },
});

function StoreHeader() {
  const profile = useSelector((state) => state.profile);
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const [user] = useAuthState(auth);
  const [state, setState] = React.useState({
    left: false,
  });

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "var(--black)" }}
    >
      <DrawerList />
    </div>
  );

  useEffect(() => {
    if (!(typeof window === "undefined")) {
      if (window.innerWidth < 800) {
        setOpen(false);
      }
    }
  }, []);

  if (!(typeof window === "undefined")) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }

  const logout = async () => {
    localStorage.removeItem("token");
    await signOut(auth);
    window.location.replace("/home");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={styles.container}>
      <Link href="/home">
        <h1 className={styles.logo}>
          BOLD
          <span style={{ fontFamily: "Inter", fontSize: "1.5rem" }}>.</span>
        </h1>
      </Link>
      {open && (
        <>
          <div className={styles.leftContainer}>
            <ToolTip title="Home" href="/home">
              <Home className={styles.navLinks} />
            </ToolTip>

            <ToolTip title="Search" href="/search">
              <Search className={styles.navLinks} />
            </ToolTip>

            <ToolTip title="Dashboard" href="/store/dashboard">
              <Layout className={styles.navLinks} />
            </ToolTip>

            <ToolTip title="Bag" href="/bag">
              <ShoppingBag className={styles.navLinks} />
            </ToolTip>
            {/* 
            <ToolTip title="UPI" href="/store/profile/upi">
              <div style={{ position: "relative" }}>
                <CreditCard className={styles.navLinks} />
                {!profile?.data?.paymentDetails && (
                  <div
                    style={{
                      position: "absolute",
                      height: "9px",
                      width: "9px",
                      top: -1,
                      right: 20,
                      backgroundColor: "#1DA1F2",
                      borderRadius: "50%",
                    }}
                  ></div>
                )}
              </div>
            </ToolTip>

            <ToolTip title="Address" href="/store/profile/address">
            <div style={{ position: "relative" }}>
                <Truck className={styles.navLinks} />
                {!profile?.data?.address && (
                  <div
                    style={{
                      position: "absolute",
                      height: "9px",
                      width: "9px",
                      top: -1,
                      right: 20,
                      backgroundColor: "#1DA1F2",
                      borderRadius: "50%",
                    }}
                  ></div>
                )}
              </div>
            </ToolTip> */}

            {/* {user && (
              <ToolTip title="Sign Out">
                <LogOut onClick={logout} className={styles.navLinks} />
              </ToolTip>
            )} */}
          </div>

          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <div onClick={toggleDrawer(anchor, true)}>
                {profile.profile_pic ? (
                  <Avatar
                    alt="Avatar"
                    src={profile.profile_pic}
                    sx={{
                      width: 50,
                      height: 50,
                      cursor: "pointer",
                      marginLeft: "2.5rem",
                    }}
                  />
                ) : (
                  <User />
                )}
              </div>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          {/* <Link href="/profile" >
            {profile.profile_pic ? (
              <Avatar
                alt="Avatar"
                src={profile.profile_pic}
                sx={{
                  width: 50,
                  height: 50,
                  cursor: "pointer",
                  marginLeft: "2.5rem",
                }}
              />
            ) : (
              <User />
            )}
          </Link> */}
        </>
      )}
      {!open && (
        <>
          <DrawerComponent />
          <StoreTabs />
        </>
      )}
    </div>
  );
}

export default StoreHeader;
