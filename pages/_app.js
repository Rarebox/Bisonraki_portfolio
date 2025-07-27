// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";
import portfolioData from "../data/portfolio-data";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{portfolioData.profile.name} </title>
        <meta
          name="description"
          content={`${portfolioData.profile.name} is a Blockchain Developer and Trainer, he is a passionate developer and trainer.`}
        />
        <link rel="shortcut icon" href={`/icon.gif`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
