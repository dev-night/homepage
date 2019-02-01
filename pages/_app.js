import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import App, { Container } from "next/app";
import Header from "../components/header";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div className="main" style={{ marginBottom: 20 }}>
          <Header />
          <div className="container">
            <Nav />
            <Component {...pageProps} />
          </div>
        </div>
      </Container>
    );
  }
}
