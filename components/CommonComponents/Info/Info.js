import React from "react";
import styles from "./Info.module.css";
import User from "../../../public/assets/user.jpg";
import BoldButton from "../BoldButton";

function Info() {
  return (
    <div className={styles.container}>

      <div className={styles.user}>
        <div className={styles.userImage}>
          <img src={"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"} alt="profile"/>
        </div>

        <div className={styles.userName}>
          <a href="https://www.instagram.com/avi_vashishta">@avi_vashishta</a>
          <p>Avi Vashishta</p>
        </div>
      </div>

      <div>22/22/22</div>

      <div>10:00 PM</div>

      <div>#17276381812</div>

      <div>Paid</div>

      <div>#123447762</div>

      <div><BoldButton text="More Details" /></div>
    </div>
  );
}

export default Info;
