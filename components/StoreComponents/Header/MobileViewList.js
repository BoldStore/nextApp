import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import {
  CreditCard,
  Home,
  Layout,
  LogIn,
  LogOut,
  PieChart,
  Search,
  ShoppingBag,
  Truck,
  User,
} from "react-feather";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import { signOut } from "@firebase/auth";
import { useRouter } from "next/router";

function MobileViewList() {
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
            }}
          >
            @{profile.data.data.username}
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
        <Link href="/home">
          <p className={styles.navLinks}>
            <Home className={styles.icon} />
            Home
          </p>
        </Link>
        <Link href="/search">
          <p className={styles.navLinks}>
            <Search className={styles.icon} />
            Search
          </p>
        </Link>
        <Link href="/store/dashboard">
          <p className={styles.navLinks}>
            <Layout className={styles.icon} />
            Dashboard
          </p>
        </Link>
        <Link href="/bag">
          <p className={styles.navLinks}>
            <ShoppingBag className={styles.icon} />
            My Bag
          </p>
        </Link>
        <Link href="/store/analytics">
          <p className={styles.navLinks}>
            <PieChart className={styles.icon} />
            Analytics
          </p>
        </Link>
        <Link href="/store/profile/upi">
          <div style={{ position: "relative" }}>
            <p className={styles.navLinks}>
              <CreditCard className={styles.icon} />
              Payment Details
            </p>
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
            <p className={styles.navLinks}>
              <Truck className={styles.icon} />
              Pickup Address
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
        <Link href="/profile">
          <p className={styles.navLinks}>
            <User className={styles.icon} />
            Profile
          </p>
        </Link>

        {user ? (
          <p className={styles.navLinks} onClick={logout}>
            <LogOut className={styles.icon} />
            Logout
          </p>
        ) : (
          <p className={styles.navLinks} onClick={login}>
            <LogIn className={styles.icon} /> Login
          </p>
        )}

        {/* <Link href="https://www.instagram.com/boldstore.in">
          <p className={styles.navLinks}>Instagram</p>
        </Link> */}
      </div>
    </div>
  );
}

export default MobileViewList;
