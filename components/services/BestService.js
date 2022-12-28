import React from "react";
import { services } from "../../mock/services";

const BestService = () => {
  return (
    <div className="w-screen min-h-screen p-10">
      <div className="text-secondary text-center space-y-2">
        <h1 className="font-bold text-3xl">We Provide The Best Services</h1>
        <p className="font-light text-sm">
        The services includes
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 justify-evenly mt-10 flex-wrap">
        {services.map((service, index) => {
          return (
            <ServiceCard
              title={service.title}
              desc={service.desc}
              image={<service.image className="text-black w-10 h-10" />}
              key={index}
            />
          );
        })}
      </div>
      <div className="w-100/10 mx-auto relative top-20 bg-[#00afa0] h-1 rounded-lg" />
    </div>
    
  );
};

export default BestService;

const ServiceCard = ({ title, desc, image }) => {
  return (
    <div className="md:w-1/5 group font-ubuntu md:cursor-pointer md:hover:bg-primary md:hover:scale-110 duration-150 ease-out bg-slate-300 rounded-md">
      <div className="p-5 py-8 flex flex-col space-y-4 justify-center items-center">
        <p>{image}</p>
        <h1 className="font-bold text-xl md:group-hover:text-white">{title}</h1>
        <p className="text-sm font-light md:group-hover:text-white text-center">
          {desc}
        </p>
      </div>
    </div>
  );
};
