import React, { useState } from "react";
import InputComponent from "../../components/CommonComponents/InputComponent";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import Link from "next/link";
import UsernameComponent from "../../components/CommonComponents/InputComponent/username";
import { useRouter } from "next/router";
import axios from "axios";
import { ADD_POTENTIAL_STORE, API_URL } from "../../constants";

function InviteCode() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(true);
  const router = useRouter();
  const saveData = async () => {
    setLoading(true);
    const url = API_URL + ADD_POTENTIAL_STORE;
    const response = await axios.post(
      url,
      {
        insta_username: username,
        email,
      },
      {
        headers: "Content-Type: application/json",
      }
    );

    setLoading(false);
    if (response.data?.success) {
      setError("");
      setSuccess(true);
      router.push("/home");
      setMessage(response.data.message);
    } else {
      setError(response.data?.message || "There was an error");
    }
  };
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.containerLogin}>
          <p className={styles.heading}>Join Bold As A Store 🚀 </p>
          <UsernameComponent
            type="text"
            setValue={setUsername}
            value={username}
            placeholder={"Username"}
          />
          <InputComponent
            type="text"
            setValue={setEmail}
            value={email}
            placeholder={"Email"}
            noText={true}
          />

          <div className={styles.btn} onClick={saveData}>
            {loading ? <p>Loading...</p> : <p>Ask For Invite Code</p>}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "var(--white)",
                textAlign: "center",
                marginBottom: 0,
              }}
            >
              We believe in personally verifying your Instagram Account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InviteCode;
