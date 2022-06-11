import React from "react";

import Post from "../components/CommonComponents/Post";

import StoreComingSoon from "../components/StoreComponents/StoreComingSoon";

function trial() {
  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <Post
        id="1"
        storeUrl="https://i.ibb.co/Bswp8RS/avi.jpg"
        storeName="Hi"
        storeLocation="New Delhi"
        postUrl="https://i.ibb.co/Bswp8RS/avi.jpg"
        price="122"
        size="Sm"
        caption="Oh Hi wowow ow oowow owdhw hui bcsha vd bhd a va cbh sihj i nd  vzbv hjvb djbk"
      />
      {/* <StoreComingSoon /> */}
    </div>
  );
}

export default trial;
