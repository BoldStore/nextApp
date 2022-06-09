import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSelector } from "react-redux";

function MobileViewList() {
  const logout = async () => {
    localStorage.removeItem("token");
    await signOut(auth);
    window.location.reload();
  };
  const profile = useSelector((state) => state.profile);
  return (
    <div style={{ backgroundColor: "var(--black)" }}>
      <Link href="/profile">
        {profile.profile_pic ? (
          <Avatar
            alt="Avatar"
            src={"https://i.ibb.co/Bswp8RS/avi.jpg"}
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
      </Link>

      <div
        style={{
          padding: "2rem",
          paddingLeft: "1.2rem",
          top: "22vh",
          position: "absolute",
        }}
      >
        <Link href="/home">
          <p className={styles.navLinks}>Home</p>
        </Link>
        <Link href="/search">
          <p className={styles.navLinks}>Search</p>
        </Link>
        <Link href="/store/dashboard">
          <p className={styles.navLinks}>Dashboard</p>
        </Link>
        <Link href="/store/profile/upi">
          <p className={styles.navLinks}>Update Payment Details</p>
        </Link>
        <Link href="/store/profile/address">
          <p className={styles.navLinks}>Update Pickup Address</p>
        </Link>
        <Link href="/profile">
          <p className={styles.navLinks}>Profile</p>
        </Link>

        <p className={styles.navLinks} onClick={logout}>
          Logout
        </p>

        <Link href="https://www.instagram.com/boldstore.in">
          <p className={styles.navLinks}>Instagram</p>
        </Link>
      </div>
    </div>
  );
}

export default MobileViewList;
