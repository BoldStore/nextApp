import Link from "next/link";
import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import DrawerComponent from "./DrawerComponent";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
function Header() {
  const [open, setOpen] = useState(true);
  const [hover, setHover] = useState(false);
  var cursor;
  var cursor2;
  var drag;
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

  useEffect(() => {
    if (hover) {
      cursor = document.getElementById("cursor");
      cursor2 = document.getElementById("cursor2");
      drag = document.getElementById("drag");
      document.body.addEventListener("mousemove", function (e) {
        (cursor.style.mixBlendMode = "difference"),
          (cursor.style.opacity = 1),
          (cursor2.style.opacity = 1),
          (drag.style.display = "none"),
          (cursor2.style.backgroundColor = "#000 !important");
      });
    }
  }, [hover]);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <h1 className={"logo"}>
        BOLD
        <span style={{ fontFamily: "Inter", fontSize: "3.5rem" }}>.</span>
      </h1>
      {open && (
        <>
          <div className={styles.leftContainer}>
            <Link href="/">
              <p className={styles.navLinks}>Home</p>
            </Link>
            <Link href="/#aboutus">
              <p className={styles.navLinks}>About Us</p>
            </Link>
            <Link href="/#app">
              <p className={styles.navLinks}>Mobile App</p>
            </Link>

            <Link href="/#contactus">
              <p className={styles.navLinks}>Contact Us</p>
            </Link>
          </div>
        </>
      )}
      {!open && <DrawerComponent />}
    </div>
  );
}

export default Header;
