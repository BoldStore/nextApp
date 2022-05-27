import React from "react";
import styles from "../styles/common.module.css";
import { ArrowLeft, Truck, User } from "react-feather";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";

function getStarted() {
  var cursor;
  var cursor2;
  var drag;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const changeMouse = () => {
    cursor = document.getElementById("cursor");
    cursor2 = document.getElementById("cursor2");
    drag = document.getElementById("drag");
    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.mixBlendMode = "difference"),
        (cursor.style.opacity = 1),
        (cursor.style.height = "100px"),
        (cursor.style.width = "100px"),
        (cursor2.style.opacity = 1),
        (cursor2.style.display = "none"),
        (drag.style.display = "none"),
        (cursor2.style.backgroundColor = "var(--black) !important");
    });
  };

  const changeMouseBack = () => {
    cursor = document.getElementById("cursor");
    cursor2 = document.getElementById("cursor2");
    drag = document.getElementById("drag");
    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.mixBlendMode = "difference"),
        (cursor.style.opacity = 1),
        (cursor.style.height = "35px"),
        (cursor.style.width = "35px"),
        (cursor2.style.opacity = 1),
        (cursor2.style.display = "block"),
        (drag.style.display = "none"),
        (cursor2.style.backgroundColor = "var(--black) !important");
    });
  };
  return (
    <>
      <div className={styles.container} style={{ marginTop: "4rem" }}>
        <IconButton onClick={() => router.back()}>
          <ArrowLeft size={24} style={{ color: "var(--white)" }} />
        </IconButton>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onMouseEnter={() => {
            changeMouse();
          }}
          onMouseLeave={() => {
            changeMouseBack();
          }}
        >
          <img
            className={styles.logoImg}
            src={"/assets/bigLogoWhite.svg"}
            style={{ width: "70%", marginBottom: "3rem" }}
          />
        </div>
        <Link href="/store/signup" passHref={true}>
          <div className={styles.btn}>
            <Truck style={{ marginRight: "1rem" }} />
            <p>Get Started As A Store</p>
          </div>
        </Link>
        <Link href="/customer/signup" passHref={true}>
          <div className={styles.btn2}>
            <User style={{ marginRight: "1rem" }} />
            <p>Get Started As A Customer</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default getStarted;
