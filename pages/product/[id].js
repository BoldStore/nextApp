/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/CommonComponents/Post";
import ProductComponent from "../../components/CommonComponents/ProductComponent";
import Header from "../../components/CommonComponents/Header";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import { getProduct } from "../../store/actions/products";

function ProductPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const product = useSelector((state) => state.products);

  const getProductAction = () => {
    dispatch(getProduct(router.query.id));
  };

  useEffect(() => {
    if (router?.query?.id && !product.isLoading) {
      getProductAction();
    }
  }, [router, router.query]);

  if (product.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductComponent product={product} />
        {product?.products?.length > 0 && (
          <>
            <h1>More From the Store </h1>
            <div className={styles.flexDiv}>
              {product?.products?.map((product, index) => (
                <Post
                  postUrl={product.imgUrl}
                  key={index}
                  storeUrl={product?.store?.profile_pic}
                  storeLocation={product?.store?.city ?? ""}
                  storeName={product?.store?.username}
                  caption={product.caption}
                  price={product.price}
                  size={product.size}
                  id={product.id}
                  isCompleted={product?.store?.isCompleted}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ProductPage;
