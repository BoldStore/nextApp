import React from "react";
import SearchComponent from "../components/CommonComponents/Search";
import styles from "../styles/common.module.css";
import Grid from "../components/Grid";
import Header from "../components/CommonComponents/Header";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import StoreHeader from "../components/StoreComponents/Header";
import CustomerHeader from "../components/CustomerComponents/Header";

function Search() {
  const profile = useSelector((state) => state.profile);

  if (profile?.isLoading) {
    return <Loading />;
  }
  if (profile?.isStore)
    return (
      <>
        <StoreHeader />
        <div className={styles.container}>
          <SearchComponent />
          <Grid />
          <Grid />
          <Grid />
        </div>
      </>
    );
  else
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

export default Search;
