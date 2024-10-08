/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import { wrapper } from "../store/configureStore";
import NextNProgress from "nextjs-progressbar";
import { auth } from "../firebaseConfig";
import { removeCookies, setCookies } from "cookies-next";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, linkUser } from "../store/actions/profile";
import Loading from "../components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouteGuard from "../components/RouteGuard";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInAnonymously } from "firebase/auth";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [currentUser, loading] = useAuthState(auth);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        if (!user.isAnonymous) {
          dispatch(linkUser(user.uid));
          removeCookies("anonymousToken");
        }
        const token = await user.getIdToken();
        setCookies("token", token);
        if (user.isAnonymous) {
          setCookies("anonymousToken", token);
        }

        if (!profile.isLoading) dispatch(getProfile());
      } else {
        removeCookies("token");
      }
    });
  }, []);

  useEffect(() => {
    if (!loading && !currentUser) {
      signInAnonymously(auth);
    }
  }, [currentUser, loading]);

  if (profile?.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <SkeletonTheme baseColor="#1c1c1d" highlightColor="rgb(42,42,42)">
        <ToastContainer autoClose={false} />
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
        <div className="drag" id="drag">
          Drag
        </div>

        <NextNProgress color="#e3e3e3" height={2} />

        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </SkeletonTheme>
    </>
  );
}

export default wrapper.withRedux(MyApp);
