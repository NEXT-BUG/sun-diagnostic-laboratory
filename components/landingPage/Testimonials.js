import Image from "next/image";
import React from "react";

import "swiper/css";

const mockTestimonials = [
  {
    quote:
      "Good Service and Laboratory, Proper Response from staffs, overall recommended",
    star: 5,
    avatar: "https://bit.ly/3fmmc8h",
    name: "Bala",
    designation: "Designation",
  },
  {
    quote:
      "Very Good Diagnostic Center with friendly staffs, adn very good atmosphere. Thanks to Sun Diagnostics Laboratory Nellore",
    star: 5,
    avatar: "https://bit.ly/3fmmc8h",
    name: "Vignesh Dev",
    designation: "Designation",
  },
  {
    quote:
      "Cost is Low, Good Staffs, Done Pregrancy Test for my wife (Nearly 6 tests - 1850 and will get 10% discount), also I am satisfied, The same test cose Rs.2500 from other diagnostic center.",
    star: 5,
    avatar: "https://bit.ly/3fmmc8h",
    name: "Vanitha",
    designation: "Designation",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#374957] w-screen h-full  pb-20 lg:pb-32 relative">
      <div className="w-[80%] mx-auto flex flex-col items-center pt-10 lg:items-start">
        <div className="flex items-center space-x-5 w-full text-center justify-center lg:justify-start">
          <div className="w-[40%] lg:w-[8%] h-1 bg-primary rounded-md" />
          <p className="text-white font-bold text-2xl">Testimonials</p>
          <div className="w-[40%] lg:hidden h-1 bg-primary rounded-md" />
        </div>
        <p className="text-primary text-sm font-semibold">The Solar for Cure</p>
      </div>

      <div className="flex justify-center flex-col items-center lg:items-start lg:flex-row space-y-32 lg:space-y-0 lg:space-x-6 w-2/3 mx-auto mt-10 ">
        {mockTestimonials.map((testimonial, index) => (
          <Card key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

const Card = ({ quote, star, name, designation }) => {
  return (
    <div className="bg-[#374957] relative border-2 border-primary rounded-sm p-5 w-64 space-y-5 flex flex-col text-center items-center">
      <Image alt="" src={require("../../assets/images/quote.png")} />
      <p className="text-white">{quote}</p>
      <div className="flex space-x-4 pb-4">
        {Array.from({ length: star }, (_, index) => index + 1)?.map(
          (_, index) => (
            <Image
              alt=""
              key={index}
              src={require("../../assets/images/star.png")}
            />
          )
        )}
      </div>
      <Image
        alt=""
        src={require("../../assets/images/avatar.png")}
        className="absolute -bottom-10"
      />
      <h1 className="text-white absolute text-lg font-bold -bottom-16">
        {name}
      </h1>
      <p className="text-white absolute text-sm font-semibold -bottom-20">
        {designation}
      </p>
    </div>
  );
};
