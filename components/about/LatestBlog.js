import Image from "next/image";
import React from "react";
import { blogs } from "../../mock/blogs";

const LatestBlog = () => {
  return (
    <div className="w-screen min-h-screen font-ubuntu">
      <div className="p-20 text-center space-y-5">
        <h1 className="text-secondary font-bold text-4xl">
          Our latest blog posts
        </h1>
        <p className="lg:w-2/3 mx-auto">
          These are the ideals that we, as a company always strive to work
          towards. They provide us with guidance and inspiration both during
          good and bad times.
        </p>
      </div>
      <div className="flex flex-col mb-10 lg:flex-row space-y-5 lg:space-y-0 items-center justify-evenly">
        {blogs?.map((blog, index) => {
          if (index < 3) return <BlogCard {...blog} />;
        })}
      </div>
    </div>
  );
};

export default LatestBlog;

const BlogCard = ({ image, title, desc }) => {
  return (
    <div className="p-2 bg-white shadow-lg w-96 rounded-md">
      <Image className="object-fit object-center h-64 rounded-sm" src={image} />
      <div className="p-5">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="">
          vsmbfmdf ,n ,dsa,jnfljnaldfnfjasbdf,na dgfkjabgjfbv
          agfbkfjangbljnfaljgnjlfn as afgkfabgkjasngjljflabglnvs fgfdsg
        </p>
      </div>
      <div className="flex justify-between p-5">
        <p className="text-gray-400 font-bold">Date</p>
        <button className="text-black font-bold md:hover:scale-105 ease-out duration-200 md:hover:text-blue-500 md:hover:tracking-wider">
          Read More
        </button>
      </div>
    </div>
  );
};
