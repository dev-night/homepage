import Head from "next/head";
import "../assets/stylus/main.styl";

export default () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={require("../assets/ico/apple-touch-icon.png")}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={require("../assets/ico/favicon-32x32.png")}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={require("../assets/ico/favicon-16x16.png")}
    />
    <link
      rel="mask-icon"
      href={require("../assets/ico/safari-pinned-tab.svg")}
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <link
      rel="shortcut icon"
      href={require("../assets/ico/favicon.ico")}
      type="image/x-icon"
    />
    <link
      rel="icon"
      href={require("../assets/ico/favicon.ico")}
      type="image/x-icon"
    />

    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,300i,600"
      rel="stylesheet"
    />
  </Head>
);
