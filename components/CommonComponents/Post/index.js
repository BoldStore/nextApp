import React from "react";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Post() {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <Avatar
          alt="Avatar"
          src={"https://i.ibb.co/Bswp8RS/avi.jpg"}
          sx={{ width: 50, height: 50, cursor: "pointer" }}
        />
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default Post;
