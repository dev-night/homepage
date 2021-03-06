import Head from "next/head";
// import "../assets/stylus/main.styl";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "react-image-gallery/styles/css/image-gallery.css";
import 'react-accessible-accordion/dist/fancy-example.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// NOTE this example only shows how to use the solid free icons.
import {
  faCheckSquare,
  faScrewdriver,
  faUser,
  faIgloo
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faScrewdriver, faUser, faIgloo);

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


    <script
        type='text/javascript'
        data-embed_id='ls_embed_1539691978'
        src='https://livestream.com/assets/plugins/referrer_tracking.js'>
    </script>
  </Head>
);
