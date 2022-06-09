/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import InputComponent from "../../components/CommonComponents/InputComponent";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import Link from "next/link";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { isEmail, equals } from "validator";
import { createUser } from "../../store/actions/user";
import { useRouter } from "next/router";

function CustomerSignup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, loading, signupError] =
    useCreateUserWithEmailAndPassword(auth);

  const [user] = useAuthState(auth);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const validation = () => {
    const validEmail = isEmail(email);
    const passwordValid = equals(password, confirmPassword);

    if (validEmail && passwordValid) {
      return true;
    }

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validation()) {
      setError("Please check your inputs");
      return;
    }
    setError("");

    // 1. Signup up for firebase auth
    await createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      dispatch(createUser());
    }
  }, [user]);

  useEffect(() => {
    if (!userData?.success) {
      setError(userData?.errmess?.toString());
      return;
    } else {
      router.replace("/customer/username");
    }
  }, [userData, userData.success]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.container}>
          <p className={styles.heading}>Sign Up As A Customer 😎 </p>
          {error && <p className={styles.error}>{error}</p>}
          {signupError && <p className={styles.error}>{signupError}</p>}
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
          <div className={styles.btn} onClick={handleSubmit}>
            <p>{loading ? "Loading..." : "Signup"}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/customer/login" passHref={true}>
              <p
                style={{
                  color: "var(--lightGrey)",
                  cursor: "pointer",
                  marginBottom: 0,
                }}
              >
                Or Skip Signup
              </p>
            </Link>
            <Link href="/customer/login" passHref={true}>
              <p
                style={{
                  color: "var(--lightGrey)",
                  cursor: "pointer",
                  marginBottom: 0,
                }}
              >
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
