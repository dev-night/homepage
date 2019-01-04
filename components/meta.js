import Head from "next/head";
import "../assets/stylus/main.styl";

export default () => (
  <div className="hack">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,300i,600"
        rel="stylesheet"
      />
    </Head>
  </div>
);
