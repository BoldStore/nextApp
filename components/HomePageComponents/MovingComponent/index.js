import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";

function MovingComponent() {
  var cursor;
  var cursor2;

  const changeMouse = () => {
    cursor = document.getElementById("cursor");
    cursor2 = document.getElementById("cursor2");
    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.opacity = 1),
        (cursor.style.backgroundColor = "transparent"),
        (cursor.style.border = "2px solid #fff");
      cursor2.style.backgroundColor = "#fff !important";
    });
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={() => {
        changeMouse();
      }}
    >
      <Marquee speed={100} pauseOnClick={true} gradient={false}>
        <p className={styles.specialText}>
          SHOP BOLD. SHOP BOLD. SHOP BOLD. SHOP BOLD.
        </p>
      </Marquee>
      <Marquee
        direction={"right"}
        speed={100}
        pauseOnClick={true}
        gradient={false}
      >
        <p className={styles.specialText}>
          SHOP BOLD. SHOP BOLD. SHOP BOLD. SHOP BOLD.
        </p>
      </Marquee>
    </div>
  );
}

export default MovingComponent;
