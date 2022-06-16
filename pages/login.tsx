import React, { useEffect, useState } from "react";
import InputComponent from "../components/CommonComponents/InputComponent";
import Header from "../components/LandingPageComponents/Header";
import styles from "../styles/common.module.css";
import Link from "next/link";

import { auth } from "../firebaseConfig";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Loading from "../components/Loading";

function CustomerLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser] = useAuthState(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, google_user, google_loading, google_error] =
    useSignInWithGoogle(auth);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (currentUser) {
      router.replace("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, google_user, currentUser]);

  if (google_loading) {
    return <Loading />;
  }

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.containerLogin}>
          <p className={styles.heading}>Login</p>

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

          <div className={styles.btn} onClick={handleSubmit}>
            <p>{loading ? "Loading..." : "Login"}</p>
          </div>
          {error && <p className={styles.error}>{error.message}</p>}

          <p style={{ textAlign: "center", color: "var(--lightGrey)" }}>Or </p>
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
            <Link href="#" passHref={true}>
              <p
                style={{
                  color: "var(--lightGrey)",
                  cursor: "pointer",
                  marginBottom: 0,
                }}
              >
                Forgot your password?{" "}
                <span className={styles.link}>Click Here.</span>
              </p>
            </Link>
          </div>

          <Link href="/customer/signup" passHref={true}>
            <p
              style={{
                color: "var(--lightGrey)",
                cursor: "pointer",
                marginBottom: 0,
                textAlign: "center",
                marginTop: "1.5rem",
              }}
            >
              Want to signup? <span className={styles.link}>Click Here.</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
