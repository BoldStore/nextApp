import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Skeleton from "react-loading-skeleton";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useRouter } from "next/router";
function TopStores({ storeUrl, storeName, username }) {
  const router = useRouter();

  const goToStore = () => {
    router.push(`/store/${username}`);
  };

  const [activeTheme, setActiveTheme] = useState("");
  const inactiveTheme = activeTheme === "dark" ? "light" : "dark";
  const [svgMode, setSvgMode] = useState("dark");

  useEffect(() => {
    if (activeTheme) {
      document.body.dataset.theme = activeTheme;
      window.localStorage.setItem("theme", activeTheme);
      setSvgMode(activeTheme);
    }
  }, [activeTheme]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: "1.5rem",
      }}
      onClick={goToStore}
    >
      {storeUrl ? (
        <Avatar
          src={storeUrl}
          sx={{
            width: 75,
            height: 75,
            cursor: "pointer",
            border: "1.5px solid var(--darkGrey)",
          }}
        />
      ) : (
        <Skeleton circle={true} height={75} width={75} />
      )}
      {username ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "var(--lightGrey)",
              marginTop: "0.65rem",
              fontSize: "0.8rem",
            }}
          >
            {username}
          </p>
          <p>
            <VerifiedIcon
              style={{
                marginLeft: "0.3rem",
                fontSize: "1rem",
                color: "#1DA1F2",
              }}
            />
            {/* <Avatar
              src={`/assets/VerifiedIcon/${svgMode}.svg`}
              alt="verified"
              sx={{
                width: 10,
                height: 10,
              }}
              style={{
                marginLeft: "0.2rem",
              }}
            /> */}
          </p>
        </div>
      ) : (
        <Skeleton
          count={1}
          width={75}
          height={10}
          style={{ marginTop: "0.5rem" }}
        />
      )}
    </div>
  );
}

export default TopStores;
