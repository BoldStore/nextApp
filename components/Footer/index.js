import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) {
      var cursor = document.getElementById("cursor");
      var cursor2 = document.getElementById("cursor2");
      var drag = document.getElementById("drag");
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
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Link href="/">
            <h1 style={{ cursor: "pointer" }}>Bold.</h1>
          </Link>
          <Link href="/about-us" passHref={true}>
            <p className={styles.link}>Top</p>
          </Link>
        </div>
        <div style={{ marginTop: -1 + "rem", marginLeft: 1 + "rem" }}>
          <p>Bold Store ©{year}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
