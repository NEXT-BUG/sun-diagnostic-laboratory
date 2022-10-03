import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Menu from "../components/Menu";

const Home: NextPage = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="scroll-smooth">
      <Head>
        <title>SDL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu setMenu={setMenu} menu={menu} />
      <Header setMenu={setMenu} menu={menu} />
      <img src="./assets/hero-bg.svg" className="w-screen" />
      <Border />
      <About />
    </div>
  );
};

const Border = () => {
  return (
    <div className="flex w-1/2 mx-auto my-5 lg:my-10">
      <div
        className="inline w-[30%] bg-[#394B57] rounded-l-lg"
        style={{ border: "3.5px solid #394B57" }}
      />
      <div
        className="inline w-[70%] bg-[#00DCC9] rounded-r-lg"
        style={{ border: "3.5px solid #00DCC9" }}
      />
    </div>
  );
};

export default Home;
