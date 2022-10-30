import Head from "next/head";
import Banner from "../components/landingPage/Banner";
import Hero from "../components/landingPage/Hero";
import Services from "../components/landingPage/Services";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Sun Diagnostic Laboratory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      <Banner />
    </div>
  );
};

export default Home;
