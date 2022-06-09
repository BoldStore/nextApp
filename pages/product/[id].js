import React from "react";
import styles from "./styles.module.css";

import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Post from "../../components/CommonComponents/Post";
import StoreHomePage from "../store";
import ProductComponent from "../../components/CommonComponents/ProductComponent";
import StoreHeader from "../../components/StoreComponents/Header";
import CustomerHeader from "../../components/CustomerComponents/Header";
function ProductPage() {
  const profile = useSelector((state) => state.profile);

  if (profile?.isLoading) {
    return <Loading />;
  }
  if (profile?.isStore)
    return (
      <>
        <StoreHeader />
        <div className={styles.container}>
          <ProductComponent />
          <h1>More From the Store </h1>
          <div className={styles.flexDiv}>
            <Post /> <Post /> <Post /> <Post />
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <CustomerHeader />
        <div className={styles.container}>
          <ProductComponent />
          <h1>More From the Store </h1>
          <div className={styles.flexDiv}>
            <Post /> <Post /> <Post /> <Post />
          </div>
        </div>
      </>
    );
}

export default ProductPage;
