import Document, { Html, Head, Main, NextScript } from 'next/document';
import RootLayout from './layout'


class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <body>
            <RootLayout>
                <Main />
            </RootLayout>
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  