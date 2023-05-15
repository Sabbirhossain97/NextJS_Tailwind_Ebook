import '../styles.css'
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bangla Ebook</title>
        <link rel="shortcut icon" href="/book.svg"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}