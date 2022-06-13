import React, { useEffect } from "react";
import SearchComponent from "../components/CommonComponents/Search";
import styles from "../styles/common.module.css";
import Grid from "../components/Grid";
import Header from "../components/CommonComponents/Header";
import { useDispatch, useSelector } from "react-redux";
import { explorePage } from "../store/actions/search";

function Search() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  console.log("Search Results>>>", search);

  useEffect(() => {
    dispatch(explorePage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
