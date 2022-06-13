import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles1.module.css";
import { motion } from "framer-motion";
function OneImg({ product }) {
  const [flag1, setFlag1] = useState(false);
  return (
    <Link href={`/product/${product?.id}`} passHref={true}>
      <div
        className={styles.div1}
        onMouseEnter={() => setFlag1(true)}
        onMouseLeave={() => setFlag1(false)}
      >
        <img className={styles.individualImg} src={product?.imgUrl} />
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
            <p>₹{product?.amount}</p> <p>{product?.size}</p>
          </motion.div>
        )}
      </div>
    </Link>
  );
}

export default OneImg;
