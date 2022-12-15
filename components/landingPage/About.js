import Image from "next/image";
import React from "react";
import { SlMouse } from "react-icons/sl";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-black w-screen h-full relative pt-10">
      <div className="w-[80%] mx-auto space-y-5 flex flex-col items-center lg:items-start">
        <div className="flex items-center space-x-5 w-full text-center justify-center lg:justify-start">
          <div className="w-[40%] lg:w-[8%] h-1 bg-black rounded-md" />
          <p className="text-white font-bold text-2xl">About us</p>
          <div className="w-[40%] lg:hidden h-1 bg-black rounded-md" />
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row justify-center items-center space-y-5 lg:space-y-0 lg:items-stretch lg:space-x-10 mt-20">
        <div className="card-zoom md:w-96 h-[35rem] w-[20rem] lg:h-auto border-2 border-primary">
          <Image
            alt=""
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
        <div className="flex flex-col md:items-stretch items-center justify-between space-y-5 w-[20rem] lg:w-[35rem]">
          <div className="border-2 border-primary md:w-full w-[20rem] card-zoom  h-64">
            <Image
              alt=""
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
          <div className="card-zoom border-2 w-[20rem] md:w-full border-primary h-64">
            <Image
              alt=""
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
      <div className="text-white mt-5 flex flex-col lg:flex-row items-center text-center lg:text-left space-y-5 lg:space-y-0 justify-evenly p-10">
        <div className="border-2 lg:border-0 border-primary p-5 lg:p-0 rounded-sm lg:rounded-none space-y-5 w-64">
          <h2 className="text-xl font-bold">Who we are</h2>
          <p className="text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="lg:h-20 rounded-sm bg-primary w-1" />
        <div className="border-2 lg:border-0 border-primary p-5 lg:p-0 rounded-sm lg:rounded-none space-y-5 w-64">
          <h2 className="text-xl font-bold">Our Vision</h2>
          <p className="text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="rounded-sm lg:h-20 bg-primary w-1" />
        <div className="border-2 lg:border-0 border-primary p-5 lg:p-0 rounded-sm lg:rounded-none space-y-5 w-64">
          <h2 className="text-xl font-bold">How we work</h2>
          <p className="text-sm font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
      <SlMouse className="text-primary h-10 w-full hidden lg:block pb-4 animate-pulse" />
    </div>
  );
};

export default About;
