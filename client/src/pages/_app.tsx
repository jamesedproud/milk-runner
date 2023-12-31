import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Signika } from "next/font/google";

const signika = Signika({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Milk Runner</title>
        <meta name="description" content="Fresh Milk From Home to Farm" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={signika.className}>
        <div className="container flex items-start">
          <div className="min-h-screen flex-grow">
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </>
  );
}
