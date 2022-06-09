import Link from "next/link";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import DrawerComponent from "./DrawerComponent";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Home, User, Search, ShoppingBag, LogOut } from "react-feather";
import CustomerTabs from "../Tabs";
import { useSelector } from "react-redux";

function CustomerHeader() {
  const profile = useSelector((state) => state.profile);
  const [open, setOpen] = useState(true);

  const router = useRouter();

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
      <Link href="/customer">
        <h1 className={styles.logo}>
          BOLD
          <span style={{ fontFamily: "Inter", fontSize: "1.5rem" }}>.</span>
        </h1>
      </Link>
      {open && (
        <>
          <div className={styles.leftContainer}>
            <Link href="/customer">
              <Home className={styles.navLinks} />
            </Link>
            <Link href="/customer/search">
              <Search className={styles.navLinks} />
            </Link>
            <Link href="/customer/orders">
              <ShoppingBag className={styles.navLinks} />
            </Link>
            <Link href="/customer/profile">
              <User className={styles.navLinks} />
            </Link>
            <Link href="/customer/login">
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
          <CustomerTabs />
        </>
      )}
    </div>
  );
}

export default CustomerHeader;
