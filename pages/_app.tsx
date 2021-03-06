import type { AppProps } from 'next/app'
import Head  from 'next/head'
import '../styles/App.scss'

/**
 * @description this is a custom component that every page uses. Add common things here.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
   
  return (
   <>
      <Head>
         <title>Shroom Finder</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
   </>
  )
}