import Image from "next/image";
import React from "react";

const MedicalServices = () => {
  return (
    <div className="w-screen min-h-screen bg-primary flex justify-center flex-col">
      <div className="flex flex-col-reverse my-10 lg:flex-row justify-center items-center lg:items-start w-2/3 mx-auto text-white font-ubuntu">
        <div className="flex flex-col text-center lg:text-left justify-center items-center lg:items-start space-y-5">
          <h1 className="text-2xl mt-5 lg:text-5xl text-shadow-sm font-bold">
            Affordable Medical <br />
            Services{" "}
          </h1>
          <p className="lg:w-2/3 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id
            integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc odio in et, lectus sit lorem id integer.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem
            id integer.
          </p>
          <button className="text-xl font-bold border rounded-sm md:hover:scale-90 md:hover:bg-black duration-150 ease-out border-white px-4 py-3">
            Book Appointment
          </button>
        </div>
        <Image
          alt=""
          className="w-96 h-96"
          src={require("../../assets/images/hero-img-2.png")}
        />
      </div>
    </div>
  );
};

export default MedicalServices;
