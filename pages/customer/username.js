/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import UsernameComponent from "../../components/CommonComponents/InputComponent/username";
import { useDispatch, useSelector } from "react-redux";
import { addInstaUsername } from "../../store/actions/user";
import { useRouter } from "next/router";

function InstagramUsername() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addInstaUsername(username));
  };

  useEffect(() => {
    if (userData.username_success) {
      router.replace("/home");
    }
  }, [userData]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.container}>
          <p className={styles.heading}>Connect Your Username 🚀 </p>
          {userData.errmess && (
            <p className={styles.error}>{userData.errmess}</p>
          )}
          <UsernameComponent
            type="text"
            setValue={setUsername}
            value={username}
            placeholder={"Username"}
          />

          <div
            className={styles.btn}
            onClick={userData.isLoading ? null : handleSubmit}
          >
            <p>{!userData.isLoading ? "Continue" : "Loading..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramUsername;
