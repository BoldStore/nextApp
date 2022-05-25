import React from "react";
import SearchComponent from "../../components/CommonComponents/Search";
import styles from "../../styles/common.module.css";
import Grid from "../../components/Grid";
import StoreHeader from "../../components/StoreComponents/Header";

function Search() {
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
}

export default Search;
