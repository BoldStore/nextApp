import React, { useState } from "react";
import InputComponent from "../../components/CommonComponents/InputComponent";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import Link from "next/link";
import UsernameComponent from "../../components/CommonComponents/InputComponent/username";

function InstagramUsername() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.container}>
          <p className={styles.heading}>Connect Your Username 🚀 </p>
          <UsernameComponent
            type="text"
            setValue={setUsername}
            value={username}
            placeholder={"Username"}
          />

          <Link href="/store/" passHref={true}>
            <div className={styles.btn}>
              <p>Continue</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InstagramUsername;
