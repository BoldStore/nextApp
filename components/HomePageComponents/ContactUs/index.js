import React from "react";
import styles from "./styles.module.css";
import PhoneComponent from "../PhoneComponent";
import { motion } from "framer-motion";

function ContactUs() {
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
        (cursor.style.border = "0px solid #fff"),
        (cursor.style.backgroundColor = "#fff"),
        (cursor2.style.backgroundColor = "#fff");
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
          imgSrc={"https://i.ibb.co/z60fWnS/Group-14.png"}
          num={"03"}
          text={"Get invite code"}
          left={true}
        />
        <motion.div className={styles.form}>
          <h1>Join Bold As A Store 🚀</h1>
          <p className={styles.smallText2}>Instagram Username</p>
          <div className={styles.divInput}>
            <p>@</p>
            <input
              type="text"
              className={styles.input}
              placeholder={"username"}
            />
          </div>
          <div className={styles.divInput}>
            <input
              text=""
              type="email"
              className={styles.input}
              placeholder={"Email"}
            />
          </div>

          <p className={styles.btn}>Ask For Code</p>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactUs;
