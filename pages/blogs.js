import Head from "next/head";
import React from "react";
import Hero from "../components/blogs/Hero";

const Blogs = () => {
  return (
    <div className="">
      <Head>
        <title>SDL | Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <div className="text-center w-2/3 mx-auto space-y-5">
        <h1 className="font-bold text-4xl uppercase">
          Sun diagnostics laboratory
        </h1>
        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="border-2 px-4 py-2 rounded-full border-black font-bold">
          Let's chat
        </button>
      </div>
    </div>
  );
};

export default Blogs;
