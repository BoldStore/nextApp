/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import InputComponent from "../components/CommonComponents/InputComponent";
import Header from "../components/CommonComponents/Header";
import styles from "../styles/common.module.css";
import BoldButton from "../components/CommonComponents/BoldButton";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addAddress } from "../store/actions/address";
import * as ActionTypes from "../store/ActionTypes";

function Address() {
  const router = useRouter();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orders);
  const profile = useSelector((state) => state.profile);
  const address = useSelector((state) => state.addresses);

  const [name, setName] = useState("");
  const [locality, setLocality] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    // Check if a person is here without an order
    if (!order?.product) {
      router.push("/home");
    }
  }, [order?.product]);

  useEffect(() => {
    if (profile?.name) setName(profile?.name);
    if (profile?.data?.address) setData();
  }, [profile, profile.data]);

  useEffect(() => {
    if (address.success) {
      dispatch({
        type: ActionTypes.ADD_ADDRESS_TO_STATE,
        address: address?.addresses[0]?.id,
      });
      const productId = order.product;
      router.push(`/product/${productId}`);
    }
  }, [address.success]);

  const setData = () => {
    setName(profile?.data?.address?.name ?? "");
    setPhone(
      profile?.data?.address?.phone ??
        profile?.data?.paymentDetails?.phone ??
        ""
    );
    setLocality(profile?.data?.address?.addressL1 ?? "");
    setAppartment(profile?.data?.address?.addressL2 ?? "");
    setCity(profile?.data?.address?.city ?? "");
    setState(profile?.data?.address?.state ?? "");
    setPincode(profile?.data?.address?.pincode ?? "");
    setNotes(profile?.data?.address?.notes ?? "");
  };

  const handleSave = () => {
    if (address.isLoading) return;
    dispatch(
      addAddress(
        name,
        "",
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

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Shipping Details</h1>
        <InputComponent
          type="text"
          setValue={setName}
          value={name}
          placeholder={"Name"}
          noText={undefined}
        />
        <InputComponent
          type="text"
          setValue={setPhone}
          value={phone}
          placeholder={"Phone Number"}
          noText={undefined}
        />
        <InputComponent
          type="text"
          setValue={setLocality}
          value={locality}
          placeholder={"Locality"}
          noText={undefined}
        />
        <InputComponent
          type="text"
          setValue={setAppartment}
          value={appartment}
          placeholder={"Appartment/Suite"}
          noText={undefined}
        />
        <InputComponent
          type="text"
          setValue={setCity}
          value={city}
          placeholder={"City"}
          noText={undefined}
        />
        <InputComponent
          type="text"
          setValue={setState}
          value={state}
          placeholder={"State"}
          noText={undefined}
        />
        <InputComponent
          type="text"
          setValue={setPincode}
          value={pincode}
          placeholder={"Pincode"}
          noText={undefined}
        />
        <InputComponent
          type="text"
          setValue={setNotes}
          value={notes}
          placeholder={"Notes"}
          noText={undefined}
        />
        <div style={{ marginTop: "3rem" }}></div>
        <BoldButton
          text={address.isLoading ? "Loading..." : "Proceed"}
          href={undefined}
          onClick={handleSave}
        />
      </div>
    </>
  );
}

export default Address;
