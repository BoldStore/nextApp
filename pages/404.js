import React from "react";
import Header from "../components/LandingPageComponents/Header";
import styles from "../styles/common.module.css";
function Page404() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.extraBigHeading}>
          404{"  "}
          <span className={styles.whiteHeading}>Page not found.</span>
        </h1>
      </div>
    </div>
  );
}

export default Page404;
