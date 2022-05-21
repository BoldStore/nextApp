import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import IntroComponent from "../components/LandingPageComponents/IntroComponent";
import MovingComponent from "../components/LandingPageComponents/MovingComponent";
import AppWalkthrough from "../components/LandingPageComponents/AppWalkthrough";
import WhatWeDoComponent from "../components/LandingPageComponents/WhatWeDo";
import StillHereComponent from "../components/LandingPageComponents/StillHereComponent";
import ContactUs from "../components/LandingPageComponents/ContactUs";
import ComingSoon from "../components/LandingPageComponents/ComingSoon";
import Header from "../components/LandingPageComponents/Header";

const Home: NextPage = () => {
  var cursor: any;
  var cursor2: any;
  const changeMouse = () => {
    cursor = document.getElementById("cursor");
    cursor2 = document.getElementById("cursor2");
    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.opacity = 0.2),
        (cursor.style.border = "0px solid var(--white)"),
        (cursor.style.backgroundColor = "var(--white)"),
        (cursor2.style.backgroundColor = "var(--white)");
    });
  };

  return (
    <div>
      <Header />
      <div
        className={styles.container}
        onMouseEnter={() => {
          changeMouse();
        }}
      >
        <IntroComponent />
        <MovingComponent />
        <WhatWeDoComponent />
        <AppWalkthrough />
        <StillHereComponent />
        <ContactUs />
        <ComingSoon />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
