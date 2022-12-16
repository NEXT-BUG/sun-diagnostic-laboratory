import Image from "next/image";
import React from "react";
import { blogs } from "../../mock/blogs";
import BlogsCard from "../BlogsCard";

const LatestBlog = () => {
  return (
    <div className="w-screen min-h-screen font-ubuntu">
      <div className="p-10 lg:p-20 text-center space-y-5">
        <h1 className="text-secondary font-bold text-4xl">
          Our latest blog posts
        </h1>
        <p className="lg:w-2/3 mx-auto">
          These are the ideals that we, as a company always strive to work
          towards. They provide us with guidance and inspiration both during
          good and bad times.
        </p>
      </div>
      <div className="flex flex-col p-5 mb-10 lg:flex-row space-y-5 lg:space-y-0 items-center justify-evenly">
        {blogs?.map((blog, index) => {
          if (index < 3) return <BlogsCard key={index} {...blog} />;
        })}
      </div>
    </div>
  );
};

export default LatestBlog;
