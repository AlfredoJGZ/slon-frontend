import "@/styles/global.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import ThemeContainer from "@/components/styled/ThemeContainer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap');
        </style>
      </Head>
      <ThemeContainer>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContainer>
    </>
  );
}
