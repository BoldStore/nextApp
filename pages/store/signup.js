/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import InputComponent from "../../components/CommonComponents/InputComponent";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import Link from "next/link";
import { isEmail, isStrongPassword, equals } from "validator";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { createStore, setInviteCodeToState } from "../../store/actions/store";
import { INSTAGRAM_URL } from "../../constants";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";

function StoreSignup() {
  const router = useRouter();
  const [inviteCode, setInviteCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [strongPassword, setStrongPassword] = useState(false);
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, signupError] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, google_user, google_loading, google_error] =
    useSignInWithGoogle(auth);

  const [currentUser] = useAuthState(auth);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);

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
    dispatch(setInviteCodeToState(inviteCode));

    // 1. Signup up for firebase auth
    createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user || currentUser) {
      dispatch(createStore(store.inviteCode));

      if (!store.success) {
        console.log(store);
        setError(store?.errmess?.toString());
        return;
      }
    }
  }, [user, currentUser]);

  // useEffect(() => {
  //   if (isStrongPassword(password)) {
  //     setStrongPassword(true);
  //   }
  // }, [password]);

  useEffect(() => {
    // 3. Create a new store in the database (open insta access page)
    if (store.success) {
      router.replace(INSTAGRAM_URL);
    }
  }, [store, store.success]);

  return (
    <div className={styles.page}>
      <Header />
      {(loading || google_loading) && <Loading />}
      <div className={styles.center}>
        <div className={styles.containerLogin}>
          <p className={styles.heading}>Sign Up As A Store 😉 </p>
          <p className={styles.error}>
            {(error || signupError || store?.errmess)?.toString()}
          </p>
          {google_error && (
            <p className={styles.error}>{google_error.message}</p>
          )}
          <InputComponent
            type="text"
            setValue={setInviteCode}
            value={inviteCode}
            placeholder={"Invite Code"}
            noText={true}
          />
          {/* <InputComponent
            type="text"
            setValue={setFullName}
            value={fullName}
            placeholder={"Full Name"}
            noText={true}
          /> */}
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
          {/* <Link href="/store/" passHref={true}> */}
          <div className={styles.btn} onClick={handleSubmit}>
            <p>{loading || store.isLoading ? "Loading...." : "Signup"}</p>
          </div>
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
                  alt="Google Logo"
                  src="/assets/google.png"
                  style={{ height: "2rem", marginRight: "0.5rem" }}
                />
                <p>Continue With Google</p>
              </div>
            )}
          </div>
          {/* </Link> */}
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
            <Link href="/customer/signup" passHref={true}>
              <p
                style={{
                  color: "var(--lightGrey)",
                  cursor: "pointer",
                  marginBottom: 0,
                }}
              >
                Want to Signup as a customer?{" "}
                <span className={styles.link}>Click Here.</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreSignup;
