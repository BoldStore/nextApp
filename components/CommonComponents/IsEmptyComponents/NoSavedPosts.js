import React from "react";
import styles from "./styles.module.css";
import { Bookmark } from "react-feather";
function NoSavedItems() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.columnFlex}>
        <Bookmark size="4rem" />
        <p>No Saved Items Found</p>
      </div>
    </div>
  );
}

export default NoSavedItems;
