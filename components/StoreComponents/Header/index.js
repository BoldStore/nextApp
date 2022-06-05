import Link from "next/link";
import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Avatar from "@mui/material/Avatar";
import DrawerComponent from "./DrawerComponent";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
function StoreHeader() {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 800) {
        setOpen(false);
      }
    }
  }, []);

  if (process.browser) {
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
            <Avatar
              alt="Avatar"
              src={"https://i.ibb.co/Bswp8RS/avi.jpg"}
              sx={{
                width: 50,
                height: 50,
                cursor: "pointer",
                marginLeft: "2.5rem",
              }}
            />
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
