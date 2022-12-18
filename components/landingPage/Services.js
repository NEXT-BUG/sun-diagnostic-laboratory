import Image from "next/image";
import React from "react";
import { SlChemistry } from "react-icons/sl";
import { FaMicroscope, FaViruses, FaShieldVirus } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { GiDna2, GiStethoscope } from "react-icons/gi";
import { TbTestPipe } from "react-icons/tb";
import { services } from "../../mock/services";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-black w-screen h-full pb-10 lg:pb-32 relative pt-10">
      <div className="w-[80%] mx-auto space-y-5 flex flex-col items-center lg:items-start">
        <div className="flex items-center space-x-5 w-full text-center justify-center lg:justify-start">
          <div className="w-[40%] lg:w-[8%] h-1 bg-black rounded-md" />
          <p className="text-white font-bold text-2xl">Services</p>
          <div className="w-[40%] lg:hidden h-1 bg-black rounded-md" />
        </div>
        <p className="text-white text-sm font-semibold">
          Provides Our Best Service
        </p>

        <div className="flex flex-wrap justify-center gap-5 w-full">
          {services?.map((item, index) => {
            return (
              <Cards
                key={index}
                title={item?.title}
                description={item?.desc}
                image={
                  <item.image className="text-primary mx-auto w-20 h-20" />
                }
              />
            );
          })}
        </div>
      </div>

      <Image
        alt=""
        src={require("../../assets/images/doctors.png")}
        className="opacity-20 h-[50%] object-cover hidden lg:inline-block object-top absolute bottom-0 right-0"
      />
    </div>
  );
};

export default Services;

const Cards = ({ title, description, image }) => {
  return (
    <div className="md:cursor-pointer bg-[#313131] duration-700 ease-out group shadow-lg px-5 hover:pb-5 w-[16rem] z-10 space-y-5 rounded-sm">
      <div className="translate-y-10">{image}</div>
      <p className="text-white font-bold text-xl translate-y-10">{title}</p>
      <div className="h-1 bg-primary w-full translate-y-10 rounded-full" />
      <p className="group-hover:-translate-y-10 translate-y-10 group-hover:invisible duration-200 ease-out group-hover:text-[#313131] text-center font-bold text-white">
        See More
      </p>
      <p className=" text-[#313131] translate-y-10 invisible group-hover:visible group-hover:text-white group-hover:translate-y-0 duration-200 ease-out  text-sm">
        {description}
      </p>
    </div>
  );
};
