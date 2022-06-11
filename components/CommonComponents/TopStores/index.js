import React from "react";
import Avatar from "@mui/material/Avatar";
import Skeleton from "react-loading-skeleton";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useRouter } from "next/router";
function TopStores({ storeUrl, storeName, username }) {
  const router = useRouter();

  const goToStore = () => {
    router.push(`/store/${username}`);
  };

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
