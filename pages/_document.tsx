import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,300italic,400,400italic,700,900&display=optional"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
