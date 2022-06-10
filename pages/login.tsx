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
        <div className={styles.container}>
          <p className={styles.heading}>Login 🥳</p>
          {error && <p className={styles.error}>{error.message}</p>}
          {google_error && (
            <p className={styles.error}>{google_error.message}</p>
          )}
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

          <div className={styles.btn} onClick={() => signInWithGoogle()}>
            <p>{loading ? "Loading..." : "Continue With Google"}</p>
          </div>
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
            <Link href="/customer/signup" passHref={true}>
              <p
                style={{
                  color: "var(--lightGrey)",
                  cursor: "pointer",
                  marginBottom: 0,
                }}
              >
                Dont Have An Account?{" "}
                <span className={styles.link}>Signup.</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
