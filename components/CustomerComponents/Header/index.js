import Link from "next/link";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import DrawerComponent from "./DrawerComponent";
import { useEffect, useState } from "react";
import { Home, User, Search, ShoppingBag, LogOut, LogIn } from "react-feather";
import CustomerTabs from "../Tabs";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

function CustomerHeader() {
  const router = useRouter();
  const profile = useSelector((state) => state.profile);
  const [open, setOpen] = useState(true);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!(typeof window === "undefined")) {
      if (window.innerWidth < 800) {
        setOpen(false);
      }
    }
  }, []);

  if (!(typeof window === "undefined")) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }

  const logout = async () => {
    localStorage.removeItem("token");
    await signOut(auth);
    window.location.reload();
  };

  const login = () => {
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <Link href="/home">
        <h1 className={styles.logo}>
          BOLD
          <span style={{ fontFamily: "Inter", fontSize: "1.5rem" }}>.</span>
        </h1>
      </Link>
      {open && (
        <>
          <div className={styles.leftContainer}>
            <Link href="/home">
              <Home className={styles.navLinks} />
            </Link>
            <Link href="/search">
              <Search className={styles.navLinks} />
            </Link>
            <Link href="/bag">
              <ShoppingBag className={styles.navLinks} />
            </Link>
            {user ? (
              <LogOut onClick={logout} className={styles.navLinks} />
            ) : (
              <LogIn onClick={login} className={styles.navLinks} />
            )}
          </div>

          <Link href={user ? "/profile" : "/login"}>
            {profile.profile_pic ? (
              <Avatar
                alt="Avatar"
                src={profile.profile_pic}
                sx={{
                  width: 50,
                  height: 50,
                  cursor: "pointer",
                  marginLeft: "2.5rem",
                }}
              />
            ) : (
              <User
                style={{
                  width: 55,
                  height: 55,
                  padding: "0.75rem",
                  border: "2px solid var(--lightGrey)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  marginLeft: "2.5rem",
                  color: "var(--lightGrey)",
                }}
              />
            )}
          </Link>
        </>
      )}
      {!open && (
        <>
          <DrawerComponent />
          <CustomerTabs />
        </>
      )}
    </div>
  );
}

export default CustomerHeader;
