import Head from "next/head";
import Hero from "../components/landingPage/Hero";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Sun Diagnostic Laboratory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  );
};

export default Home;
