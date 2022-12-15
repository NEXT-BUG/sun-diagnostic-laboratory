import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col h-full lg:flex-row text-center lg:text-left items-center w-2/3 mx-auto space-x-10 justify-between mt-20">
      <Image alt="" src={require("../../assets/images/hero-img-2.png")} />
      <div className="flex flex-col lg:w-2/3 space-y-5 mb-20">
        <h1 className="font-bold text-4xl font-ubuntu">
          Sun Diagnostics Laboratory
        </h1>
        <p className="font-ubuntu">
          You can take most things for granted in life and get away with it.
          Your health is not one of them. We often tend to forget the brevity of
          life, due to the myriad distractions that surround us in the modern
          world. This is a reality
        </p>
        <div className="flex space-x-4">
          <button className="md:hover:scale-105 md:hover:bg-slate-100 duration-300 ease-out font-semibold px-8 bg-[#F4F4F4] py-3 rounded-full border">
            Services
          </button>
          <button className="md:hover:scale-105 md:hover:bg-slate-100 duration-300 ease-out font-semibold px-8 bg-[#F4F4F4] py-3 rounded-full border">
            Facilities
          </button>
        </div>
        <div className="h-[0.1rem] w-full bg-primary rounded-full" />

        <p className="text-md font-ubuntu">
          Have any questions? <br /> Contact us!
        </p>
        <p className="font-bold text-xl">+9967438493</p>
      </div>
    </div>
  );
};

export default Hero;
