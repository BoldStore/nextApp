import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function PhoneComponent({ imgSrc, num, text, left }) {
  return (
    <motion.div className={styles.imgFlex}>
      <motion.div
        className={styles.circle}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0, duration: 0.5, type: "spring" }}
      />
      <motion.img
        src={imgSrc}
        initial={{ scale: 0, rotate: left ? -35 : 35 }}
        whileInView={{ scale: 0.75, rotate: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.75,
          type: "spring",
          bounce: 0.4,
        }}
      />
      <p>
        {num} <span style={{ opacity: 0.5 }}>{text}</span>
      </p>
    </motion.div>
  );
}

export default PhoneComponent;
