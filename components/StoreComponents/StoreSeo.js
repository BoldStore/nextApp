import Head from "next/head";
import React from "react";

function StoreSeo({ store }) {
  return (
    <Head>
      <title
        style={{ textTransform: "uppercase" }}
      >{`${store?.full_name}`}</title>

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <link rel="icon" type="image/x-icon" href={`store.profile_pic`} />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content={`Store By @${store?.username} on Bold Store!`}
      />
      <link rel="icon" href="https://i.ibb.co/Ct1jrgj/Logo2.png" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <link
        rel="canonical"
        href={`https://boldstore.in/store/${store?.username}`}
      />
      <meta
        name="keywords"
        content={`Bold Store, Avi Vashishta, Jayesh Sadhwani, Bold , Thrift Store, Boldstore , Bold.in, Thrifting india , ${store?.username}`}
      />
      <meta name="author" content="Bold Store" />

      <meta name="twitter:card" content={store?.profile_pic} />
      <meta
        name="twitter:site"
        content={`https://boldstore.in/store/${store?.username}`}
      />
      <meta name="twitter:title" content="Bold Store" />
      <meta
        name="twitter:description"
        content={`Checkout this Store By @${store?.username} on Bold Store!`}
      />
      <meta name="twitter:image:src" content={store?.profile_pic} />
      <meta name="twitter:image:alt" content="Bold Store" />

      <meta
        property="og:url"
        content={`https://boldstore.in/store/${store?.username}`}
      />
      <meta property="og:type" content="Thrift Store" />
      <meta property="og:title" content="Bold Store" />
      <meta property="og:image" content={store?.profile_pic} />
      <meta
        property="og:description"
        content={`Checkout this Store By @${store?.username} on Bold Store!`}
      />
      <meta property="og:site_name" content="Bold Store" />

      <meta itemProp="name" content="Bold Store" />
      <meta
        itemProp="description"
        content={`Checkout this Store By @${store?.username} on Bold Store!`}
      />
      <meta itemProp="image" content={store?.profile_pic} />
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
    </Head>
  );
}

export default StoreSeo;
