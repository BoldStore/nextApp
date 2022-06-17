import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";

export default function RouteGuard({ children }: any) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, router]);

  function authCheck(url: string | undefined) {
    // redirect to login page if accessing a private page and not logged in
    const path = url?.split("?")[0] ?? "";

    // For stores and products
    const dynamicParam = path.split("/")[2] ?? "";

    const unAuthPaths = ["/login", "/customer/signup", "/store/signup"];

    const publicPaths = [
      "/login",
      "/",
      "/home",
      "/search",
      "/customer/signup",
      "/store/signup",
      "/store/entercode",
      "/privacy-policy",

      `/store/${dynamicParam}`,
      `/product/${dynamicParam}`,
    ];

    if (!user && !publicPaths.includes(path ?? "")) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      if (user && unAuthPaths.includes(path ?? "")) {
        setAuthorized(false);
      } else {
        setAuthorized(true);
      }
    }
  }

  return authorized && children;
}
