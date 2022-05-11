import React from "react";
import styles from "./styles.module.css";
import PhoneComponent from "../PhoneComponent";

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
      id="aboutus"
    >
      <div className={styles.flexDiv}>
        <div>
          <h1 className={styles.heading}>
            <span style={{ color: "#808080" }}> Why</span> Us?
          </h1>
          <div className={styles.textDiv}>
            <p className={styles.text}>
              We{" "}
              <span style={{ color: "#fff" }}>
                convert all your posts into products{" "}
              </span>
              that customers can buy in one click!
            </p>
            <p className={styles.smallText}>Want To Know More?</p>
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
