import React, { useEffect, useState } from "react";
import CustomerHeader from "../../../components/CustomerComponents/Header";
import InputComponent from "../../../components/CommonComponents/InputComponent";
import BoldButton from "../../../components/CommonComponents/BoldButton";
import styles from "./profile.module.css";
import UsernameComponent from "../../../components/CommonComponents/InputComponent/username";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../store/actions/user";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";

function Edit() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const userData = useSelector((state) => state.user);
  const router = useRouter();
  const [name, setName] = useState("");
  const [age, setAge] = useState(new Date("2014-08-18T21:11:54"));
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");
  const preferences = ["Xs", "S", "M", "L", "Xl"];
  const [myPreference, setMyPreference] = useState("M");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser(name, phoneNumber, instagramUsername, undefined, myPreference)
    );
  };

  const setData = () => {
    setName(profile?.data?.data?.name ?? "");
    setAge(profile?.data?.data?.age ?? "");
    setEmail(profile?.data?.data?.email ?? "");
    setPhoneNumber(profile?.data?.data?.phone ?? "");
    setInstagramUsername(profile?.data?.data?.insta_username ?? "");
  };

  useEffect(() => {
    if (profile?.data) setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile, profile.data]);

  useEffect(() => {
    if (profile?.isStore) {
      router.push("/home");
    }
  }, [profile]);

  useEffect(() => {
    if (userData.success) {
      toast("Saved Succesfully!");
    }
  }, [userData]);

  if (!profile?.isStore)
    return (
      <>
        <CustomerHeader />
        <div className={styles.container}>
          {userData.errmess && (
            <p className={styles.error}>{userData.errmess.toString()}</p>
          )}
          {userData.success && (
            <p
              style={{
                color: "#5cb85c",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              Saved Succesfully
            </p>
          )}
          <InputComponent
            type="text"
            setValue={setName}
            value={name}
            placeholder={"Full Name"}
          />
          {/* <InputComponent
            type="text"
            setValue={setAge}
            value={age}
            placeholder={"Age"}
          /> */}

          <InputComponent
            type="date"
            setValue={setAge}
            value={age}
            placeholder={"Birthday"}
          />
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              className={styles.input}
              sx={{ color: "var(--white)" }}
              label="Date Of Birth"
              inputFormat="dd/MM/yyyy"
              value={age}
              onChange={(newValue) => setAge(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}

          <InputComponent
            type="text"
            setValue={setEmail}
            value={email}
            placeholder={"Email"}
            disable={true}
          />
          <InputComponent
            type="text"
            setValue={setPhoneNumber}
            value={phoneNumber}
            placeholder={"Phone Number"}
          />
          <UsernameComponent
            type="text"
            setValue={setInstagramUsername}
            value={instagramUsername}
            placeholder={"Username"}
          />
          <p>Preference</p>
          <div className={styles.chipContainer}>
            {preferences.map((preference, index) => {
              var color;
              var backgroundColor;
              var border;
              preference != myPreference
                ? ((color = "var(--white)"),
                  (backgroundColor = "var(--black)"),
                  (border = "1px solid var(--darkGrey)"))
                : ((color = "var(--black)"),
                  (backgroundColor = "var(--white)"),
                  (border = "1px solid var(--white)"));
              return (
                <div
                  key={index}
                  onClick={() => {
                    setMyPreference(preference);
                  }}
                  className={styles.sizeChip}
                  style={{
                    color: color,
                    backgroundColor: backgroundColor,
                    borderRadius: 5,
                    borderColor: "var(--darkGrey)",
                    border: border,
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      color: color,
                      textTransform: "uppercase",
                    }}
                  >
                    {preference}
                  </p>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: "3rem" }}></div>
          <BoldButton
            text={userData.isLoading ? "Loading" : "Save"}
            onClick={userData.isLoading ? null : handleSubmit}
          />
        </div>
      </>
    );
}

export default Edit;
