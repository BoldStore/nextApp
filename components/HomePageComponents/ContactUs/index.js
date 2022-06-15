import React, { useState } from "react";
import styles from "./styles.module.css";
import PhoneComponent from "../PhoneComponent";
import { motion } from "framer-motion";
import axios from "axios";

function ContactUs() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");
  const [instaUsername, setInstaUsername] = useState("");

  var cursor;
  var cursor2;
  var drag;

  const saveData = async () => {
    setLoading(true);
    const url =
      "https://us-central1-bold-96a92.cloudfunctions.net/app/stores/potentialStore";
    const response = await axios.post(
      url,
      {
        insta_username: instaUsername,
        email,
      },
      {
        headers: "Content-Type: application/json",
      }
    );

    setLoading(false);
    if (response.data?.success) {
      setError("");
      setMessage(response.data.message);
    } else {
      setError(response.data?.message || "There was an error");
    }
  };

  const changeMouse = () => {
    cursor = document.getElementById("cursor");
    cursor2 = document.getElementById("cursor2");
    drag = document.getElementById("drag");
    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.opacity = 0.2),
        (cursor2.style.opacity = 1),
        (drag.style.display = "none"),
        (cursor.style.border = "0px solid #fff"),
        (cursor.style.backgroundColor = "#fff"),
        (cursor2.style.backgroundColor = "#fff");
    });
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={() => {
        changeMouse();
      }}
    >
      <div className={styles.flexDiv}>
        <PhoneComponent
          imgSrc={"https://i.ibb.co/z60fWnS/Group-14.png"}
          num={"03"}
          text={"Get invite code"}
          left={true}
        />
        <motion.div className={styles.form}>
          <h1>Join Bold As A Store 🚀</h1>
          <p className={styles.smallText2}>Instagram Username</p>
          <div className={styles.divInput}>
            <p>@</p>
            <input
              type="text"
              className={styles.input}
              placeholder={"username"}
              value={instaUsername}
              onChange={(e) => {
                setInstaUsername(e.target.value);
              }}
            />
          </div>
          <div className={styles.divInput}>
            <input
              text=""
              type="email"
              className={styles.input}
              placeholder={"Email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}
          {message && <p className={styles.message}>{message}</p>}
          <p className={styles.btn} onClick={saveData}>
            {!loading ? "Join The Waiting List" : "Loading..."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactUs;
