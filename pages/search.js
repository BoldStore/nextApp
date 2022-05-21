import React from "react";
import CustomerHeader from "../components/CustomerComponents/Header";
import SearchComponent from "../components/CommonComponents/Search";
import styles from "../styles/common.module.css";
import Grid from "../components/Grid";

function search() {
  return (
    <>
      <CustomerHeader />
      <div className={styles.container}>
        <SearchComponent />
        <Grid />
        <Grid />
        <Grid />
      </div>
    </>
  );
}

export default search;
