import React, { useState } from "react";
import InputComponent from "../../../components/CommonComponents/InputComponent";
import StoreHeader from "../../../components/StoreComponents/Header";
import styles from "./styles.module.css";
import BoldButton from "../../../components/CommonComponents/BoldButton";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

function ProfileUpi() {
  const [upi, setUpi] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <>
      <StoreHeader />
      <div className={styles.container}>
        <h1>UPI Details</h1>
        <InputComponent
          type="text"
          setValue={setUpi}
          value={upi}
          placeholder={"upi@bank"}
          noText={true}
        />
        <InputComponent
          type="text"
          setValue={setMobile}
          value={mobile}
          placeholder={"Mobile Number"}
          noText={true}
        />
        <div style={{ marginTop: "3rem" }}></div>
        <BoldButton text={"Update"} />
      </div>
    </>
  );
}

export default ProfileUpi;
