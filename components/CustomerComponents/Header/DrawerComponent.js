import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MobileViewList from "./MobileViewList";
import styles from "./styles.module.css";

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

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "var(--black)" }}
    >
      <MobileViewList />
    </div>
  );

  return (
    <div className={styles.menu}>
      <h2>BOLD.</h2>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div onClick={toggleDrawer(anchor, true)}>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                marginBottom: "-0.3rem",
              }}
            >
              <path
                d="M4 8H20M4 16H20"
                stroke="var(--white)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
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
    </div>
  );
}
