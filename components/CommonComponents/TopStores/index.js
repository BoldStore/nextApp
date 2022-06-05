import React from "react";
import Avatar from "@mui/material/Avatar";
import Skeleton from "react-loading-skeleton";

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
      {storeName ? (
        <p
          style={{
            color: "var(--lightGrey)",
            marginTop: "0.4rem",
            fontSize: "0.8rem",
          }}
        >
          {storeName ? storeName : "Name"}
        </p>
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
