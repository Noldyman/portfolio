import Menu from "@/components/menu";
import "@/styles/global.scss";
import "@/styles/profile.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Noud Verstijnen</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Menu />
      <div className="content">
        <Component {...pageProps} />
      </div>
    </>
  );
}
