import React, { useEffect, useState } from "react";
import InputComponent from "../../../components/CommonComponents/InputComponent";
import CustomerHeader from "../../../components/CustomerComponents/Header";
import styles from "./profile.module.css";
import BoldButton from "../../../components/CommonComponents/BoldButton";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { User } from "react-feather";
import { addAddress } from "../../../store/actions/address";
import { useRouter } from "next/router";

function Profile() {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.addresses);
  const profile = useSelector((state) => state.profile);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [addressString, setAddressString] = useState("");
  const [locality, setLocality] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
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
        phone,
        notes
      )
    );
  };

  const setData = () => {
    setTitle(profile?.data?.address?.title ?? "");
    setPhone(profile?.data?.paymentDetails?.phone ?? "");
    setAddressString(profile?.data?.address?.addressString ?? "");
    setLocality(profile?.data?.address?.addressL1 ?? "");
    setAppartment(profile?.data?.address?.addressL2 ?? "");
    setCity(profile?.data?.address?.city ?? "");
    setState(profile?.data?.address?.state ?? "");
    setPincode(profile?.data?.address?.pincode ?? "");
    setNotes(profile?.data?.address?.notes ?? "");
  };

  useEffect(() => {
    if (profile?.data?.address) setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile, profile.data]);

  useEffect(() => {
    if (profile?.isStore) {
      router.push("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  if (!profile?.isStore)
    return (
      <>
        <CustomerHeader />
        <div className={styles.container}>
          <div className={styles.customerDetails}>
            {profile.profile_pic ? (
              <Avatar
                alt="Avatar"
                src={profile.profile_pic}
                sx={{
                  width: 100,
                  height: 100,
                  cursor: "pointer",
                  border: "2px solid var(--darkGrey)",
                }}
              />
            ) : (
              <User
                style={{
                  width: 70,
                  height: 70,
                  cursor: "pointer",
                  border: "2px solid var(--white)",
                  padding: "1rem",
                  borderRadius: "50%",
                }}
              />
            )}
            <h1>{profile.name}</h1>
            <Link href="/store/entercode">
              <p style={{ color: "var(--lightGrey)" }}>Have a store?</p>
            </Link>
            <Link href="/customer/profile/edit">
              <p style={{ color: "var(--lightGrey)" }}>Edit Personal Details</p>
            </Link>
          </div>
          {address.success && (
            <h1 style={{ color: "green" }}>Saved Succesfully</h1>
          )}
          {address.errmess && (
            <h1 style={{ color: "red" }}>{address.errmess}</h1>
          )}
          <InputComponent
            type="text"
            setValue={setTitle}
            value={title}
            placeholder={"Title"}
          />
          <InputComponent
            type="text"
            setValue={setPhone}
            value={phone}
            placeholder={"Phone Number"}
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

export default Profile;
