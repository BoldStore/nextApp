import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { User } from "react-feather";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "@firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useRouter } from "next/router";

function MobileViewList() {
  const logout = async () => {
    localStorage.removeItem("token");
    await signOut(auth);
    window.location.replace("/home");
  };

  const login = () => {
    router.push("/login");
  };

  const profile = useSelector((state) => state.profile);
  const router = useRouter();
  const [user] = useAuthState(auth);

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
        <Link href="/bag">
          <p className={styles.navLinks}>My Bag</p>
        </Link>
        <Link href="/profile">
          <p className={styles.navLinks}>Profile</p>
        </Link>
        {user ? (
          <p className={styles.navLinks} onClick={logout}>
            Logout
          </p>
        ) : (
          <p className={styles.navLinks} onClick={login}>
            Login
          </p>
        )}

        <Link href="https://www.instagram.com/boldstore.in">
          <p className={styles.navLinks}>Instagram</p>
        </Link>
      </div>
    </div>
  );
}

export default MobileViewList;
