import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function MobileViewList() {
  return (
    <div style={{ backgroundColor: "var(--black)" }}>
      <img
        src={"https://i.ibb.co/Ct1jrgj/Logo2.png"}
        style={{
          width: "80%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          position: "absolute",
          left: "10%",
        }}
      />
      <div
        style={{
          padding: "2rem",
          paddingLeft: "1.2rem",
          top: "20vh",
          position: "absolute",
        }}
      >
        <Link href="/customer">
          <p className={styles.navLinks}>Home</p>
        </Link>
        <Link href="/customer/search">
          <p className={styles.navLinks}>Search</p>
        </Link>
        <Link href="/customer/orders">
          <p className={styles.navLinks}>Orders</p>
        </Link>

        <Link href="/customer/profile">
          <p className={styles.navLinks}>Profile</p>
        </Link>
        <Link href="https://www.instagram.com/boldstore.in">
          <p className={styles.navLinks}>Instagram</p>
        </Link>
      </div>
    </div>
  );
}

export default MobileViewList;
