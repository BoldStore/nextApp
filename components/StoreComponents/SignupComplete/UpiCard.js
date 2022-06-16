import React from "react";
import styles from "./styles.module.css";
import { CreditCard } from "react-feather";
import BoldButton from "../../CommonComponents/BoldButton";
function UpiCard() {
  return (
    <div className={styles.wrapper}>
      <CreditCard />
      <h2 style={{ marginTop: "1rem" }}>Upi Details</h2>
      <p style={{ color: "var(--lightGrey)" }}>
        Fill out your upi details to accept instant payments
      </p>
      <BoldButton text={"Update"} href="store/profile/upi" />
    </div>
  );
}

export default UpiCard;
