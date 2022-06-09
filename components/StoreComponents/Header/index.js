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

  return (
    <div className={styles.container}>
      <Link href="/store">
        <h1 className={styles.logo}>
          BOLD
          <span style={{ fontFamily: "Inter", fontSize: "1.5rem" }}>.</span>
        </h1>
      </Link>
      {open && (
        <>
          <div className={styles.leftContainer}>
            <Link href="/store">
              <Home className={styles.navLinks} />
            </Link>
            <Link href="/store/search">
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
            <Link href="/store/login">
              <LogOut className={styles.navLinks} />
            </Link>
          </div>

          <Link href="/store/profile">
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
