import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { SlMouse } from "react-icons/sl";
const Hero = () => {
  const router = useRouter();
  return (
    <div className="h-full w-screen hero-bg bg-black">
      <div className="pb-10 w-2/3 mx-auto space-y-10 flex flex-col items-center lg:items-start">
        <h1 className="mt-5 text-white text-center lg:text-left text-6xl md:text-5xl font-bold">
          Fully Automated <br /> Laboratory
        </h1>
        <button
          onClick={() => router.push("/about")}
          className="border border-primary rounded-sm md:hover:scale-105 font-bold md:active:scale-90 duration-150 ease-out text-white py-4 px-6"
        >
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
            description="Your health is our priority. We provide diagnostic testing for an affordable price and are dedicated to providing the best care for you!
            "
          />
          <Cards
            title="Highly Accurate Reports"
            image="hero-card-3.png"
            description="We provide highly accurate reports by Sun Diagnostic lab staff. We use latest techniques, state-of-art equipment and latest technologies to deliver our services."
          />
        </div>
      </div>
      <SlMouse className="text-primary h-10 w-full hidden lg:block pb-4 animate-pulse" />
    </div>
  );
};

export default Hero;

const Cards = ({ title, image, description }) => {
  return (
    <div className="bg-[#313131] w-64 p-5 space-y-3 rounded-sm border border-primary shadow-xl">
      <div className="w-10 h-10">
        <Image alt="" src={require(`../../assets/images/${image}`)} />
      </div>
      <p className="text-white font-bold text-lg">{title}</p>
      <div className="w-[30%] h-1 bg-primary rounded-md" />
      <p className="text-white text-sm">{description}</p>
    </div>
  );
};
