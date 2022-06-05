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
function MobileViewList() {
  return (
    <div style={{ backgroundColor: "var(--black)" }}>
      <Link href="/store/profile">
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
      </Link>
      <div
        style={{
          padding: "2rem",
          paddingLeft: "1.2rem",
          top: "22vh",
          position: "absolute",
        }}
      >
        <Link href="/store">
          <p className={styles.navLinks}>Home</p>
        </Link>
        <Link href="/store/search">
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
        <Link href="/store/profile">
          <p className={styles.navLinks}>Profile</p>
        </Link>
        <Link href="/store/login">
          <p className={styles.navLinks}>Logout</p>
        </Link>
        <Link href="https://www.instagram.com/boldstore.in">
          <p className={styles.navLinks}>Instagram</p>
        </Link>
      </div>
    </div>
  );
}

export default MobileViewList;
