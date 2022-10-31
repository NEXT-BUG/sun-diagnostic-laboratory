import Head from "next/head";
import About from "../components/landingPage/About";
import Banner from "../components/landingPage/Banner";
import Hero from "../components/landingPage/Hero";
import Services from "../components/landingPage/Services";
import Testimonials from "../components/landingPage/Testimonials";

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
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;
