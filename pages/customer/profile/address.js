import React, { useState } from "react";
import InputComponent from "../../../components/CommonComponents/InputComponent";
import StoreHeader from "../../../components/StoreComponents/Header";
import styles from "./profile.module.css";
import BoldButton from "../../../components/CommonComponents/BoldButton";
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

function CustomerAddress() {
  const [locality, setLocality] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  return (
    <>
      <StoreHeader />
      <div className={styles.container}>
        <h1>Address Details</h1>
        <InputComponent
          type="text"
          setValue={setLocality}
          value={locality}
          placeholder={"Locality"}
        />
        <InputComponent
          type="text"
          setValue={setAppartment}
          value={appartment}
          placeholder={"Appartment/Suite"}
        />
        <InputComponent
          type="text"
          setValue={setCity}
          value={city}
          placeholder={"City"}
        />
        <InputComponent
          type="text"
          setValue={setState}
          value={state}
          placeholder={"State"}
        />
        <InputComponent
          type="text"
          setValue={setPincode}
          value={pincode}
          placeholder={"Pincode"}
        />
        <div style={{ marginTop: "3rem" }}></div>
        <BoldButton text={"Proceed"} />
      </div>
    </>
  );
}

export default CustomerAddress;