import Image from "next/image";
import React from "react";

const Hero = ({ title, description, catalogRef }) => {
  return (
    <div>
      <div className="w-100/10 mx-auto relative   bg-[#00afa0] h-1 rounded-lg" />
      <div className="w-screen h-full flex flex-col py-32">
      <div className="flex space-y-10 md:space-y-0 w-2/3 mx-auto flex-col-reverse py-20 md:py-0 md:flex-row items-center justify-between md:space-x-10">
        <div className="space-y-10 text-center md:text-left">
          <p className="text-primary font-bold">The Solar For Cure</p>
          <h1 className="md:w-2/3 text-black text-3xl md:text-5xl font-bold">
            {title || "Sun Diagnostic Laboratory"}
          </h1>
          <p className="text-md text-gray-600">
            {description || (
              <span>
                You can take most things for granted in life and get away with
                it. Your health is not one of them. We often tend to forget the
                brevity of life, due to the myriad distractions that surround us
                in the modern world. <br /> <br /> This is a reality
              </span>
            )}
          </p>
          <button
            onClick={() =>
              catalogRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="border px-5 py-2 md:hover:shadow-2xl md:active:scale-95 border-primary md:hover:bg-black md:hover:text-white md:hover:border-0 md:hover:scale-105 shadow-sm ease-out duration-150 text-primary font-bold"
          >
            View More
          </button>
        </div>
        <Image
          alt=""
          className="w-96 h-96"
          src={require("../../assets/images/hero-img-2.png")}
        />
      </div>
      </div>
    </div>
  );
};

export default Hero;
