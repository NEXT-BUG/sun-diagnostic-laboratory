import Image from "next/image";
import React from "react";

const mockNews = [
  {
    image: "news-1.png",
    title: "Title 1",
    shortDesc:
      "Commodo mollit elit nulla excepteur aliqua aute excepteur reprehenderit minim enim anim nulla.Magna ad sunt nostrud cupidatat pariatur ad.",
  },
  {
    image: "news-2.png",
    title: "Title 2",
    shortDesc:
      "Commodo mollit elit nulla excepteur aliqua aute excepteur reprehenderit minim enim anim nulla.Magna ad sunt nostrud cupidatat pariatur ad.",
  },
  {
    image: "news-3.png",
    title: "Title 3",
    shortDesc:
      "Commodo mollit elit nulla excepteur aliqua aute excepteur reprehenderit minim enim anim nulla.Magna ad sunt nostrud cupidatat pariatur ad.",
  },
];

const News = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-primary to-black w-screen pb-10 h-full lg:h-screen text-white flex flex-col items-center space-y-4">
        <div className="w-[70%] h-1 rounded-lg mb-5 lg:mb-0 lg:w-1 lg:h-[13%] mt-10 bg-black mx-auto" />
        <div className="lg:pb-20">
          <h1 className="text-3xl text-center font-bold ">Latest Blogs</h1>
          <p className="text-sm font-semibold text-center text-black">
            Check Out Some Of Our Blogs
          </p>
        </div>

        <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-evenly w-screen">
          {mockNews?.map((news, index) => (
            <Cards key={index} {...news} />
          ))}
        </div>
      </div>
      <div className="w-screen h-32 lg:h-64 bg-black space-y-5 text-white text-center">
        <div className="w-[70%] h-1 rounded-lg mb-5 lg:mb-0 lg:w-1 lg:h-[30%] bg-primary mx-auto" />
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <button className="px-4 py-3 border border-primary rounded-sm font-bold md:hover:scale-75 duration-300 ease-out">
            Make Enquiry
          </button>
        </div>
      </div>
    </>
  );
};

export default News;

const Cards = ({ image, title, shortDesc }) => {
  return (
    <div className="w-96 md:hover:scale-105 md:active:scale-95 duration-150 ease-out space-y-4 border rounded-lg border-primary">
      <Image
        alt=""
        src={require(`../../assets/images/${image}`)}
        className="rounded-t-lg"
      />
      <div className="p-4 space-y-3">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm font-semibold">{shortDesc}</p>
      </div>
    </div>
  );
};
