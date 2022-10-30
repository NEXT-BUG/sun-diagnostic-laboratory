import Image from "next/image";
import React from "react";
import { SlMouse } from "react-icons/sl";
const Hero = () => {
  return (
    <div className="h-full w-screen hero-bg">
      <div className="w-2/3 mx-auto space-y-10 flex flex-col items-center lg:items-start">
        <p className="text-primary text-center lg:text-left text-sm font-semibold pt-5">
          The Solar for Cure
        </p>
        <h1 className="text-white text-center lg:text-left text-7xl font-bold">
          Sun Diagnostic <br /> Laboratory
        </h1>
        <button className="border border-primary text-white py-4 px-6">
          View More
        </button>
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-center w-full items-center lg:items-stretch lg:justify-between">
          <Cards
            title="Diagnostic Services"
            image="hero-card-1.png"
            description="To provide quality and reliable Laboratory Service at an afforadble cost  "
          />
          <Cards
            title="Health Packages"
            image="hero-card-2.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <Cards
            title="Highly Accurate Reports"
            image="hero-card-3.png"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
        </div>
      </div>
      <SlMouse className="text-primary h-10 mt-10 pb-4 w-full hidden lg:block  animate-pulse" />
    </div>
  );
};

export default Hero;

const Cards = ({ title, image, description }) => {
  return (
    <div className="bg-[#313131] w-64 p-5 space-y-3 rounded-sm border border-primary shadow-xl">
      <div className="w-10 h-10">
        <Image src={require(`../../assets/images/${image}`)} alt="" />
      </div>
      <p className="text-white font-bold text-lg">{title}</p>
      <div className="w-[30%] h-1 bg-primary rounded-md" />
      <p className="text-white text-sm">{description}</p>
    </div>
  );
};
