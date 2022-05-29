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
  return (
    <div>
      <div>Code: {code}</div>
      <div>Store: {storeData}</div>
    </div>
  );
};

export default Code;
