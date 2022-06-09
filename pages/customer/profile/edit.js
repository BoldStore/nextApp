import React, { useEffect, useState } from "react";
import CustomerHeader from "../../../components/CustomerComponents/Header";
import InputComponent from "../../../components/CommonComponents/InputComponent";
import BoldButton from "../../../components/CommonComponents/BoldButton";
import styles from "./profile.module.css";
import UsernameComponent from "../../../components/CommonComponents/InputComponent/username";
import { useSelector } from "react-redux";

function Edit() {
  // const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");
  const preferences = ["Xs", "S", "M", "L", "Xl"];
  const [myPreference, setMyPreference] = useState("M");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const setData = () => {
    console.log(profile);
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

  return (
    <>
      <CustomerHeader />
      <div className={styles.container}>
        <InputComponent
          type="text"
          setValue={setName}
          value={name}
          placeholder={"Full Name"}
        />
        <InputComponent
          type="text"
          setValue={setAge}
          value={age}
          placeholder={"Age"}
        />
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
        <BoldButton text={"Save"} onClick={handleSubmit} />
      </div>
    </>
  );
}

export default Edit;
