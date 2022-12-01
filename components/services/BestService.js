import Image from "next/image";
import React from "react";
import { services } from "../../mock/services";

const BestService = () => {
  return (
    <div className="w-screen min-h-screen p-10">
      <div className="text-secondary text-center space-y-2">
        <h1 className="font-bold text-3xl">We Provide The Best Services</h1>
        <p className="font-light text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 justify-evenly mt-10 flex-wrap">
        {services.map((service, index) => {
          return <ServiceCard {...service} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BestService;

const ServiceCard = ({ title, desc, image }) => {
  return (
    <div className="group md:w-1/3 font-ubuntu md:cursor-pointer md:hover:bg-primary md:hover:scale-110 duration-150 ease-out bg-slate-300 rounded-md">
      <div className="p-5">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm font-light">{desc}</p>
      </div>
      <div className="flex items-start justify-between relative w-full h-full">
        <p className="invisible">Hello</p>
        <Image
          className="md:group-hover:opacity-100 h-64 relative bottom-0 opacity-40 right-0"
          src={image}
        />
      </div>
    </div>
  );
};
