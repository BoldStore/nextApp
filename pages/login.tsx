/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import InputComponent from "../components/CommonComponents/InputComponent";
import Header from "../components/LandingPageComponents/Header";
import styles from "../styles/common.module.css";
import Link from "next/link";

import { auth } from "../firebaseConfig";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BoldButton from "../components/CommonComponents/BoldButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "var(--black)",
  border: "2px solid grey",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

function CustomerLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const [forgotEmail, setForgotEmail] = useState("");
  const [open, setOpen] = useState(false);

  const [password, setPassword] = useState("");
  const [currentUser] = useAuthState(auth);
  const [sendPasswordResetEmail, sending, password_error] =
    useSendPasswordResetEmail(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, google_user, google_loading, google_error] =
    useSignInWithGoogle(auth);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  const passwordReset = async () => {
    await sendPasswordResetEmail(forgotEmail);
    if (!password_error) {
      setOpen(false);
      toast("Reset mail sent.");
    }
  };

  useEffect(() => {
    if (currentUser && !currentUser?.isAnonymous) {
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

          {open && (
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} borderColor={"grey"}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Forgot Password
                </Typography>
                {password_error && (
                  <Typography variant="body2" color="error">
                    {password_error.message}
                  </Typography>
                )}
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  We&apos;ll send the password reset link to this email
                </Typography>
                <InputComponent
                  type="email"
                  setValue={setForgotEmail}
                  value={forgotEmail}
                  placeholder={"Please Enter your Email"}
                  noText={true}
                />

                <div className={styles.spacing} />

                <BoldButton
                  text={sending ? "Sending..." : "Submit"}
                  onClick={passwordReset}
                  disabled={false}
                  href=""
                />

                <div className={styles.spacing} />

                <BoldButton
                  text={"Cancel"}
                  onClick={() => setOpen(false)}
                  disabled={false}
                  href=""
                />
              </Box>
            </Modal>
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
                  alt="Google logo"
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
            <div onClick={() => setOpen(true)}>
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
            </div>
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
