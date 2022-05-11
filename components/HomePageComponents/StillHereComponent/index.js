import { motion } from "framer-motion";
import React from "react";
import styles from "./styles.module.css";

function StillHereComponent() {
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
        (cursor2.style.backgroundColor = "#000 !important");
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
        (cursor2.style.backgroundColor = "#000 !important");
    });
  };
  return (
    <div
      className={styles.container}
      id="contactus"
      onMouseEnter={() => {
        changeMouse();
      }}
      onMouseLeave={() => {
        changeMouseBack();
      }}
    >
      <motion.h1
        className={styles.hugeHeading}
        initial={{ scale: 0, rotate: 15 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 0,
          duration: 1,
          type: "spring",
          bounce: 0.5,
        }}
        viewport={{ once: true }}
      >
        You Still Here?
      </motion.h1>

      <motion.h1
        className={styles.midHeading}
        initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          type: "spring",
          bounce: 0.5,
        }}
        viewport={{ once: true }}
      >
        Lets Get In Touch!
      </motion.h1>
    </div>
  );
}

export default StillHereComponent;
