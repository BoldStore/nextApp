import React, { useState } from "react";
import InputComponent from "../../components/CommonComponents/InputComponent";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import Link from "next/link";

function SignupCode() {
  const [code, setCode] = useState("");

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.containerLogin}>
          <p className={styles.heading}>Almost There 😉 </p>
          <InputComponent
            type="text"
            setValue={setCode}
            value={code}
            placeholder={"Invite Code"}
          />

          <div className={styles.btn}>
            <p>Proceed to Signup</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/store/inviteCode" passHref={true}>
              <p
                style={{
                  color: "var(--lightGrey)",
                  cursor: "pointer",
                  marginBottom: 0,
                }}
              >
                Don&apos;t Have An Invite Code?{" "}
                <span className={styles.link}>Click Here.</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupCode;
