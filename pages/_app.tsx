import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";
import "../styles/App.scss";

/**
 * @description this is a custom component that every page uses. Add common things here.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Head>
        <title>Shroom Finder</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
