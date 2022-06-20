import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { Facebook, GitHub, Instagram, Linkedin } from "react-feather";
import BoldButton from "../BoldButton";

function Footer() {
  const [instaUsername, setInstaUsername] = useState("");
  const [email, setEmail] = useState("");
  const date = new Date();
  const year = date.getFullYear();

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

        <div className={styles.contactContainer}>
          <h1>We&apos;ll get in touch!</h1>
          <input className={styles.input} placeholder="@ Instagram Username" />
          <input className={styles.input} placeholder="Your Email Address" />
          <button className={styles.button}>Submit</button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            borderTop: "1px solid var(--darkGrey)",
            width: "20rem",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
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
