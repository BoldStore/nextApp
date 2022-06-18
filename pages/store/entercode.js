import React, { useEffect, useState } from "react";
import InputComponent from "../../components/CommonComponents/InputComponent";
import Header from "../../components/LandingPageComponents/Header";
import styles from "../../styles/common.module.css";
import Link from "next/link";
import { createStore } from "../../store/actions/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { INSTAGRAM_URL } from "../../constants";

function SignupCode() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store);

  useEffect(() => {
    // Create a new store in the database (open insta access page)
    if (store.success) {
      router.replace(INSTAGRAM_URL);
    } else {
      setError(store?.errmess?.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store, store.success]);

  const handleSubmit = () => {
    if (store.isLoading) {
      return;
    }
    if (!code) {
      setError("Please enter a code");
      return;
    }
    dispatch(createStore(code));
  };

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

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.btn} onClick={handleSubmit}>
            <p>{store.isLoading ? "Loading" : "Proceed to Signup"}</p>
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
