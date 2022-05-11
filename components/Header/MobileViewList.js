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
    <List>
      <Link
        passHref={true}
        href="/#aboutme"
        className={styles.headernav}
        style={{
          color: "#000",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ListItem>
          <ListItemText primary="About" />
        </ListItem>
      </Link>

      <Link
        passHref={true}
        href="/#projects"
        className={styles.headernav}
        style={{
          color: "#000",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <ListItem>
          <ListItemText primary="Projects" />
        </ListItem>
      </Link>

      <Link
        passHref={true}
        href="/#achievments"
        className={styles.headernav}
        style={{
          color: "#000",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <ListItem>
          <ListItemText primary="Experience" />
        </ListItem>
      </Link>
      <Link
        passHref={true}
        href="/#contactme"
        className={styles.headernav}
        style={{
          color: "#000",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <ListItem>
          <ListItemText primary="Contact" />
        </ListItem>
      </Link>

      <div className={styles.rightContainer}>
        <Link href="https://instagram.com/_drishti.makhijani">
          <InstagramIcon
            className={styles.navLinks2}
            style={{ fontSize: "1.5rem" }}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/drishti-makhijani-3418661b4">
          <LinkedInIcon
            className={styles.navLinks2}
            style={{ fontSize: "1.5rem" }}
          />
        </Link>
        <Link href="mailto:drishtimakhijani01@gmail.com">
          <MailIcon
            className={styles.navLinks2}
            style={{ fontSize: "1.5rem" }}
          />
        </Link>
      </div>
      <hr style={{ color: "#636262", width: "90%", opacity: 0.2 }} />
    </List>
  );
}

export default MobileViewList;
