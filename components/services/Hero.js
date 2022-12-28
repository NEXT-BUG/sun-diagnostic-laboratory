import React from "react";
import { SlMouse } from "react-icons/sl";
const Hero = ({ viewMoreRef }) => {
  return (
    <div className="h-full w-screen owl-bg bg-black">
      <div className="pb-10 w-2/3 mx-auto space-y-10 flex flex-col items-center lg:items-start">
        <p className="text-primary text-center lg:text-left text-sm font-semibold pt-5">
          The Solar for Cure
        </p>
        <h1 className="text-[#374957] text-center lg:text-left text-5xl md:text-7xl font-bold">
        Affordable Diagnostic <br />
            Services
        </h1>
        <p className="text-black text-xl text-center lg:text-left lg:w-2/3 font-light font-ubuntu">
        You shouldn't have to compromise on your health or the quality of
            your care. Our diagnostic services are affordable and can help you
            get back on track with your treatment plan.
            
        </p>
        <button
          onClick={() =>
            viewMoreRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="border text-xl font-bold md:hover:rounded-full md:active:scale-75 md:hover:bg-primary md:hover:text-[#374957] md:hover: md:hover:scale-105 duration-200 ease-out border-primary text-black py-4 px-6"
        >
          View More
        </button>
      </div>
      <SlMouse className="text-primary text-[#374957] h-10 w-full hidden lg:block pb-4 animate-pulse" />
    </div>
  );
};

export default Hero;
