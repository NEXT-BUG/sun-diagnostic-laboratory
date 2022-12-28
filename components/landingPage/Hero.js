import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
const Hero = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-100/10 mx-auto relative   bg-[#00afa0] h-1 rounded-lg" />
      <div className="h-full w-screen hero-bg bg-black">
        <div className="pb-10 w-2/3 mx-auto space-y-20 flex flex-col items-center lg:items-start">
          <h1 className="mt-10 text-[#374957] text-center lg:text-left text-6xl md:text-5xl font-bold">
            Fully Automated <br /> Laboratory
          </h1>
          {/* <button
            onClick={() => router.push("/about")}
            className="border border-primary bg-white md:hover:bg-gray-100 shadow-2xl rounded-lg md:hover:scale-105 font-bold md:active:scale-90 duration-150 ease-out text-black py-2 px-4"
          >
            View More
          </button> */}
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
      </div>
    </div>
  );
};

export default Hero;

const Cards = ({ title, image, description }) => {
  return (
    <div className="bg-[#374957] w-64 p-5 space-y-3 rounded-sm border border-primary shadow-xl">
      <div className="w-10 h-10">
        <Image alt="" src={require(`../../assets/images/${image}`)} />
      </div>
      <p className="text-white font-bold text-lg">{title}</p>
      <div className="w-[30%] h-1 bg-primary rounded-md" />
      <p className="text-white text-sm">{description}</p>
    </div>
  );
};
