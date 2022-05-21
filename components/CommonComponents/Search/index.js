import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";

function SearchComponent() {
  return (
    <div className={styles.searchContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input className={styles.searchBar} />
    </div>
  );
}

export default SearchComponent;
