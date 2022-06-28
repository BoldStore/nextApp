import React, { useEffect, useState } from "react";
import SearchComponent from "../components/CommonComponents/Search";
import styles from "../styles/common.module.css";
import Grid from "../components/Grid";
import Header from "../components/CommonComponents/Header";
import { useDispatch, useSelector } from "react-redux";
import { explorePage } from "../store/actions/search";

function Search() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    dispatch(explorePage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <SearchComponent
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
        {isSearching ? (
          search?.stores.length == 0 ? (
            <p
              style={{
                color: "var(--lightGrey)",
                textAlign: "center",
              }}
            >
              No Results Found
            </p>
          ) : (
            search?.stores?.map((store, index) => {
              return <Grid key={index} store={store} />;
            })
          )
        ) : (
          search.explore.map((exploreItem, index) => {
            return (
              exploreItem.store &&
              exploreItem.products.length > 3 && (
                <Grid
                  key={index}
                  store={exploreItem?.store}
                  products={exploreItem?.products}
                />
              )
            );
          })
        )}
      </div>
    </>
  );
}

export default Search;
