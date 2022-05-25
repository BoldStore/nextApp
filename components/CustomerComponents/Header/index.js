import Link from "next/link";
import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Avatar from "@mui/material/Avatar";
import DrawerComponent from "./DrawerComponent";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Home, User, Search, ShoppingBag } from "react-feather";
import CustomerTabs from "../Tabs";
function CustomerHeader() {
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
          </div>

          <Link href="/customer/profile">
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
          <CustomerTabs />
        </>
      )}
    </div>
  );
}

export default CustomerHeader;
