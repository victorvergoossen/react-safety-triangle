import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link href="../static/apple-touch-icon.png" rel="apple-touch-icon" sizes="144x144" />
          <link href="../static/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="../static/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="../static/site.webmanifest" rel="manifest" />
          <meta content="#da532c" name="msapplication-TileColor" />
          <meta content="#ffffff" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
