import React from "react";
import styles from "./styles.module.css";
import { Truck } from "react-feather";
import BoldButton from "../../CommonComponents/BoldButton";
function AddressCard() {
  return (
    <div className={styles.wrapper}>
      <Truck />
      <h2 style={{ marginTop: "1rem" }}>Pick Up Details</h2>
      <p style={{ color: "var(--lightGrey)" }}>
        Fill in the address rom where you&apos;ll be shipping your orders
      </p>
      <BoldButton text={"Update"} href="store/profile/address" />
    </div>
  );
}

export default AddressCard;
