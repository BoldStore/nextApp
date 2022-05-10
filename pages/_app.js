import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  var cursor;
  var cursor2;

  useEffect(() => {
    cursor = document.getElementById("cursor");

    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px");
    });

    cursor2 = document.getElementById("cursor2");
    document.body.addEventListener("mousemove", function (e) {
      (cursor2.style.left = e.clientX + "px"),
        (cursor2.style.top = e.clientY + "px");
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
