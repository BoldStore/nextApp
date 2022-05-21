import React, { useState } from "react";
import InputComponent from "../../components/CommonComponents/InputComponent";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import Link from "next/link";
function CustomerSignup() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.container}>
          <p className={styles.heading}>Sign Up As A Customer 🥳</p>
          <InputComponent
            type="text"
            setValue={setFullName}
            value={fullName}
            placeholder={"Full Name"}
            noText={true}
          />
          <InputComponent
            type="text"
            setValue={setEmail}
            value={email}
            placeholder={"Email"}
            noText={true}
          />
          <InputComponent
            type="password"
            setValue={setPassword}
            value={password}
            placeholder={"Password"}
            noText={true}
          />
          <InputComponent
            type="password"
            setValue={setConfirmPassword}
            value={confirmPassword}
            placeholder={"Confirm Password"}
            noText={true}
          />
          <Link href="/customer/" passHref={true}>
            <div className={styles.btn}>
              <p>Signup</p>
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
            <Link href="/customer/login" passHref={true}>
              <p style={{ color: "var(--lightGrey)", cursor: "pointer" }}>
                Or Skip Signup
              </p>
            </Link>
            <Link href="/customer/login" passHref={true}>
              <p style={{ color: "var(--lightGrey)", cursor: "pointer" }}>
                Have An Account Already?{" "}
                <span className={styles.link}>Login.</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSignup;
