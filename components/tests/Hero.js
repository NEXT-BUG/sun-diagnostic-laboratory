import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="flex w-2/3 mx-auto items-center justify-between space-x-10">
        <div className="space-y-10">
          <p className="text-primary font-bold">The Solar For Cure</p>
          <h1 className="w-2/3 text-black text-5xl font-bold">
            Sun Diagnostic Laboratory
          </h1>
          <p className="text-md text-gray-600">
            You can take most things for granted in life and get away with it.
            Your health is not one of them. We often tend to forget the brevity
            of life, due to the myriad distractions that surround us in the
            modern world. <br /> <br /> This is a reality
          </p>
          <button className="border px-5 py-2 md:hover:shadow-2xl md:active:scale-95 border-primary md:hover:bg-black md:hover:text-white md:hover:border-0 md:hover:scale-105 shadow-sm ease-out duration-150 text-primary font-bold">
            View More
          </button>
        </div>
        <Image
          className="w-full h-full"
          src={require("../../assets/images/hero-img-2.png")}
        />
      </div>
    </div>
  );
};

export default Hero;
