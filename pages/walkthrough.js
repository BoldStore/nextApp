import React from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/LandingPageComponents/Header";
import VideoComponent from "../components/WalkthroughComponents/VideoComponent";
import PhoneComponent from "../components/LandingPageComponents/PhoneComponent";
function WalkthroughPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.heading}>
          App <span style={{ color: "#808080" }}> Walkthrough</span>
        </h1>
        <VideoComponent />
        <PhoneComponent
          imgSrc={"/assets/connectInsta.png"}
          num={"02"}
          text={"Connecting Instagram"}
        />
      </div>
    </>
  );
}

export default WalkthroughPage;
