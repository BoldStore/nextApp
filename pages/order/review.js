import React from "react";
import Header from "../../components/CommonComponents/Header";
import styles from "../../styles/common.module.css";
function OrderReview() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Checkout</h1>
      </div>
    </div>
  );
}

export default OrderReview;
