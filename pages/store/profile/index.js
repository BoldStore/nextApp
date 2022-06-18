/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar } from "@mui/material";
import { User } from "react-feather";
import VerticalHeader from "../../../components/StoreComponents/VerticalHeader";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import Header from "../../../components/CommonComponents/Header";
import VerifiedIcon from "@mui/icons-material/Verified";
import SignUpComplete from "../../../components/StoreComponents/SignupComplete";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Post from "../../../components/CommonComponents/Post";
import Link from "next/link";
import OneImg from "../../../components/CommonComponents/Grids/oneImg";
import { storePage } from "../../../store/actions/pages";
import Grid1 from "../../../components/CommonComponents/Grids/grid1";
import Grid2 from "../../../components/CommonComponents/Grids/grid2";
import Grid3 from "../../../components/CommonComponents/Grids/grid3";
import Grid4 from "../../../components/CommonComponents/Grids/grid4";
import UsernameTabs from "../../../components/StoreComponents/UsernameTabs";
import { getProfile } from "../../../store/actions/profile";
import StoreComingSoon from "../../../components/StoreComponents/StoreComingSoon";
import { INSTAGRAM_URL } from "../../../constants";

function StoreProfile() {
  const profile = useSelector((state) => state.profile);
  const store = useSelector((state) => state.pages);
  const [value, setValue] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const handleChange = (i) => {
    setValue(i);
  };

  useEffect(() => {
    if (!profile?.isStore) {
      router.push("/home");
    }
  }, [profile]);

  const refresh = () => {
    dispatch(getProfile());
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
    return chunks;
  }

  useEffect(() => {
    if (store?.store?.products) {
      setProducts(chunk(store?.store?.products, 6));
    }
  }, [store?.store?.products]);

  useEffect(() => {
    if (profile?.data?.data?.username) {
      dispatch(storePage(profile?.data?.data?.username));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.data]);

  if (profile?.isStore) {
    return (
      <>
        <Header />
        <VerticalHeader
          value={value}
          setValue={setValue}
          handleChange={handleChange}
        />
        <div className={styles.container}>
          <div className={styles.storeDetails}>
            {profile.profile_pic ? (
              <Avatar
                alt="Avatar"
                src={profile.profile_pic}
                sx={{
                  width: 100,
                  height: 100,
                  cursor: "pointer",
                  border: "2px solid var(--darkGrey)",
                }}
              />
            ) : (
              <User />
            )}
            {!profile?.data?.data?.username ? (
              <Link href={INSTAGRAM_URL} passHref={true}>
                <p
                  style={{
                    color: "var(--lightGrey)",
                    cursor: "pointer",
                    marginTop: "2rem",
                  }}
                >
                  Connect to Instagram
                </p>
              </Link>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    passHref={true}
                    href={`https://www.instagram.com/${profile?.data?.data?.username}`}
                  >
                    <h1 style={{ cursor: "pointer" }}>
                      @{profile?.data?.data?.username}
                    </h1>
                  </Link>
                  {profile.data?.percentage == 100 && (
                    <VerifiedIcon
                      style={{
                        marginLeft: "0.5rem",
                        fontSize: "1.5rem",
                        color: "#1DA1F2",
                      }}
                    />
                  )}
                </div>
                {profile?.data?.data?.postsStatus === "fetching" ? (
                  <p style={{ color: "yellow" }}>
                    Your posts are still fetching...
                  </p>
                ) : (
                  <p
                    style={{ color: "var(--lightGrey)", cursor: "pointer" }}
                    onClick={refresh}
                  >
                    Refresh Products
                  </p>
                )}
              </>
            )}
          </div>
          {profile?.data?.data?.postsStatus == "fetching" &&
          profile.data?.percentage == 100 ? (
            <StoreComingSoon text={"Posts are being fetched..."} />
          ) : (
            <>
              <div className={styles.tabs}>
                <UsernameTabs
                  products={products}
                  profile={true}
                  store={store}
                />
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
                          isCompleted={store?.store?.store?.isCompleted}
                          type={product.type}
                          images={product.images}
                        />
                      ))}
                    </div>
                  ) : (
                    <></>
                  )
                ) : (
                  <SignUpComplete />
                )}
              </div>
            </>
          )}
        </div>
      </>
    );
  } else {
    router.push("/profile");
  }
}

export default StoreProfile;
