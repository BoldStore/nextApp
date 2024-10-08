import React from "react";
import styles from "./styles.module.css";
import PhoneComponent from "../PhoneComponent";
import Link from "next/link";

function WhatWeDoComponent() {
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
      id="aboutus"
    >
      <div className={styles.flexDiv}>
        <div className={styles.wrapper} style={{ marginTop: "3rem" }}>
          <h1 className={styles.heading}>
            <span style={{ color: "#808080" }}> Why</span> Us?
          </h1>
          <div className={styles.textDiv}>
            <p className={styles.text}>
              We{" "}
              <span style={{ color: "var(--white)" }}>
                convert all your posts into products{" "}
              </span>
              that customers can buy in one click!
            </p>
            <Link href="https://www.instagram.com/boldstore.in">
              <p className={styles.smallText}>Want To Know More?</p>
            </Link>
          </div>
        </div>
        <PhoneComponent
          imgSrc={"/assets/connectInsta.png"}
          num={"02"}
          text={"Connecting Instagram"}
        />
      </div>
    </div>
  );
}

export default WhatWeDoComponent;
