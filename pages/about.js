import Head from "next/head";

import React from "react";
import Hero from "../components/about/Hero";

const About = () => {
  return (
    <div className="w-screen min-h-screen">
      <Head>
        <title>SDL | About us</title>
      </Head>
      <Hero />
      <div className="w-screen -z-10 bg-primary relative">
        <div className="absolute -z-10 h-[50%] w-screen bg-[#F4F4F4]" />
        <div className="p-14 z-50">
          <div className="bg-white p-10 rounded-md shadow-2xl font-ubuntu">
            <p className="font-sm text-gray-500 ">Who we are</p>
            <h1 className="text-4xl font-bold">About us</h1>
            <p className="mt-5 text-xl">
              We understand this deeply, which is why we put the patient at the
              centre of our efforts. Precise, Accurate diagnosis means
              potentially helping mitigating catastrophe in the patient's lives
              and giving them more time to spend in the company of their loved
              ones. Our commitment to Excellence and Quality translates to the
              fact that, if we do our job well every single time, we would be
              achieving this valuable and worthwhile end which is worth all the
              struggle. We do not view ourselves as 'just another cog' in a
              large and chaotic machine of healthcare in the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
