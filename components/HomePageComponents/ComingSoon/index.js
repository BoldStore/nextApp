import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";

function ComingSoon() {
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
        (cursor2.style.opacity = 1),
        (drag.style.display = "none"),
        (cursor2.style.backgroundColor = "#000 !important");
    });
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={() => {
        changeMouse();
      }}
    >
      <Marquee speed={150} pauseOnClick={true} gradient={false}>
        <p className={styles.specialText}>Coming Sooner Than You Think.</p>
      </Marquee>
      <Marquee
        speed={150}
        direction="right"
        pauseOnClick={true}
        gradient={false}
      >
        <p className={styles.specialText}>Coming Sooner Than You Think.</p>
      </Marquee>
    </div>
  );
}

export default ComingSoon;
