import Image from "next/image";
import React from "react";

import "swiper/css";

const mockTestimonials = [
  {
    quote:
      "Ex do excepteur cillum ullamco anim.Et anim Lorem nostrud ipsum.Minim ad sunt elit magna dolore aute non mollit magna elit proident.",
    star: 5,
    avatar: "https://bit.ly/3fmmc8h",
    name: "Name",
    designation: "Designation",
  },
  {
    quote:
      "Incididunt veniam sunt veniam occaecat culpa ea commodo id proident ea dolor quis ut irure.Et deserunt ullamco do est qui et pariatur aliqua labore.Duis laborum et minim ex tempor Lorem ex nisi pariatur sit est.",
    star: 5,
    avatar: "https://bit.ly/3fmmc8h",
    name: "Name",
    designation: "Designation",
  },
  {
    quote:
      "Aliquip non culpa consectetur irure officia.Sint minim aliquip elit ad culpa in sunt proident adipisicing tempor dolor.Aute ut ullamco consequat ad excepteur minim aute reprehenderit.",
    star: 5,
    avatar: "https://bit.ly/3fmmc8h",
    name: "Name",
    designation: "Designation",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black w-screen h-full pb-20 lg:pb-32 relative pt-10">
      <div className="w-[80%] mx-auto space-y-5 flex flex-col items-center lg:items-start">
        <div className="flex items-center space-x-5 w-full text-center justify-center lg:justify-start">
          <div className="w-[40%] lg:w-[8%] h-1 bg-primary rounded-md" />
          <p className="text-white font-bold text-2xl">Testimonials</p>
          <div className="w-[40%] lg:hidden h-1 bg-primary rounded-md" />
        </div>
        <p className="text-primary text-sm font-semibold">The Solar for Cure</p>
      </div>

      <div className="flex justify-center flex-wrap items-center space-y-32 lg:space-y-0 lg:space-x-6 w-2/3 mx-auto mt-10 pb-10">
        {mockTestimonials.map((testimonial, index) => (
          <Card key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

const Card = ({ quote, star, avatar, name, designation }) => {
  return (
    <div className="bg-black relative border-2 border-primary rounded-sm p-5 w-64 space-y-5 flex flex-col text-center items-center">
      <Image src={require("../../assets/images/quote.png")} />
      <p className="text-white">{quote}</p>
      <div className="flex space-x-4 pb-4">
        {Array.from({ length: star }, (_, index) => index + 1)?.map(
          (_, index) => (
            <Image src={require("../../assets/images/star.png")} />
          )
        )}
      </div>
      <Image
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
