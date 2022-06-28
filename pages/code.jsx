/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveStoreData } from "../store/actions/store";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/CommonComponents/Header";
import { toast } from "react-toastify";
import styles from "../styles/common.module.css";
import BoldButton from "../components/CommonComponents/BoldButton";
import { getProfile } from "../store/actions/profile";

const Code = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.store);
  const [user] = useAuthState(auth);
  var flag = true;

  useEffect(() => {
    saveData();
  }, [router, user]);

  useEffect(() => {
    if (storeData?.success) {
      dispatch(getProfile());
      router.replace("/profile");
    }
  }, [storeData, storeData?.success]);

  useEffect(() => {
    flag && toast("Woohoo! Almost There 🥳 ");
    flag = false;
  }, []);

  const saveData = () => {
    if (router.query.code && user?.email) {
      dispatch(saveStoreData(router.query.code.toString().split("#")[0]));
    } else {
      router.replace("/home");
    }
  };

  const tryAgain = () => {
    saveData();
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        {storeData?.isLoading ? (
          <></>
        ) : !storeData?.success && storeData?.errmess ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Oops! Looks like something went wrong</h1>
            <h1 className={styles.error}>Error: {storeData?.errmess}</h1>
            <br />
            <br />
            <BoldButton text="Try Again" onClick={tryAgain} />
          </div>
        ) : (
          <>
            <p>We&apos;re fetching your posts! This may take a while...</p>
          </>
        )}
      </div>
    </>
  );
};

export default Code;
