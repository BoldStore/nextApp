import React from "react";
import styles from "./styles.module.css";
import { Grid, AlignJustify, Send, Bookmark } from "react-feather";
import { RWebShare } from "react-web-share";

function VerticalHeader({ value, handleChange, saved, store, bag }) {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <AlignJustify
          className={styles.icon}
          onClick={() => handleChange(1)}
          style={{ color: value == 1 && "var(--white)" }}
        />
        {!bag && (
          <Grid
            className={styles.icon}
            onClick={() => handleChange(0)}
            style={{ color: value == 0 && "var(--white)" }}
          />
        )}

        {saved ? (
          <Bookmark
            className={styles.icon}
            onClick={() => handleChange(2)}
            style={{ color: value == 2 && "var(--white)" }}
          />
        ) : (
          <RWebShare
            data={{
              text: "Hey, checkout this amazing Thrift Store on Bold.",
              url: `https://www.boldstore.in/store/${store?.store?.store?.username}`,
              title: "Thrift Store on Bold",
            }}
            className={styles.share}
            style={{ color: "var(--black) !important" }}
            onClick={() => console.log("shared successfully!")}
          >
            <Send className={styles.icon} />
          </RWebShare>
        )}
      </div>
    </div>
  );
}

export default VerticalHeader;
