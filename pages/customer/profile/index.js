import React, { useState } from "react";
import InputComponent from "../../../components/CommonComponents/InputComponent";
import CustomerHeader from "../../../components/CustomerComponents/Header";
import styles from "./profile.module.css";
import BoldButton from "../../../components/CommonComponents/BoldButton";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

function Profile() {
  const [addressLineOne, setAddressLineOne] = useState("");
  const [addressLineTwo, setAddressLineTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  return (
    <>
      <CustomerHeader />
      <div className={styles.container}>
        <div className={styles.customerDetails}>
          <Avatar
            alt="Avatar"
            src={"https://i.ibb.co/myvq6GR/aryan.jpg"}
            sx={{
              width: 100,
              height: 100,
              cursor: "pointer",
              border: "2px solid var(--darkGrey)",
            }}
          />
          <h1>Aryan Teng</h1>
          <Link href="/customer/profile/edit">
            <p style={{ color: "var(--lightGrey)" }}>Edit Personal Details</p>
          </Link>
        </div>
        <InputComponent
          type="text"
          setValue={setAddressLineOne}
          value={addressLineOne}
          placeholder={"Address Line 1"}
        />
        <InputComponent
          type="text"
          setValue={setAddressLineTwo}
          value={addressLineTwo}
          placeholder={"Address Line 2"}
        />
        <InputComponent
          type="text"
          setValue={setCity}
          value={city}
          placeholder={"City"}
        />
        <InputComponent
          type="text"
          setValue={setState}
          value={state}
          placeholder={"State"}
        />
        <InputComponent
          type="text"
          setValue={setPincode}
          value={pincode}
          placeholder={"Pincode"}
        />
        <div style={{ marginTop: "5rem" }}></div>
        <BoldButton text={"Update"} />
      </div>
    </>
  );
}

export default Profile;
