import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";
import useDebounce from "../../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { searchProducts, searchStores } from "../../../store/actions/search";

function SearchComponent() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  useDebounce(() => getData(), 200, [term]);

  const getData = () => {
    if (term) {
      dispatch(searchStores(term));
      dispatch(searchProducts(term));
    }
  };

  return (
    <div className={styles.searchContainer}>
      <SearchIcon className={styles.searchIcon} />
      <input
        className={styles.searchBar}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchComponent;
