import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function Phone2({ imgSrc, num, text, left }) {
  return (
    <motion.div className={styles.imgFlex}>
      <motion.div className={styles.circle} initial={{ scale: 1 }} />
      <motion.img src={imgSrc} initial={{ scale: 0.75, rotate: 0 }} />
      <p>
        {num} <span style={{ opacity: 0.5 }}>{text}</span>
      </p>
    </motion.div>
  );
}

export default Phone2;
