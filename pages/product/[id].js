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
import useRazorpay from "react-razorpay";
import { createOrder, verifyOrder } from "../../store/actions/order";
import { auth } from "../../firebaseConfig";
import { signInAnonymously } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import * as ActionTypes from "../../store/ActionTypes";
import { CALLBACK } from "../../constants";

function ProductPage() {
  const Razorpay = useRazorpay();
  const dispatch = useDispatch();
  const router = useRouter();
  const [user] = useAuthState(auth);
  const product = useSelector((state) => state.products);
  const profile = useSelector((state) => state.profile);
  const address = useSelector((state) => state.addresses);
  const order = useSelector((state) => state.orders);

  useEffect(() => {
    if (router?.query?.id && !product.isLoading) {
      getProductAction();
    }
  }, [router, router.query]);

  useEffect(() => {
    console.log("WOHOOO");
    buyProd();
  }, [product?.id]);

  useEffect(() => {
    if (order?.success) {
      openRazorpay();
    }
  }, [order.success]);

  const buyProd = () => {
    if (order.isLoading) {
      return;
    }
    if (order?.address) {
      if (router?.query?.id == order?.product) {
        dispatch(createOrder(order?.product, order?.address));
      }
    }
  };

  const handleSubmit = async () => {
    if (order?.address && order?.product) {
      buyProd();
      return;
    }
    if (!user) {
      await signInAnonymously(auth);
    }

    dispatch({
      type: ActionTypes.ADD_PRODUCT_TO_STATE,
      productId: router.query.id,
    });

    router.push("/address");
  };

  const getProductAction = () => {
    dispatch(getProduct(router.query.id));
  };

  const openRazorpay = () => {
    const orderData = order.order;
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY ?? "rzp_test_L92bj18kAlvXKx",
      amount: orderData?.amount,
      currency: orderData?.currency,
      name: "Bold Store",
      description: "Proceed to buy this product",
      image: "https://i.ibb.co/Ct1jrgj/Logo2.png",
      order_id: orderData.orderId,
      handler: (res) => {
        console.log(res);
        dispatch(
          verifyOrder(
            res.razorpay_payment_id,
            res.razorpay_order_id,
            res.razorpay_signature
          )
        );
      },
      prefill: {
        name:
          address?.addresses[0].name ??
          profile?.data?.name ??
          profile.data.full_name,
        email: profile?.data?.email,
        contact: address?.addresses[0].phone ?? profile?.data?.address?.phone,
      },
      notes: {
        address: "Bold Store Corporate Office",
      },
      theme: {
        color: "var(--black)",
      },
      callback_url: CALLBACK,
    };

    const rzpay = new Razorpay(options);
    rzpay.open();

    rzpay.on("payment.success", (res) => {
      console.log("WOHOOOO", res);
    });
  };

  if (product.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <ProductComponent
          product={product}
          orderLoading={order.isLoading}
          onClick={handleSubmit}
        />
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
                  sold={product.sold}
                  available={product.available}
                  size={product.size}
                  id={product.id}
                  type={product.type}
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
