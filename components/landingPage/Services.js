import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="bg-black w-screen h-full pb-10 lg:pb-32 relative pt-10">
      <div className="w-[80%] mx-auto space-y-5 flex flex-col items-center lg:items-start">
        <div className="flex items-center space-x-5 w-full text-center justify-center lg:justify-start">
          <div className="w-[40%] lg:w-[8%] h-1 bg-primary rounded-md" />
          <p className="text-white font-bold text-2xl">Services</p>
          <div className="w-[40%] lg:hidden h-1 bg-primary rounded-md" />
        </div>
        <p className="text-primary text-sm font-semibold">
          Provides Our Best Service
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-5 w">
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-1.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-2.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-3.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-3.png"
          />
          <Cards
            title="Clinical Pathology"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            image="services-4.png"
          />
        </div>
      </div>

      <Image
        src={require("../../assets/images/doctors.png")}
        className="h-[50%] object-cover hidden lg:inline-block object-top absolute bottom-0 right-0"
        alt=""
      />
    </div>
  );
};

export default Services;

const Cards = ({ title, description, image }) => {
  return (
    <div className="bg-[#313131] px-5 py-10 w-80 z-10 space-y-5 rounded-sm">
      <div>
        <Image src={require(`../../assets/images/${image}`)} />
      </div>
      <p className="text-white font-bold text-xl">{title}</p>
      <p className="text-white text-sm">{description}</p>
    </div>
  );
};
