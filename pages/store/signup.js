import React, { useEffect, useState } from "react";
import InputComponent from "../../components/CommonComponents/InputComponent";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import Link from "next/link";
import { isEmail, isStrongPassword, equals } from "validator";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "../../store/actions/store";
import { INSTAGRAM_URL } from "../../constants";
import { useRouter } from "next/router";

function StoreSignup() {
  const router = useRouter();
  const [inviteCode, setInviteCode] = useState("");
  const [email, setEmail] = useState("");
  // const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [strongPassword, setStrongPassword] = useState(false);
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, signupError] =
    useCreateUserWithEmailAndPassword(auth);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);

  const validation = () => {
    const validEmail = isEmail(email);
    const passwordValid = equals(password, confirmPassword);

    if (validEmail && passwordValid && strongPassword) {
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
      dispatch(createStore(inviteCode));

      if (!store.success) {
        console.log(store);
        setError(store?.errmess?.toString());
        return;
      }
    }
  }, [user]);

  useEffect(() => {
    if (isStrongPassword(password)) {
      setStrongPassword(true);
    }
  }, [password]);

  useEffect(() => {
    // 3. Create a new store in the database (open insta access page)
    if (store.success) {
      router.push(INSTAGRAM_URL);
    }
  }, [store, store.success]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.center}>
        <div className={styles.container}>
          <p className={styles.heading}>Sign Up As A Store 😉 </p>
          <p className={styles.error}>
            {(error || signupError || store?.errmess)?.toString()}
          </p>
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
            <Link href="/store/login" passHref={true}>
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

export default StoreSignup;
