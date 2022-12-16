import Head from "next/head";
import Image from "next/image";
import LatestBlog from "../components/about/LatestBlog";
import React, { useRef } from "react";
import Hero from "../components/about/Hero";
import Importance from "../components/about/Importance";

const About = () => {
  const aboutRef = useRef(null);
  return (
    <div className="w-screen min-h-screen">
      <Head>
        <title>SDL | About us</title>
      </Head>
      <Hero aboutRef={aboutRef} />
      <div ref={aboutRef} className="w-screen -z-10 bg-primary relative">
        <div className="absolute -z-10 h-[50%] w-screen bg-[#F4F4F4]" />
        <div className="p-10 lg:p-32 z-50">
          <div className="bg-white items-center justify-evenly gap-10 p-10 lg:p-20 flex lg:flex-row flex-col-reverse rounded-md shadow-2xl font-ubuntu">
            <div className="my-5">
              <p className="font-sm text-gray-500 ">Who we are</p>
              <h1 className="text-4xl font-bold">About us</h1>
              <p className="mt-5 text-sm md:text-md lg:text-xl">
                We understand this deeply, which is why we put the patient at
                the centre of our efforts. Precise, Accurate diagnosis means
                potentially helping mitigating catastrophe in the patient's
                lives and giving them more time to spend in the company of their
                loved ones. Our commitment to Excellence and Quality translates
                to the fact that, if we do our job well every single time, we
                would be achieving this valuable and worthwhile end which is
                worth all the struggle. We do not view ourselves as 'just
                another cog' in a large and chaotic machine of healthcare in the
                country.
              </p>
            </div>
            <Image
              alt=""
              className="rounded-sm"
              src={require("../assets/images/about-us-img.png")}
            />
          </div>
        </div>
      </div>
      <Importance />
      <LatestBlog />
      <div className="relative h-fit w-screen">
        <Image
          alt=""
          src={require("../assets/images/about-us-img-2.png")}
          className="relative h-96 lg:h-fit w-screen"
        />
        <div className="absolute font-ubuntu z-40 h-full top-0 w-full items-center flex">
          <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:items-stretch justify-evenly w-full">
            <div className="justify-center items-center space-y-3 flex flex-col w-80 lg:w-96 shadow-2xl rounded-sm bg-white p-7">
              <p className="text-4xl text-center font-bold">Vision</p>
              <div className="text-xs text-center flex flex-col items-start">
                <p>» We inspire to "Live Healthy”</p>
                <p>» We deliver a “WOW” experience</p>
                <p>» Precision and care is our way of center</p>
              </div>
            </div>
            <div className="justify-center items-center space-y-3 flex flex-col w-80 lg:w-96 shadow-2xl rounded-sm bg-white p-7">
              <p className="text-4xl text-center font-bold">Mission</p>
              <div className="text-xs text-center flex flex-col items-start">
                <p>» ANEMIA ASSESSMENT PROFILE</p>
                <p>» ANTI MUSK ANTIBODY(MYASTHERIA GRAVIS)</p>
                <p>» ANTI SS-B(ANTI LA)ANTIBODY</p>
                <p>» ANTI SSA(ANTI RO)ANTIBODY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
