/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import InputComponent from "../../components/CommonComponents/InputComponent";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import Link from "next/link";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { isEmail, equals } from "validator";
import { createUser } from "../../store/actions/user";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";

function CustomerSignup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, auth_user, loading, signupError] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, google_user, google_loading, google_error] =
    useSignInWithGoogle(auth);

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
    const validEmail = isEmail(email);
    const passwordValid = equals(password, confirmPassword);
    if (
      email.length == 0 ||
      password.length == 0 ||
      confirmPassword.length == 0
    ) {
      setError("Please Enter all inputs");
    } else if (!validEmail) {
      setError("Invalid Email Entered!");
    } else if (!passwordValid) {
      setError("Passwords do not match!");
    } else {
      setError("");
      // 1. Signup up for firebase auth
      await createUserWithEmailAndPassword(email, password);
    }
  };

  useEffect(() => {
    if (user) {
      dispatch(createUser());
    }
  }, [user, auth_user, google_user]);

  useEffect(() => {
    if (!userData?.success) {
      setError(userData?.errmess?.toString());
      return;
    } else {
      router.replace("/customer/username");
    }
  }, [userData, userData.success]);

  if (google_loading) {
    return <Loading />;
  }

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.containerLogin}>
          <p className={styles.heading}>Sign Up As A Customer 😎 </p>

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
          {error && <p className={styles.error}>{error}</p>}
          {signupError && <p className={styles.error}>{signupError.message}</p>}
          <div className={styles.whiteBtn} onClick={() => signInWithGoogle()}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/assets/google.png"
                  style={{ height: "2rem", marginRight: "0.5rem" }}
                />
                <p>Continue With Google</p>
              </div>
            )}
          </div>
          {google_error && (
            <p className={styles.error}>{google_error.message}</p>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/login" passHref={true}>
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
            {/* <Link href="/login" passHref={true}>
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
            </Link> */}
            <Link href="/store/signup" passHref={true}>
              <p
                style={{
                  color: "var(--lightGrey)",
                  cursor: "pointer",
                  marginBottom: 0,
                }}
              >
                Want to Signup as a store?{" "}
                <span className={styles.link}>Click Here.</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerSignup;
