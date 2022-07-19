import React, { useEffect } from "react";
import styles from "../bag/styles.module.css";
import Header from "../../components/CommonComponents/Header";
import Post from "../../components/CommonComponents/Post";
import CompleteOrderComponent from "../../components/CommonComponents/CompleteOrderComponent";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../store/actions/order";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";

function OrderPage() {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    if (query.id) {
      dispatch(getOrder(query.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (orders.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className={styles.container2}>
        {orders.order && <CompleteOrderComponent order={orders.order} />}
        {orders?.more_from_store?.length > 0 && (
          <>
            <h1>More From the Store </h1>
            <div className={styles.postContainer}>
              {orders.more_from_store.map((product, index) => (
                <Post
                  available={product.available}
                  caption={product.caption}
                  id={product.id}
                  images={product.images}
                  isCompleted={true}
                  postUrl={
                    product.post_url
                      ? product.post_url
                      : product?.images[0]?.imgUrl
                  }
                  price={product.price}
                  size={product.size}
                  storeLocation={orders?.order?.store?.city}
                  storeName={orders?.order?.store?.username}
                  sold={product.sold}
                  storeUrl={orders?.order?.store?.profile_pic}
                  type={product.type}
                  key={index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default OrderPage;
