import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Avatar from "@mui/material/Avatar";
import DrawerComponent from "./DrawerComponent";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import {
  Home,
  User,
  Search,
  ShoppingBag,
  LogOut,
  LogIn,
  Tool,
} from "react-feather";
import CustomerTabs from "../Tabs";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import ToolTip from "../../CommonComponents/ToolTip/ToolTip";
import { Drawer } from "@mui/material";
import DrawerList from "./DrawerList";
import clsx from "clsx";

const useStyles = makeStyles({
  list: {
    width: 300,
    backgroundColor: "var(--white)",
    color: "var(--black)",
    height: "100%",
    fontWeight: "500 !important",
  },
  fullList: {
    width: "auto",
    backgroundColor: "var(--white)",
    color: "var(--black)",
    fontWeight: "500 !important",
  },
});

function CustomerHeader() {
  const router = useRouter();
  const profile = useSelector((state) => state.profile);
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const [user] = useAuthState(auth);
  const [state, setState] = React.useState({
    left: false,
  });

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "var(--black)" }}
    >
      <DrawerList />
    </div>
  );

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
    window.location.replace("/home");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
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
            <ToolTip title="Home" href="/home">
              <Home className={styles.navLinks} />
            </ToolTip>

            <ToolTip title="Search" href="/search">
              <Search className={styles.navLinks} />
            </ToolTip>

            <ToolTip title="Bag" href="/bag">
              <ShoppingBag className={styles.navLinks} />
            </ToolTip>

            {user && !user?.isAnonymous ? (
              <ToolTip title="Log Out">
                <LogOut onClick={logout} className={styles.navLinks} />
              </ToolTip>
            ) : (
              <ToolTip title="Log In">
                <LogIn onClick={login} className={styles.navLinks} />
              </ToolTip>
            )}
          </div>

          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <div onClick={toggleDrawer(anchor, true)}>
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
                  <User />
                )}
              </div>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

          {/* <Link href={user && !user?.isAnonymous ? "/profile" : "/login"}>
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
          </Link> */}
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
