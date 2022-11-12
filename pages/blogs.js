import Head from "next/head";
import Image from "next/image";
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="border-2 px-4 py-2 rounded-full border-black font-bold">
          Let's chat
        </button>
      </div>
      <div className="flex gap-10 flex-wrap justify-evenly my-10 px-20">
        {blogs?.map((blog, index) => (
          <BlogCards {...blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

const BlogCards = ({ title, image }) => {
  return (
    <div className="border-2 md:hover:scale-110 duration-200 ease-out md:cursor-pointer rounded-lg">
      <div className="relative w-full h-full">
        <Image
          src={image}
          className="object-cover w-72 h-72 rounded-md shadow-2xl"
        />
        <p className="absolute rounded-b-md bottom-0 text-xl w-full text-center bg-white px-4 py-2 font-bold">
          {title}
        </p>
      </div>
    </div>
  );
};
