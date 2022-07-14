import React from "react";
import styles from "./info.module.css";

function Info() {
  return (
    <div className={styles.container}>
      <img className={styles.img}></img>
      <div className={styles.details}>
        <a href="https://www.instagram.com/avi_vashishta">@avi_vashishta</a>
        <p>Avi Vashishta</p>
      </div>
    </div>
  );
}

export default Info;
