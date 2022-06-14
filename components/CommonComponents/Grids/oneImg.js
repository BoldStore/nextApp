import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles1.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
function OneImg({ product }) {
  const [flag1, setFlag1] = useState(false);
  const [video, setVideo] = useState(false);
  return (
    <Link href={`/product/${product?.id}`} passHref={true}>
      <div
        className={styles.div1}
        onMouseEnter={() => setFlag1(true)}
        onMouseLeave={() => setFlag1(false)}
      >
        {!video ? (
          <img
            onError={() => {
              setVideo(true);
            }}
            src={product?.imgUrl}
            alt="item"
            width="320"
            height="320"
            className={styles.individualImg}
          />
        ) : (
          <video
            src={product?.imgUrl}
            muted
            autoPlay={false}
            className={styles.individualImg}
          />
        )}

        {flag1 && (
          <motion.div
            className={styles.hoverDiv}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0.4,
            }}
          >
            <p>₹{product?.amount ?? 200}</p> <p>{product?.size ?? M}</p>
          </motion.div>
        )}
      </div>
    </Link>
  );
}

export default OneImg;
