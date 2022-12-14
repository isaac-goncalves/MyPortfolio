import Head from "next/head";
import React from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (

    <React.Fragment>
      <Head>
      <title>Portifólio  -  Isaac Gonçalves</title>
      </Head>
      <Component {...pageProps} />;
    </React.Fragment>
  )
}

export default MyApp;
