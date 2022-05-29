import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveStoreData } from "../store/actions/store";

const Code = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.storeData);

  useEffect(() => {
    if (router.query.code) {
      setCode(router.query.code.toString());
      dispatch(saveStoreData(router.query.code.toString()));
    }
  }, [router]);

  useEffect(() => {
    if (storeData?.success) {
      router.replace("/store");
    }
  }, [storeData, storeData.success]);

  return (
    <div>
      {storeData?.isLoading && <h1>Loading...</h1>}
      {storeData?.success && storeData?.errmess && (
        <h1 style={{ color: "red" }}>Error: {storeData?.errmess}</h1>
      )}
      <div>Code: {code}</div>
      <br />
      <div>Store: {storeData?.store}</div>
    </div>
  );
};

export default Code;
