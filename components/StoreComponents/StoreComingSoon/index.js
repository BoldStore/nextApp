import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function StoreComingSoon({ text }) {
  return (
    <motion.div className={styles.imgFlex}>
      <motion.div
        className={styles.circle}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0, duration: 0.5, type: "spring" }}
      />
      <motion.img
        src={"/assets/comingSoon.svg"}
        initial={{ scale: 0, rotate: 35 }}
        whileInView={{ scale: 0.75, rotate: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.75,
          type: "spring",
          bounce: 0.4,
        }}
      />
      <h1>{text ? text : "Our team is still verifying this store..."}</h1>
    </motion.div>
  );
}

export default StoreComingSoon;
