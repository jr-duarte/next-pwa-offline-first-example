import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next PWA Offline First Example</title>
        <link rel="icon" href="/icon.png" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="theme-color" href="#FEDD00" />
      </Head>
      <Component {...pageProps} />{' '}
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
export default MyApp;
