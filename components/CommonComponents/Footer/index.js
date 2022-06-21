import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { Facebook, GitHub, Instagram, Linkedin } from "react-feather";
import BoldButton from "../BoldButton";
import { motion } from "framer-motion";

function Footer() {
  const [instaUsername, setInstaUsername] = useState("");
  const [email, setEmail] = useState("");
  const date = new Date();
  const year = date.getFullYear();
  const [flag, setFlag] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={"/assets/logo.svg"} width="200" height="150" alt="logo" />
        <div className={styles.socials}>
          <Instagram className={styles.icons} />
          <Facebook className={styles.icons} />
          <Linkedin className={styles.icons} />
          <GitHub className={styles.icons} />
        </div>
      </div>

      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <h1>Website</h1>
          <Link href={"/home"} passHref={true}>
            <p>Home</p>
          </Link>
          <Link href={"/search"} passHref={true}>
            <p>Search</p>
          </Link>
          <Link href={"#"} passHref={true}>
            <p>My Bag</p>
          </Link>
          <Link href={"#"} passHref={true}>
            <p>Profile</p>
          </Link>
        </div>
        <div className={styles.links}>
          <h1>Company</h1>
          <Link href={"/privacy-policy"} passHref={true}>
            <p>Privacy Policy</p>
          </Link>
          <Link href={"#"} passHref={true}>
            <p>Terms and Conditions</p>
          </Link>
          <Link href={"#"} passHref={true}>
            <p>About Us</p>
          </Link>
        </div>
        <div className={styles.links}>
          <h1>App</h1>
          <Link href={"#"} passHref={true}>
            <p>Walkthrough</p>
          </Link>
          <Link href={"#"} passHref={true}>
            <p>Download</p>
          </Link>
        </div>
        <div className={styles.links}>
          <h1>Contact Us</h1>

          <p onClick={() => setFlag(!flag)}>Want to join Bold? Click Here.</p>

          <Link href={"#"} passHref={true}>
            <p>Mail Us</p>
          </Link>
          <Link
            href={"https://www.instagram.com/boldstore.in/"}
            passHref={true}
          >
            <p>Instagram</p>
          </Link>
        </div>

        {flag && (
          <motion.div
            className={styles.contactContainer}
            onClick={() => setFlag(!flag)}
          >
            <h1>Let&apos;s Get In Touch!</h1>
            <input
              className={styles.input}
              placeholder="@ Instagram Username"
            />
            <input className={styles.input} placeholder="Your Email Address" />
            <motion.button
              className={styles.button}
              onClick={() => setFlag(!flag)}
            >
              Submit
            </motion.button>
          </motion.div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <p
          style={{
            color: "var(--lightGrey)",
            fontWeight: "300",
            fontSize: "0.75rem",
          }}
        >
          © {year} BOLD. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
