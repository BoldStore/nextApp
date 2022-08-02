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
import {
  Home,
  Instagram,
  LogIn,
  User,
  Settings,
  CornerLeftDown,
} from "react-feather";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
function MobileViewList() {
  return (
    <div style={{ backgroundColor: "var(--black)" }}>
      <img
        src={"https://i.ibb.co/p00nXKJ/Logo1.png"}
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
          top: "22vh",
          position: "absolute",
        }}
      >
        <Link href="/">
          <p
            className={styles.navLinks}
            style={{ margin: "1rem", marginTop: "-1rem" }}
          >
            <Home className={styles.icon} />
            Home
          </p>
        </Link>
        {/* <Link href="/#aboutus">
          <p className={styles.navLinks}>About Us</p>
        </Link>
        <Link href="/#app">
          <p className={styles.navLinks}>Mobile App</p>
        </Link> */}
        <Link href="/login">
          <p className={styles.navLinks} style={{ margin: "1rem" }}>
            <LogIn className={styles.icon} />
            Login
          </p>
        </Link>
        <Link href="/store/signup">
          <p className={styles.navLinks} style={{ margin: "1rem" }}>
            <User className={styles.icon} />
            Signup
          </p>
        </Link>
        <Link href="https://www.instagram.com/boldstore.in" target="_blank">
          <p className={styles.navLinks} style={{ margin: "1rem" }}>
            <Instagram className={styles.icon} />
            Instagram
          </p>
        </Link>
        <Accordion sx={{ backgroundColor: "var(--black)", padding: 0 }}>
          <AccordionSummary
            expandIcon={false}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "var(--black)", padding: 0 }}
          >
            <p
              className={styles.navLinks}
              style={{ margin: "1rem", marginTop: "-0.75rem" }}
            >
              <CornerLeftDown className={styles.icon} />
              More Links
            </p>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0rem", paddingLeft: "1rem" }}>
            <Link href="/#aboutus">
              <p className={styles.navLinks}>About Us</p>
            </Link>
            <Link href="/privacy-policy">
              <p className={styles.navLinks}>Privacy Policy</p>
            </Link>
            <Link href="/terms-and-conditions">
              <p className={styles.navLinks}>Terms of Service</p>
            </Link>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default MobileViewList;
