import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveStoreData } from "../store/actions/store";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Code = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.store);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (router.query.code && user?.email) {
      setCode(router.query.code.toString());
      dispatch(saveStoreData(router.query.code.toString()));
    }
  }, [router, user]);

  useEffect(() => {
    if (storeData?.success) {
      router.replace("/store");
    }
  }, [storeData, storeData?.success]);

  return (
    <div>
      {storeData?.isLoading && <h1>Loading...</h1>}
      {!storeData?.success && storeData?.errmess && (
        <h1 style={{ color: "red" }}>Error: {storeData?.errmess}</h1>
      )}
      <div>Code: {code}</div>
      <br />
      <div>Store: {storeData?.store}</div>
    </div>
  );
};

export default Code;
