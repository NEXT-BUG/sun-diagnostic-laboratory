import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-screen p-10 lg:p-0 rounded-lg shadow-xl h-screen banner flex justify-center items-center lg:block">
      <Image
        alt=""
        src={require("../../assets/images/banner-text.png")}
        className="lg:h-full h-[70%] m-auto lg:m-0 bg-white/50 lg:bg-transparent object-cover object-left-top lg:object-bottom"
      />
    </div>
  );
};

export default Banner;
