import React from "react";
import Avatar from "@mui/material/Avatar";

function TopStores({ storeUrl, storeName }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: "1.5rem",
      }}
    >
      <Avatar
        alt="Avatar"
        src={"https://i.ibb.co/myvq6GR/aryan.jpg"}
        sx={{
          width: 75,
          height: 75,
          cursor: "pointer",
          border: "1.5px solid var(--darkGrey)",
        }}
      />
      <p
        style={{
          color: "var(--lightGrey)",
          marginTop: "0.4rem",
          fontSize: "0.8rem",
        }}
      >
        Aryan
      </p>
    </div>
  );
}

export default TopStores;
