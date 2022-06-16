import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
function ProductCarousel({ product }) {
  const [video, setVideo] = useState(false);
  const [videoBig, setVideoBig] = useState(false);
  const [displayUrl, setDisplayUrl] = useState(
    product?.product?.images
      ? product?.product?.images[0]?.imgUrl
      : product?.product?.imgUrl
  );

  useEffect(() => {
    console.log("imggg", product);
  }, [product]);

  return (
    <div className={styles.carouselFlex}>
      {!videoBig ? (
        <img
          onError={() => {
            setVideoBig(true);
          }}
          src={
            product?.product?.type == "CAROUSEL_ALBUM"
              ? displayUrl
              : product?.product?.imgUrl
          }
          alt="item"
          className={styles.bigImg}
        />
      ) : (
        <video
          src={
            product?.product?.type == "CAROUSEL_ALBUM"
              ? displayUrl
              : product?.product?.imgUrl
          }
          muted
          autoPlay={false}
          className={styles.productImg}
        />
      )}
      <div className={styles.imagesFlex}>
        {product?.product?.images?.map((img, index) => {
          var vid = false;
          return !vid ? (
            <img
              onError={() => {
                vid = true;
              }}
              src={img.imgUrl}
              className={styles.smallImg}
              onMouseEnter={() => setDisplayUrl(img.imgUrl)}
              onClick={() => setDisplayUrl(img.imgUrl)}
            />
          ) : (
            <video
              src={img.imgUrl}
              muted
              autoPlay={false}
              className={styles.smallImg}
              onMouseEnter={() => setDisplayUrl(img.imgUrl)}
              onClick={() => setDisplayUrl(img.imgUrl)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductCarousel;
