import React, { useEffect, useState } from "react";
import InputComponent from "../../../components/CommonComponents/InputComponent";
import Header from "../../../components/CommonComponents/Header";
import styles from "./styles.module.css";
import BoldButton from "../../../components/CommonComponents/BoldButton";
import { useDispatch, useSelector } from "react-redux";
import { updateStore } from "../../../store/actions/store";
import { useRouter } from "next/router";
// import { getCookie } from "cookies-next";
// import { firebaseAdmin } from "../../../firebaseAdmin";

// export async function getServerSideProps({ req, res }) {
//   const token = getCookie("token", { req, res });
//   let user;
//   try {
//     user = await firebaseAdmin.auth().verifyIdToken(token);
//     return {
//       props: {
//         user,
//       },
//     };
//   } catch (e) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/store/signup",
//       },
//       props: {},
//     };
//   }
// }

function ProfileUpi() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.store);
  const profile = useSelector((state) => state.profile);
  const router = useRouter();
  const [upi, setUpi] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStore(upi, mobile));
  };

  useEffect(() => {
    if (profile?.data?.paymentDetails) {
      setUpi(profile?.data?.paymentDetails?.upi_id);
      setMobile(profile?.data?.paymentDetails?.phone);
    }
  }, [profile, profile.data]);

  useEffect(() => {
    if (!profile?.isStore) {
      router.push("/home");
    }
  }, [profile]);

  if (profile?.isStore)
    return (
      <>
        <Header />
        <div className={styles.container}>
          {storeData.success && (
            <h1 style={{ color: "green" }}>Saved Succesfully</h1>
          )}
          <h1>UPI Details</h1>
          <InputComponent
            type="text"
            setValue={setUpi}
            value={upi}
            placeholder={"upi@bank"}
            noText={true}
          />
          <InputComponent
            type="text"
            setValue={setMobile}
            value={mobile}
            placeholder={"Mobile Number"}
            noText={true}
          />
          <div style={{ marginTop: "3rem" }}></div>
          <BoldButton
            text={storeData.isLoading ? "Loading..." : "Update"}
            onClick={handleSubmit}
          />
        </div>
      </>
    );
}

export default ProfileUpi;
