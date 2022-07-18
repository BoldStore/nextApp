import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import {
  User,
  ShoppingCart,
  Truck,
  Settings,
  LogOut,
  Bookmark,
} from "react-feather";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import { signOut } from "@firebase/auth";
import { useRouter } from "next/router";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

function DrawerList() {
  const router = useRouter();
  const logout = async () => {
    localStorage.removeItem("token");
    await signOut(auth);
    window.location.replace("/home");
  };

  const login = () => {
    router.push("/login");
  };

  const profile = useSelector((state) => state.profile);
  const [user] = useAuthState(auth);
  return (
    <div style={{ backgroundColor: "var(--black)" }}>
      <Link href={user ? "/profile" : "/login"}>
        <>
          {profile.profile_pic ? (
            <Avatar
              alt="Avatar"
              src={profile.profile_pic}
              sx={{
                width: 150,
                height: 150,
                cursor: "pointer",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2rem",
              }}
            />
          ) : (
            <User
              style={{
                width: 70,
                height: 70,
                cursor: "pointer",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "5rem",
                color: "var(--lightGrey)",
                border: " 2px solid var(--lightGrey)",
                padding: "1rem",
                borderRadius: "50%",
              }}
            />
          )}
          <p
            style={{
              margin: "1rem",
              color: "var(--white)",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {profile?.data?.data?.insta_username
              ? `@${profile?.data?.data?.insta_username}`
              : "Login"}
          </p>
        </>
      </Link>

      <div
        style={{
          padding: "2rem",
          paddingLeft: "1.2rem",
          marginTop: "1rem",
        }}
      >
        <Link href="/profile">
          <p className={styles.navLinks} style={{ margin: "1rem" }}>
            <User className={styles.icon} />
            Visit Profile
          </p>
        </Link>
        <Link href="/store/profile/address">
          <div style={{ position: "relative" }}>
            <p className={styles.navLinks} style={{ margin: "1rem" }}>
              <span className={styles.icon}>
                <Truck />
              </span>
              Delivery Address
            </p>
            {!profile?.data?.address && (
              <div
                style={{
                  position: "absolute",
                  height: "9px",
                  width: "9px",
                  top: "25%",
                  right: 0,
                  backgroundColor: "#1DA1F2",
                  borderRadius: "50%",
                }}
              ></div>
            )}
          </div>
        </Link>

        <Link href="/store/analytics">
          <p className={styles.navLinks} style={{ margin: "1rem" }}>
            <ShoppingCart className={styles.icon} />
            Orders
          </p>
        </Link>

        <Link href="/store/analytics">
          <p className={styles.navLinks} style={{ margin: "1rem" }}>
            <Bookmark className={styles.icon} />
            Saved Items
          </p>
        </Link>

        {user && profile?.data ? (
          <p
            className={styles.navLinks}
            style={{ margin: "1rem" }}
            onClick={logout}
          >
            <LogOut className={styles.icon} />
            Logout
          </p>
        ) : (
          <p
            className={styles.navLinks}
            style={{ margin: "1rem" }}
            onClick={login}
          >
            Login
          </p>
        )}

        <Accordion sx={{ backgroundColor: "var(--black)", padding: 0 }}>
          <AccordionSummary
            expandIcon={false}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "var(--black)", padding: 0 }}
          >
            <p
              className={styles.navLinks}
              style={{ margin: "1rem", marginTop: "-0.5rem" }}
            >
              <Settings className={styles.icon} />
              Settings
            </p>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0rem", paddingLeft: "1rem" }}>
            <Link href="/">
              <p
                className={styles.navLinks}
                style={{ margin: "1rem", marginTop: "-0.5rem" }}
              >
                About Us
              </p>
            </Link>
            <Link href="/privacy-policy">
              <p className={styles.navLinks} style={{ margin: "1rem" }}>
                Privacy Policy
              </p>
            </Link>
            <Link href="/terms-and-conditions">
              <p className={styles.navLinks} style={{ margin: "1rem" }}>
                Terms
              </p>
            </Link>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default DrawerList;
