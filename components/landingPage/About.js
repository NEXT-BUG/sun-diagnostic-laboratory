import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-black w-screen h-full pb-10 lg:pb-32 relative pt-10">
      <div className="w-[80%] mx-auto space-y-5 flex flex-col items-center lg:items-start">
        <div className="flex items-center space-x-5 w-full text-center justify-center lg:justify-start">
          <div className="w-[40%] lg:w-[8%] h-1 bg-primary rounded-md" />
          <p className="text-white font-bold text-2xl">About us</p>
          <div className="w-[40%] lg:hidden h-1 bg-primary rounded-md" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-y-0 lg:items-stretch lg:space-x-10 mt-20">
        <div className="card-zoom w-96 h-[35rem] lg:h-auto border-2 border-primary">
          <Image
            className="card-zoom-image"
            src={require("../../assets/images/precision.png")}
          />
          <h1 className="text-shadow-sm card-zoom-text text-gray-200 font-bold text-2xl bottom-10">
            Precision
          </h1>
          <p className="text-shadow-sm card-zoom-text text-gray-200 font-semibold text-lg bottom-4">
            Committed and Creative
          </p>
        </div>
        <div className="flex flex-col items-stretch justify-between space-y-5 w-96 lg:w-[35rem]">
          <div className="border-2 border-primary card-zoom h-64">
            <Image
              className="card-zoom-image"
              src={require("../../assets/images/excellence.png")}
            />
            <h1 className="card-zoom-text text-shadow-sm card-zoom-text text-gray-200 font-bold text-2xl bottom-10">
              Excellence
            </h1>
            <p className="card-zoom-text text-shadow-sm card-zoom-text text-gray-200 font-semibold text-lg bottom-4">
              Trust Pays Off
            </p>
          </div>
          <div className="card-zoom border-2 border-primary h-64">
            <Image
              className="card-zoom-image"
              src={require("../../assets/images/accuracy.png")}
            />
            <h1 className="card-zoom-text text-shadow-sm card-zoom-text text-gray-200 font-bold text-2xl bottom-10">
              Accuracy
            </h1>
            <p className="card-zoom-text text-shadow-sm card-zoom-text text-gray-200 font-semibold text-lg bottom-4">
              Somewhere on earth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
