/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import Post from "../../components/CommonComponents/Post";
import ProductComponent from "../../components/CommonComponents/ProductComponent";
import Header from "../../components/CommonComponents/Header";
import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "../../components/Loading";

function ProductPage() {
  const router = useRouter();
  const pagesData = useSelector((state) => state.pages);
  const [product, setProduct] = useState(null);

  const getStore = () => {
    const products = pagesData?.home?.products;
    for (let i = 0; i < products?.length; i++) {
      const productObj = products[0];
      if (productObj.id === router.query.id) {
        setProduct(productObj);
        break;
      }
    }
  };

  useEffect(() => {
    if (router?.query?.id) {
      getStore();
    }
  }, [router, router.query]);

  if (!product) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductComponent product />
        <h1>More From the Store </h1>
        <div className={styles.flexDiv}>
          <Post /> <Post /> <Post /> <Post />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
