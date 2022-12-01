import Image from "next/image";
import React from "react";
import { SlMouse } from "react-icons/sl";
const Hero = () => {
  return (
    <div className="h-full w-screen hero-bg bg-black">
      <div className="pb-10 w-2/3 mx-auto space-y-10 flex flex-col items-center lg:items-start">
        <p className="text-primary text-center lg:text-left text-sm font-semibold pt-5">
          The Solar for Cure
        </p>
        <h1 className="text-white text-center lg:text-left text-5xl md:text-7xl font-bold">
          Sun Diagnostic <br /> Laboratory
        </h1>
        <p className="text-white text-xl w-2/3 font-light font-ubuntu">
          You can take most things for granted in life and get away with it.
          Your health is not one of them. We often tend to forget the brevity of
          life, due to the myriad distractions that surround us in the modern
          world. This is a reality
        </p>
        <button className="border text-xl font-bold md:hover:bg-primary md:hover:text-black md:hover:border-black md:hover:scale-90 duration-150 ease-out border-primary text-white py-4 px-6">
          View More
        </button>
      </div>
      <SlMouse className="text-primary h-10 w-full hidden lg:block pb-4 animate-pulse" />
    </div>
  );
};

export default Hero;
