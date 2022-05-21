import React from "react";
import Header from "../components/LandingPageComponents/Header";
import styles from "../styles/common.module.css";
import styles2 from "../styles/Home.module.css";
import { Truck, User } from "react-feather";
function getStarted() {
  var cursor;
  var cursor2;
  var drag;

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
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "12vh",
          }}
          onMouseEnter={() => {
            changeMouse();
          }}
          onMouseLeave={() => {
            changeMouseBack();
          }}
        >
          <img src={"/assets/bigLogo.svg"} style={{ width: "100%" }} />
        </div>

        <div className={styles.btn}>
          <Truck style={{ marginRight: "1rem" }} />
          <p>Get Started As A Store</p>
        </div>
        <div className={styles.btn2}>
          <User style={{ marginRight: "1rem" }} />
          <p>Get Started As A Customer</p>
        </div>
      </div>
    </>
  );
}

export default getStarted;
