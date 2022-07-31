import React, { useState} from "react";
import styles from "./styles.module.css";

function ProductCarousel({ product }) {
  
  const [videoBig, setVideoBig] = useState(false);
  const [displayUrl, setDisplayUrl] = useState(
    product?.product?.images
      ? product?.product?.images[0]?.imgUrl
      : product?.product?.imgUrl
  );

  return (
    <div className={styles.carouselFlex}>
      {!videoBig ? (
        // eslint-disable-next-line @next/next/no-img-element
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
