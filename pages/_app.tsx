import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: any) {
  var cursor: any;
  var cursor2: any;

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

    document.addEventListener("mousedown", function (e) {
      (cursor.style.height = "50px"), (cursor.style.width = "50px");
    });
    document.addEventListener("mouseup", function (e) {
      (cursor.style.height = "35px"), (cursor.style.width = "35px");
    });
  }, []);

  return (
    <>
      <div className="cursor2" id="cursor2"></div>
      <div className="cursor" id="cursor"></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
