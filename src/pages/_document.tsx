import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Lexend:wght@100;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
          <link rel="icon" href="/favicon.png" type="image.png"></link>         
        </Head>
            <body>
              <title>Podcastr</title>
              <Main />
              <NextScript />
            </body>
      </Html>
    )
  }
}