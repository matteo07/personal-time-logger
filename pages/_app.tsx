import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { GlobalStyle } from "../components/GlobalStyled";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Personal Time Logger</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>)
}

export default MyApp
