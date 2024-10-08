import React, { useEffect, useState } from "react";
import InputComponent from "../../../components/CommonComponents/InputComponent";
import Header from "../../../components/CommonComponents/Header";
import styles from "./styles.module.css";
import BoldButton from "../../../components/CommonComponents/BoldButton";
import { useDispatch, useSelector } from "react-redux";
import { updateStore } from "../../../store/actions/store";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { getProfile } from "../../../store/actions/profile";
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
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (upi.length == 0 || mobile.length == 0) {
      setError("Please Enter All Inputs");
    } else if (mobile.length != 10) {
      setError("Please Make sure Mobile Number is 10 digits long");
    } else if (!upi.includes("@")) {
      setError("Please Enter a valid UPI ID");
    } else {
      setError("");
      dispatch(updateStore(upi, mobile));
    }
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

  useEffect(() => {
    if (storeData.update_success) {
      toast("Saved Succesfully!");
      dispatch(getProfile());
      router.push("/profile");
    }
  }, [storeData]);

  if (profile?.isStore)
    return (
      <>
        <Header />
        <div className={styles.container}>
          {/* {storeData.success && (
            <p
              style={{
                color: "#5cb85c",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              Saved Succesfully
            </p>
          )} */}
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
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </>
    );
}

export default ProfileUpi;
