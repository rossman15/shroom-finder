import { Html, Head, Main, NextScript } from "next/document";

/**
 * @description this is a custom element to render the document how we want.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Find Shrooms" />
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/pink-shroom.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
