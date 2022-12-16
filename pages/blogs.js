import Head from "next/head";
import BlogsCard from "../components/BlogsCard";
import React from "react";
import Hero from "../components/blogs/Hero";

import { blogs } from "../mock/blogs";

const Blogs = () => {
  return (
    <div className="">
      <Head>
        <title>SDL | Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <div className="text-center w-2/3 mx-auto space-y-5 pt-10 lg:py-0">
        <h1 className="font-bold font-ubuntu text-4xl">
          Sun Diagnostics Laboratory
        </h1>
        <p className="text-md font-ubuntu">
          We’re excited to announce our new blog, where you can find all the
          latest news and tips about diagnostics!
        </p>
      </div>
      <div className="flex gap-10 flex-wrap justify-evenly my-10 px-20">
        {blogs?.map((blog, index) => (
          <BlogsCard {...blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
