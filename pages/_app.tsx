import "@/styles/global.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import ThemeContainer from "@/components/styled/ThemeContainer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContainer>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContainer>
  );
}
