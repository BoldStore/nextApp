import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./styles.module.css";

function MovingComponent() {
  return (
    <div className={styles.container}>
      <Marquee speed={100} pauseOnClick={true} gradient={false}>
        <p className={styles.specialText}>
          SHOP BOLD. SHOP BOLD. SHOP BOLD. SHOP BOLD.
        </p>
      </Marquee>
      <Marquee
        direction={"right"}
        speed={100}
        pauseOnClick={true}
        gradient={false}
      >
        <p className={styles.specialText}>
          SHOP BOLD. SHOP BOLD. SHOP BOLD. SHOP BOLD.
        </p>
      </Marquee>
    </div>
  );
}

export default MovingComponent;
