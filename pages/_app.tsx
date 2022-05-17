import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import { wrapper } from "../store/configureStore";

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
      <Head>
        <title>Bold Store</title>

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.ibb.co/2ZB8GSG/LogoFull.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="The World's First One Click Marketplace! We convert Instagram Posts to Products your customers can buy!"
        />
        <link rel="icon" href="https://i.ibb.co/Ct1jrgj/Logo2.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="canonical" href="https://boldstore.in/" />
        <meta
          name="keywords"
          content="Bold Store, Avi Vashishta, Jayesh Sadhwani, Bold , Thrift Store, Boldstore , Bold.in, Thrifting india"
        />
        <meta name="author" content="Bold Store" />

        <meta
          name="twitter:card"
          content="https://i.ibb.co/Ct1jrgj/Logo2.png"
        />
        <meta name="twitter:site" content="https://boldstore.in/" />
        <meta name="twitter:title" content="Bold Store" />
        <meta
          name="twitter:description"
          content="The World's First One Click Marketplace! We convert Instagram Posts to Products your customers can buy!"
        />
        <meta
          name="twitter:image:src"
          content="https://i.ibb.co/Ct1jrgj/Logo2.png"
        />
        <meta name="twitter:image:alt" content="Bold Store" />

        <meta property="og:url" content="https://boldstore.in/" />
        <meta property="og:type" content="Thrift Store" />
        <meta property="og:title" content="Bold Store" />
        <meta
          property="og:image"
          content="https://i.ibb.co/Ct1jrgj/Logo2.png"
        />
        <meta
          property="og:description"
          content="The World's First One Click Marketplace! We convert Instagram Posts to Products your customers can buy!"
        />
        <meta property="og:site_name" content="Bold Store" />

        <meta itemProp="name" content="Bold Store" />
        <meta
          itemProp="description"
          content="The World's First One Click Marketplace! We convert Instagram Posts to Products your customers can buy!"
        />
        <meta itemProp="image" content="https://i.ibb.co/Ct1jrgj/Logo2.png" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <div className="cursor2" id="cursor2"></div>
      <div className="cursor" id="cursor"></div>

      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
