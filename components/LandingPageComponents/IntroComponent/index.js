import React from "react";
import styles from "./styles.module.css";
import PhoneComponent from "../PhoneComponent";
import { motion } from "framer-motion";
import Link from "next/link";

function IntroComponent() {
  var cursor;
  var cursor2;
  var drag;
  const changeMouse = () => {
    cursor = document.getElementById("cursor");
    cursor2 = document.getElementById("cursor2");
    drag = document.getElementById("drag");
    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.opacity = 0.2),
        (cursor2.style.opacity = 1),
        (drag.style.display = "none"),
        (cursor.style.border = "0px solid var(--white)"),
        (cursor.style.backgroundColor = "var(--white)"),
        (cursor2.style.backgroundColor = "var(--white)");
    });
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={() => {
        changeMouse();
      }}
    >
      <div className={styles.flexDiv}>
        <PhoneComponent
          imgSrc={"/assets/startingScreen.png"}
          num={"01"}
          text={"Starting Screen"}
          left={true}
        />
        <motion.div className={styles.wrapper}>
          <h1 className={styles.heading}>
            <span style={{ color: "#808080" }}> The World&apos;s </span>First
            <br /> One Click{" "}
            <span style={{ color: "#808080" }}> MarketPlace.</span>
          </h1>
          <Link href="/#contactus">
            <p className={styles.smallText}>Get Started </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default IntroComponent;
