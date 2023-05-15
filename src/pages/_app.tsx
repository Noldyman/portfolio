import "@/styles/global.scss";
import "@/styles/profile.scss";
import "@/styles/portfolio.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "@/components/navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Noud Verstijnen</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div className="content">
        <Component {...pageProps} />
      </div>
    </>
  );
}
