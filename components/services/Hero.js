import React from "react";
import { SlMouse } from "react-icons/sl";
const Hero = ({ viewMoreRef }) => {
  return (
    <div className="h-full w-screen hero-bg bg-black">
      <div className="pb-10 w-2/3 mx-auto space-y-10 flex flex-col items-center lg:items-start">
        <p className="text-primary text-center lg:text-left text-sm font-semibold pt-5">
          The Solar for Cure
        </p>
        <h1 className="text-white text-center lg:text-left text-5xl md:text-7xl font-bold">
          Sun Diagnostic <br /> Laboratory
        </h1>
        <p className="text-white text-xl text-center lg:text-left lg:w-2/3 font-light font-ubuntu">
          Sun Diagnostic Laboratory is a state-of-the-art, fully automated
          Clinical Laboratory and diagnostic solution provider operating under
          the clinical oversight of Experienced Consultants. Sun Diagnostic lab
          represents a new paradigm for pathology services. Sun Diagnostic
          Laboratory delivers service of unrivaled quality and accuracy.
        </p>
        <button
          onClick={() =>
            viewMoreRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="border text-xl font-bold md:hover:rounded-full md:active:scale-75 md:hover:bg-primary md:hover:text-black md:hover:border-black md:hover:scale-105 duration-200 ease-out border-primary text-white py-4 px-6"
        >
          View More
        </button>
      </div>
      <SlMouse className="text-primary h-10 w-full hidden lg:block pb-4 animate-pulse" />
    </div>
  );
};

export default Hero;
