import React from "react";
import styles from "./styles.module.css";
import PhoneComponent from "../PhoneComponent";

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
          imgSrc={"/assets/startingScreen.png"}
          num={"01"}
          text={"Starting Screen"}
          left={true}
        />
        <div>
          <h1 className={styles.heading}>
            <span style={{ color: "#808080" }}> The World's </span>First
            <br /> One Click{" "}
            <span style={{ color: "#808080" }}> MarketPlace.</span>
          </h1>
          <p className={styles.smallText}>Get Started </p>
        </div>
      </div>
    </div>
  );
}

export default IntroComponent;
