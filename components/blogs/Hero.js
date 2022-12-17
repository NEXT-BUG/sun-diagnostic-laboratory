import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg h-[30rem] bg-black w-screen hidden lg:block lg:mb-64">
      <div className="relative px-20 py-10 h-full w-fit mx-auto">
        <Image
          alt=""
          src={require("../../assets/images/blogs-hero.png")}
          className="rounded-lg shadow-md"
        />
        <h1 className="absolute font-ubuntu top-20 left-32 text-7xl italic font-bold text-[#394B57]">
          Blogs
        </h1>
      </div>
    </div>
  );
};

export default Hero;
