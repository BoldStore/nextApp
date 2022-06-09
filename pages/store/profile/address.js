import React, { useState } from "react";
import InputComponent from "../../../components/CommonComponents/InputComponent";
import Header from "../../../components/CommonComponents/Header";
import styles from "./styles.module.css";
import BoldButton from "../../../components/CommonComponents/BoldButton";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../../store/actions/address";

function ProfileAddress() {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.addresses);
  const [title, setTitle] = useState("");
  const [addressString, setAddressString] = useState("");
  const [locality, setLocality] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAddress(
        title,
        addressString,
        locality,
        appartment,
        city,
        state,
        pincode,
        notes
      )
    );
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Address Details</h1>
        {address.errmess && <h1 style={{ color: "red" }}>{address.errmess}</h1>}
        <InputComponent
          type="text"
          setValue={setTitle}
          value={title}
          placeholder={"Title"}
        />
        <InputComponent
          type="text"
          setValue={setLocality}
          value={locality}
          placeholder={"Locality"}
        />
        <InputComponent
          type="text"
          setValue={setAppartment}
          value={appartment}
          placeholder={"Appartment/Suite"}
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
        <InputComponent
          type="text"
          setValue={setNotes}
          value={notes}
          placeholder={"Notes"}
        />
        <div style={{ marginTop: "3rem" }}></div>
        <BoldButton
          text={address?.isLoading ? "Loading..." : "Update"}
          onClick={handleSubmit}
        />
      </div>
    </>
  );
}

export default ProfileAddress;
