import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function Phone2({ imgSrc, num, text, left }) {
  return (
    <motion.div className={styles.divFlex}>
      <motion.div className={styles.imgFlex}>
        <motion.div className={styles.circle} initial={{ scale: 1 }} />
        <motion.img src={imgSrc} initial={{ scale: 0.75, rotate: 0 }} />
        <div className={styles.infoFlex}>
          <p className={styles.num}>{num}</p>
          <p style={{ opacity: 0.5, marginLeft: "1rem" }}>{text}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Phone2;
