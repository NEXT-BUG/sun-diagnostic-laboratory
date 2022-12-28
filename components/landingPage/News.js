import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import BlogsCard from "../BlogsCard";
import { blogs } from "../../mock/blogs";

const News = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-white w-screen pb-10 h-full lg:h-screen text-black flex flex-col items-center space-y-4">
        <div className="lg:pb-5 pt-10">
          <h1 className="text-3xl text-black text-center font-bold ">
            Latest Blogs
          </h1>
          <p className="text-sm font-semibold text-center text-black">
            Check Out Some Of Our Blogs
          </p>
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-evenly w-screen">
          {blogs?.map((news, index) => (
            <BlogsCard key={index} {...news} />
          ))}
        </div>
      </div>
      <div className="w-screen h-32 lg:h-full space-y-5 text-black pb-10 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold animate-bounce">Contact Us</h1>
          <button
            onClick={() => router.push("/contact")}
            className="px-4 py-3 border border-primary rounded-md font-bold md:hover:scale-110 md:active:scale-75 duration-300 ease-out"
          >
            Make Enquiry
          </button>
        </div>
      </div>
    </>
  );
};

export default News;
