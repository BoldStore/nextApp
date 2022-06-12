import React from "react";
import SearchComponent from "../components/CommonComponents/Search";
import styles from "../styles/common.module.css";
import Grid from "../components/Grid";
import Header from "../components/CommonComponents/Header";
import { useSelector } from "react-redux";

function Search() {
  const search = useSelector((state) => state.search);

  console.log("Search Results>>>", search);

  return (
    <>
      <Header />
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
