import React, { useEffect, useState } from "react";
import InputComponent from "../../../components/CommonComponents/InputComponent";
import Header from "../../../components/CommonComponents/Header";
import styles from "./styles.module.css";
import BoldButton from "../../../components/CommonComponents/BoldButton";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../../store/actions/address";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function ProfileAddress() {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.addresses);
  const profile = useSelector((state) => state.profile);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [addressString, setAddressString] = useState("");
  const [locality, setLocality] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title.length == 0 ||
      phone.length == 0 ||
      locality.length == 0 ||
      appartment.length == 0 ||
      city.length == 0 ||
      pincode.length == 0 ||
      state.length == 0
    ) {
      setError("Please Enter All Inputs");
    } else if (phone.length != 10) {
      setError("Please Make sure Mobile Number is 10 digits long");
    } else if (isNaN(pincode)) {
      setError("Please Enter a valid Pincode");
    } else {
      setError("");
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
    }
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
    if (address.success) {
      toast("Saved Succesfully!");
      router.push("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (!profile?.isStore) {
      router.push("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  if (profile?.isStore)
    return (
      <>
        <Header />
        <div className={styles.container}>
          <h1>Address Details</h1>
          {/* {address.success && (
            <p
              style={{
                color: "#5cb85c",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              Saved Succesfully
            </p>
          )} */}

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
            setValue={setAppartment}
            value={appartment}
            placeholder={"Appartment/Suite"}
          />
          <InputComponent
            type="text"
            setValue={setLocality}
            value={locality}
            placeholder={"Locality"}
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

          {address.errmess && (
            <h1 className={styles.error}>{address.errmess}</h1>
          )}
          {error && <p className={styles.error}>{error}</p>}
          <div style={{ marginTop: "1rem" }}></div>
          <BoldButton
            text={address?.isLoading ? "Loading..." : "Update"}
            onClick={handleSubmit}
          />
        </div>
      </>
    );
}

export default ProfileAddress;
