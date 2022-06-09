import Link from "next/link";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import DrawerComponent from "./DrawerComponent";
import { useEffect, useState } from "react";
import {
  Home,
  User,
  Search,
  Layout,
  CreditCard,
  Truck,
  LogOut,
} from "react-feather";
import StoreTabs from "../Tabs";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

function StoreHeader() {
  const profile = useSelector((state) => state.profile);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!(typeof window === "undefined")) {
      if (window.innerWidth < 800) {
        setOpen(false);
      }
    }
  }, []);

  if (!(typeof window === "undefined")) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }

  const logout = async () => {
    localStorage.removeItem("token");
    await signOut(auth);
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <Link href="/home">
        <h1 className={styles.logo}>
          BOLD
          <span style={{ fontFamily: "Inter", fontSize: "1.5rem" }}>.</span>
        </h1>
      </Link>
      {open && (
        <>
          <div className={styles.leftContainer}>
            <Link href="/home">
              <Home className={styles.navLinks} />
            </Link>
            <Link href="/search">
              <Search className={styles.navLinks} />
            </Link>
            <Link href="/store/dashboard">
              <Layout className={styles.navLinks} />
            </Link>
            <Link href="/store/profile/upi">
              <CreditCard className={styles.navLinks} />
            </Link>
            <Link href="/store/profile/address">
              <Truck className={styles.navLinks} />
            </Link>
            <LogOut onClick={logout} className={styles.navLinks} />
          </div>

          <Link href="/profile">
            {profile.profile_pic ? (
              <Avatar
                alt="Avatar"
                src={profile.profile_pic}
                sx={{
                  width: 50,
                  height: 50,
                  cursor: "pointer",
                  marginLeft: "2.5rem",
                }}
              />
            ) : (
              <User />
            )}
          </Link>
        </>
      )}
      {!open && (
        <>
          <DrawerComponent />
          <StoreTabs />
        </>
      )}
    </div>
  );
}

export default StoreHeader;
