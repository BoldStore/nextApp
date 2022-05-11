import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import IntroComponent from "../components/HomePageComponents/IntroComponent";
import MovingComponent from "../components/HomePageComponents/MovingComponent";
import AppWalkthrough from "../components/HomePageComponents/AppWalkthrough";
import WhatWeDoComponent from "../components/HomePageComponents/WhatWeDo";
import StillHereComponent from "../components/HomePageComponents/StillHereComponent";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  var cursor: any;
  var cursor2: any;
  const changeMouse = () => {
    cursor = document.getElementById("cursor");
    cursor2 = document.getElementById("cursor2");
    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.opacity = 0.2),
        (cursor.style.border = "0px solid #fff"),
        (cursor.style.backgroundColor = "#fff"),
        (cursor2.style.backgroundColor = "#fff");
    });
  };

  return (
    <div>
      <Head>
        <title>Bold Store</title>
        <meta name="description" content="Generated by Bold Store" />
        <link rel="icon" href="https://i.ibb.co/2ZB8GSG/LogoFull.png" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      </Head>
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
      </div>
    </div>
  );
};

export default Home;
