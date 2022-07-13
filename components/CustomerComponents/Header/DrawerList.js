import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { User } from "react-feather";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import { signOut } from "@firebase/auth";
import { useRouter } from "next/router";

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
      <Link href="/profile">
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
      </Link>

      <div
        style={{
          padding: "2rem",
          paddingLeft: "1.2rem",
          top: "22vh",
          position: "absolute",
        }}
      >
        <Link href="/store/profile/upi">
          <div style={{ position: "relative" }}>
            <p className={styles.navLinks}>Update Payment Details</p>
            {!profile?.data?.paymentDetails && (
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
        <Link href="/store/profile/address">
          <div style={{ position: "relative" }}>
            <p className={styles.navLinks}>Update Pickup Address</p>
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

        {user ? (
          <p className={styles.navLinks} onClick={logout}>
            Logout
          </p>
        ) : (
          <p className={styles.navLinks} onClick={login}>
            Login
          </p>
        )}

      </div>
    </div>
  );
}

export default DrawerList;