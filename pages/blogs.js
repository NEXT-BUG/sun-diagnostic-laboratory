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
      <div>
        <h1>Sun diagnostics laboratory</h1>
      </div>
    </div>
  );
};

export default Blogs;
