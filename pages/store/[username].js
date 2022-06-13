import { User } from "react-feather";
import VerticalHeader from "../../components/StoreComponents/VerticalHeader";
import styles from "./profile/styles.module.css";
import React, { useEffect, useState } from "react";
import TabsStoreProfile from "./profile/tabs";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useDispatch, useSelector } from "react-redux";
import Grid1 from "../../components/CommonComponents/Grids/grid1";
import Grid2 from "../../components/CommonComponents/Grids/grid2";
import Grid3 from "../../components/CommonComponents/Grids/grid3";
import Grid4 from "../../components/CommonComponents/Grids/grid4";
import Post from "../../components/CommonComponents/Post";
import StoreHeader from "../../components/StoreComponents/Header";
import CustomerHeader from "../../components/CustomerComponents/Header";
import { useRouter } from "next/router";
import { storePage } from "../../store/actions/pages";
import Loading from "../../components/Loading";
import { Avatar } from "@mui/material";
import StoreComingSoon from "../../components/StoreComponents/StoreComingSoon";
import Link from "next/link";
import OneImg from "../../components/CommonComponents/Grids/oneImg";
import UsernameTabs from "../../components/StoreComponents/UsernameTabs";

function StorePage() {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.pages);
  const profile = useSelector((state) => state.profile);
  const [value, setValue] = useState(0);
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const handleChange = (i) => {
    setValue(i);
  };

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function chunk(items, size) {
    const chunks = [];
    items = [].concat(...items);

    while (items.length) {
      chunks.push(items.splice(0, size));
    }
    console.log("productsss", chunks);
    return chunks;
  }

  useEffect(() => {
    if (query?.username) {
      dispatch(storePage(query.username));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (store?.store?.products) {
      setProducts(chunk(store?.store?.products, 6));
    }
  }, [store?.store?.products]);

  if (store.store_loading) {
    return <Loading />;
  }

  if (store.store_errmess) {
    return <div>{store.store_errmess}</div>;
  }

  return (
    <>
      {profile?.isStore ? <StoreHeader /> : <CustomerHeader />}

      <VerticalHeader
        value={value}
        setValue={setValue}
        handleChange={handleChange}
      />
      <div className={styles.container}>
        <div className={styles.storeDetails}>
          {store?.store?.store?.profile_pic ? (
            <Avatar
              alt="Store Profile Picture"
              src={store.store.store.profile_pic}
              sx={{
                width: 100,
                height: 100,
                cursor: "pointer",
                border: "2px solid var(--darkGrey)",
              }}
            />
          ) : (
            <User
              style={{
                width: 70,
                height: 70,
                cursor: "pointer",
                border: "2px solid var(--white)",
                padding: "1rem",
                borderRadius: "50%",
              }}
            />
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              passHref={true}
              href={`https://www.instagram.com/${store?.store?.store?.username}`}
            >
              <h1>@{store?.store?.store?.username}</h1>
            </Link>

            {store?.store?.store?.isCompleted == true && (
              <VerifiedIcon
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "1.5rem",
                  color: "#1DA1F2",
                }}
              />
            )}
          </div>
        </div>
        <div className={styles.tabs}>
          <UsernameTabs products={products} profile={profile} store={store} />
        </div>
        <div className={styles.desktopTabs}>
          {profile.data?.percentage == 100 ? (
            value == 0 ? (
              <div className={styles.products}>
                <div className={styles.productsGrid}>
                  {products.slice(0, -1).map((arr, i) => {
                    var num = randomNumberInRange(1, 4);
                    if (num == 1) {
                      return <Grid1 key={i} products={arr} />;
                    } else if (num == 2) {
                      return <Grid2 key={i} products={arr} />;
                    } else if (num == 3) {
                      return <Grid3 key={i} products={arr} />;
                    } else {
                      return <Grid4 key={i} products={arr} />;
                    }
                  })}
                  <div className={styles.postContainer}>
                    {products[products.length - 1]?.length != 6 ? (
                      products[products.length - 1]?.map((item, i) => (
                        <OneImg product={item} key={i} />
                      ))
                    ) : (
                      <Grid1 products={products[-1]} />
                    )}
                  </div>
                </div>
              </div>
            ) : value == 1 ? (
              <div className={styles.postContainer}>
                {store?.store?.products?.map((product, index) => (
                  <Post
                    postUrl={product.imgUrl}
                    key={index}
                    storeUrl={store?.store?.store?.profile_pic}
                    storeLocation={store?.store?.store?.city ?? ""}
                    storeName={store?.store?.store?.username}
                    caption={product.caption}
                    price={product.price}
                    size={product.size}
                    id={product.id}
                  />
                ))}
              </div>
            ) : (
              <></>
            )
          ) : (
            <StoreComingSoon />
          )}
        </div>
      </div>
    </>
  );
}

export default StorePage;
