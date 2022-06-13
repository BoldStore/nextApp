import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveStoreData } from "../store/actions/store";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/CommonComponents/Header";
import { toast } from "react-toastify";
import styles from "../styles/common.module.css";
import BoldButton from "../components/CommonComponents/BoldButton";
import Loading from "../components/Loading";
import StoreComingSoon from "../components/StoreComponents/StoreComingSoon";
const Code = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.store);
  const [user] = useAuthState(auth);
  var flag = true;

  useEffect(() => {
    if (router.query.code && user?.email) {
      setCode(router.query.code.toString());
      dispatch(saveStoreData(router.query.code.toString().split("#")[0]));
    }
  }, [router, user]);

  useEffect(() => {
    console.log(storeData);
    if (storeData?.success) {
      router.replace("/store");
    }
  }, [storeData, storeData?.success]);

  useEffect(() => {
    flag && toast("Woohoo! Almost There 🥳 ");
    flag = false;
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        {storeData?.isLoading && <Loading />}
        {!storeData?.success && storeData?.errmess ? (
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
            <BoldButton text="Try Again" onClick={() => console.log("hi")} />
          </div>
        ) : (
          <>
            {/* <p>We're fetching your posts! This may take a while...</p>
            <div>Code: {code}</div>
            <br />
            <div>Store: {storeData?.store?.insta_username}</div> */}
            <StoreComingSoon text={"Your Posts Are Being Fetched..."} />
          </>
        )}
      </div>
    </>
  );
};

export default Code;
