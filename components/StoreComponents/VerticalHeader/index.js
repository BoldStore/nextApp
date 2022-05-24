import React from "react";
import styles from "./styles.module.css";
import { Grid, AlignJustify, Send } from "react-feather";
import { RWebShare } from "react-web-share";

function VerticalHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Grid className={styles.icon} />
        <AlignJustify className={styles.icon} />{" "}
        <RWebShare
          data={{
            text: "Hey, checkout this amazing Thrift Store on Bold.",
            url: "https://www.boldstore.in/",
            title: "Thrift Store on Bold",
          }}
          className={styles.share}
          style={{ color: "var(--black) !important" }}
          onClick={() => console.log("shared successfully!")}
        >
          <Send className={styles.icon} />
        </RWebShare>
      </div>
    </div>
  );
}

export default VerticalHeader;
