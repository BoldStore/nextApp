import React from "react";
import styles from "./styles.module.css";
function VideoComponent() {
  return (
    <div className={styles.wrapper}>
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/lIOYIAk4mcU"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default VideoComponent;
