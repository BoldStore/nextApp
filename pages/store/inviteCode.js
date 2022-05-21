import React, { useState } from "react";
import InputComponent from "../../components/CommonComponents/InputComponent";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import Link from "next/link";
import UsernameComponent from "../../components/CommonComponents/InputComponent/username";

function InviteCode() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.container}>
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

          <Link href="/store/" passHref={true}>
            <div className={styles.btn}>
              <p>Ask For Invite Code</p>
            </div>
          </Link>
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
