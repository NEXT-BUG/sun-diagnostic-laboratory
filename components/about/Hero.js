import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Hero = ({ aboutRef }) => {
  const router = useRouter();
  return (
    <div>
      <div className="w-100/10 mx-auto relative bg-[#00afa0] h-1 rounded-lg" />
      <div className="flex flex-col h-full lg:flex-row text-center lg:text-left items-start w-2/3 mx-auto space-x-10 justify-between mt-20">
      <Image alt="" src={require("../../assets/images/hero-img-2.png")} />
      <div className="flex flex-col lg:w-2/3 space-y-5 mb-20">
        <h1 className="font-bold text-4xl font-ubuntu">
          Sun Diagnostics Laboratory
        </h1>
        <p className="font-ubuntu text-xs">
          Sun Diagnostic Laboratory is a state-of-the-art, Fully Automated
          Clinical Laboratory and Diagnostic Solution provider operating under
          the clinical oversight of Experienced Consultants. Sun Diagnostic Lab
          represents a new paradigm for pathology services. Sun Diagnostic
          Laboratory delivers service of unrivaled quality and accuracy. Sun
          Diagnostic Laboratory also is constantly increasing its already
          wide-ranging test menu to accommodate the needs of India's dynamic
          healthcare landscape. Sun Diagnostic Laboratory has well equipped
          ultra modern diagnostic laboratory. Provides excellent platform to
          carry wide range of investigations using modern technology.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() =>
              aboutRef?.current.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="md:hover:scale-105 md:hover:bg-slate-100 duration-300 ease-out font-semibold px-8 bg-[#F4F4F4] py-3 rounded-full border"
          >
            View More
          </button>
          <button
            onClick={() => router.push("/services")}
            className="md:hover:scale-105 md:hover:bg-slate-100 duration-300 ease-out font-semibold px-8 bg-[#F4F4F4] py-3 rounded-full border"
          >
            Services
          </button>
        </div>
        <div className="h-[0.1rem] w-full bg-primary rounded-full" />

        <p className="text-md font-ubuntu">
          Have any questions? <br /> Contact us!
        </p>
        <p className="font-bold text-xl">
          +91 861 231 6078
          <br />
          +91 90309 31931
        </p>
      </div>
      </div>
    </div>
  );
};

export default Hero;
