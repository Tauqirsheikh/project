import ThemeProvider from '@/theme'
import Head from 'next/head';

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>
          Project Page
        </title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
