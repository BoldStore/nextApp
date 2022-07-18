import React from "react";
import styles from "./info.module.css";
import Avatar from "@mui/material/Avatar";

function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.userImage}>
          <Avatar
            alt="Avatar"
            src={""}
            sx={{
              width: 50,
              height: 50,
            }}
          />
        </div>

        <div className={styles.userName}>
          <a href="https://www.instagram.com/avi_vashishta">@avi_vashishta</a>
          <p>Avi Vashishta</p>
        </div>
      </div>
      {/* 
      <div>22/22/22</div>

      <div>10:00 PM</div>

      <div>Delivery Pending</div>

      <div>
        <BoldButton text="More Details" />
      </div> */}
    </div>
  );
}

export default Info;
