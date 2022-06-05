import React from "react";
import styles from "./styles.module.css";
import { ShoppingBag } from "react-feather";
function NoOrders() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.columnFlex}>
        <ShoppingBag size="4rem" />
        <p>No Orders Found</p>
      </div>
    </div>
  );
}

export default NoOrders;
